const puppeteer = require("puppeteer");
const { Client } = require("pg");

(async () => {
    //const client = new Client(/* ... */);
    //await client.connect(); // connect to database

    const browser = await puppeteer.launch({ headless: false });
    const [page] = await browser.pages();

    // call a handler when a mutation happens
    var count = 0;
    async function mutationListener(addedText) {
        console.log(`${count}`);
        let data = addedText.split(/\r|\n/);
        console.log(data);
        count++;

        //await client.query("INSERT INTO users(text) VALUES($1)", [addedText]);
    }
    page.exposeFunction("mutationListener", mutationListener);

    await page.goto("https://www.younow.com/RADIOPLAY");
    await page.waitForSelector(".chat-list");
    await page.click('button[class="button button--green"]');
    await page.evaluate(() => {
        // wait for any mutations inside a specific element (e.g. the chatbox)
        const observerTarget = document.querySelector(".chat-list");
        const mutationObserver = new MutationObserver((mutationsList) => {
            // handle change by checking which elements were added and which were deleted
            for (const mutation of mutationsList) {
                const { removedNodes, addedNodes } = mutation;
                // example: pass innerText of first added element to our mutationListener
                console.log("dddddddd", addedNodes[0]);

                mutationListener(addedNodes[0].innerText);
            }
        });
        mutationObserver.observe(
            // start observer
            observerTarget,
            { attributes: true, childList: true, subtree: true }
        );
    });
})();
