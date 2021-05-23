const puppeteer = require("puppeteer");
const express = require("express");
const path = require("path");
const fs = require("fs").promises;

const socketio = require("socket.io");
const app = express();

const PORT = process.env.PORT || 3005;
const USER = process.env.YOUNOW_USER || "BrownEyedGirl22";
const URL = `https://www.younow.com/${USER}`;

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
const http = require("http").Server(app);
const io = socketio(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const [page] = await browser.pages();

    await page.goto(URL);
    await page.setRequestInterception(true);

    await page.waitForSelector(".title");

    let button_green = await page.evaluate(() => {
        let el = document.querySelector('button[class="button button--green"]');
        return el ? true : false;
    });
    if (button_green) {
        await page.click('button[class="button button--green"]');
        page.exposeFunction("mutationListener", mutationListener);
        async function mutationListener(addedText, src) {
            let data = addedText.split(/\r|\n/);
            let body = {
                nivel: data[0],
                username: data[1],
                text: data[2],
                src,
            };
            io.sockets.emit("get_message", body);
        }
        page.exposeFunction("mutationListenergift", mutationListenergift);
        async function mutationListenergift(addedText) {
            let data = addedText.split(/\r|\n/);
            let body = {
                nivel: data[0],
                username: data[1],
                text: data[2],
            };
            io.sockets.emit("get_message", body);
        }

        await page.evaluate(() => {
            const observerTargetgift = document.querySelector(".chat-list");
            const mutationObservergift = new MutationObserver(
                (mutationsList) => {
                    for (const mutation of mutationsList) {
                        const { addedNodes } = mutation;
                        mutationListenergift(addedNodes[0].innerText);
                    }
                },
            );
            mutationObservergift.observe(observerTargetgift, {
                attributes: true,
                childList: true,
                subtree: true,
            });
        });
    } else {
    }
    page.on("request", (request) => {
        //console.log(">>", request.method(), request.url());
        request.continue();
    });

    page.on("response", async (response) => {
        //console.log("<<", response.status(), response.url());
        //audiencia
        if (
            response
                .url()
                .includes(
                    "https://cdn.younow.com/php/api/broadcast/audience/broadcaster=0/channelId",
                )
        ) {
            const body = await response.json();
            //await fs.writeFile("./data.json", JSON.stringify(body, null, 2));
            io.sockets.emit("get_audience", body);
        }
        //images users
        if (response.url().includes("https://ynassets.younow.com/user/live")) {
            io.sockets.emit("get_images", { url: response.url() });
        }
        //stikers
        if (response.url().includes("https://ynassets.younow.com/gifts/live")) {
            console.log("get_gifts", { url: response.url() });
            io.sockets.emit("get_gifts", { url: response.url() });
        }
        if (
            response
                .url()
                .includes(
                    "https://cdn.younow.com/php/api/reco/similarBroadcasters",
                )
        ) {
            const body = await response.json();
            io.sockets.emit("get_similar", body);
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
