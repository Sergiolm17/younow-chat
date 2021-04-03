const puppeteer = require("puppeteer");
const express = require("express");
const socketio = require("socket.io");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
const http = require("http").Server(app);
const io = socketio(http);
io.sockets.on("connection", async function (socket) {
    //const client = new Client(/* ... */);
    //await client.connect(); // connect to database

    const browser = await puppeteer.launch({ headless: false });
    const [page] = await browser.pages();

    // call a handler when a mutation happens
    async function mutationListener(addedText) {
        let data = addedText.split(/\r|\n/);
        console.log(data);

        //await client.query("INSERT INTO users(text) VALUES($1)", [addedText]);
    }
    page.exposeFunction("mutationListener", mutationListener);

    await page.goto(`https://www.younow.com/${process.env.YOUNOW_USER}`);
    await page.waitForSelector(".chat-list");
    await page.click('button[class="button button--green"]');
    await page.evaluate(() => {
        // wait for any mutations inside a specific element (e.g. the chatbox)
        const observerTarget = document.querySelector(".chat-list");
        const mutationObserver = new MutationObserver((mutationsList) => {
            // handle change by checking which elements were added and which were deleted
            for (const mutation of mutationsList) {
                const { removedNodes, addedNodes } = mutation;
                mutationListener(addedNodes[0].innerText);
            }
        });
        mutationObserver.observe(
            // start observer
            observerTarget,
            { attributes: true, childList: true, subtree: true }
        );
    });
});

http.listen(PORT, () => console.log("listening on http://localhost:" + PORT));
