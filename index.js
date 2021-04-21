const puppeteer = require("puppeteer");
const express = require("express");
const path = require("path");

const socketio = require("socket.io");
const app = express();
const PORT = process.env.PORT || 3000;
const USER = process.env.YOUNOW_USER || "bettercalljoel";
const URL = `https://www.younow.com/${USER}`;
// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
const http = require("http").Server(app);
const io = socketio(http);
io.sockets.on("connection", async function (socket) {
    console.log("user connected");
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const [page] = await browser.pages();

    async function mutationListener(addedText, src) {
        let data = addedText.split(/\r|\n/);
        socket.emit("roomJoined", {
            nivel: data[0],
            username: data[1],
            text: data[2],
            src,
        });
    }
    page.exposeFunction("mutationListener", mutationListener);

    await page.goto(URL);
    await page.waitForSelector(".chat-list");
    await page.click('button[class="button button--green"]');
    await page.evaluate(() => {
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
        mutationObserver.observe(
            // start observer
            observerTarget,
            { attributes: true, childList: true, subtree: true }
        );
    });
    socket.on("disconnect", async () => {
        console.log("user disconnected");
        await browser.close();
    });
});

http.listen(PORT, () => console.log("listening on http://localhost:" + PORT));
