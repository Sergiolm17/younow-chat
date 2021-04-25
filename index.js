const puppeteer = require("puppeteer");
const express = require("express");
const path = require("path");
const fs = require("fs").promises;

const socketio = require("socket.io");
const app = express();
const PORT = process.env.PORT || 3001;
const USER = process.env.YOUNOW_USER || "_Loverboy";
const URL = `https://www.younow.com/${USER}`;
// add middlewares
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
const http = require("http").Server(app);
const io = socketio(http);
(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const [page] = await browser.pages();

    await page.goto(URL);
    await page.setRequestInterception(true);

    await page.waitForSelector(".chat-list");
    await page.click('button[class="button button--green"]');
    page.exposeFunction("mutationListener", mutationListener);
    async function mutationListener(addedText, src) {
        let data = addedText.split(/\r|\n/);
        //console.log(data);
        let body = {
            nivel: data[0],
            username: data[1],
            text: data[2],
            src,
        };
        io.sockets.emit("get_message", body);
    }
    page.exposeFunction("mutationListenergift", mutationListenergift);
    async function mutationListenergift(addedText, src) {
        let data = addedText.split(/\r|\n/);
        console.log(data);
        let body = {
            nivel: data[0],
            username: data[1],
            text: data[2],
            src,
        };
        io.sockets.emit("get_message", body);
        //const cookies = await page.cookies();
        //await fs.writeFile("./cookies.json", JSON.stringify(cookies, null, 2));
    }

    await page.evaluate(() => {
        /*
        const observerTarget = document.querySelector(".chat-list");
        const mutationObserver = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                const { removedNodes, addedNodes } = mutation;
                mutationListener(
                    addedNodes[0].innerText,
                    addedNodes[0].getAttribute("src")
                );
            }
        });
        mutationObserver.observe(observerTarget, {
            attributes: true,
            childList: true,
            subtree: true,
        });
        */
        const observerTargetgift = document.querySelector(".chat-list");
        const mutationObservergift = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                const { removedNodes, addedNodes } = mutation;
                mutationListenergift(
                    addedNodes[0].innerText,
                    addedNodes[0].getAttribute("src")
                );
            }
        });
        mutationObservergift.observe(observerTargetgift, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    });

    page.on("request", (request) => {
        console.log(">>", request.method(), request.url());
        request.continue();
    });

    page.on("response", async (response) => {
        console.log("<<", response.status(), response.url());
        if (
            response
                .url()
                .includes(
                    "https://cdn.younow.com/php/api/broadcast/audience/broadcaster=0/channelId"
                )
        ) {
            const body = await response.json();
            //await fs.writeFile("./data.json", JSON.stringify(body, null, 2));
            io.sockets.emit("get_audience", body);
        }
        if (response.url().includes("https://ynassets.younow.com/user/live")) {
            const body = await response.json();
            //await fs.writeFile("./data.json", JSON.stringify(body, null, 2));
            io.sockets.emit("get_images", body);
        }
        if (response.url().includes("https://ynassets.younow.com/gifts/live")) {
            const body = await response.json();
            //await fs.writeFile("./data.json", JSON.stringify(body, null, 2));
            io.sockets.emit("get_gifts", body);
        }
    });
})();
//.gift-overlay
/*
    socket.on("disconnect", async () => {
        console.log("user disconnected");
        await browser.close();
    });
    */
http.listen(PORT, () => console.log("listening on http://localhost:" + PORT));
