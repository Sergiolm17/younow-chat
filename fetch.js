const fetch = require("node-fetch");

fetch("https://api.nightbot.tv/1/song_requests/playlist", {
    body: "q=https%3A%2F%2Fyoutu.be%2FN9qYF9DZPdw",
    headers: {
        Authorization:
            "Bearer 934c3c2803aa833bdf4f04de9efd5b6d9ce34165a54912114659e56d3051ad12",
        "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
