// Environment Variables
require('dotenv').config();
// Dependencies
const http = require("http");
const express = require("express");
const ws = require("ws");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const bodyParser = require("body-parser");
const router = express.Router();
const request = require("request");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const port = process.env.PORT || 8001;


// Express Setup
const app = express();

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Credentials", true);
    
    next();
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));



// Route to launch React index
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
};


// Websocket Server
const server = http.Server(app);
const wss = new ws.Server({server: server, path: "/"});
app.disable("x-powered-by");

// Helmet
app.use(helmet.hsts());
app.use(helmet.expectCt({
    maxAge: 43200,
    enforce: true,
}));
app.use(helmet.referrerPolicy({
    policy: ["strict-origin-when-cross-origin"],
}));
app.use(helmet.noSniff());
app.use(helmet.xssFilter());



wss.on("connection", function (wss) {
    wss.send("Connection Established with Backroom node server");

    wss.on("message", (e) => {
        console.log("Message recieved - " + e.data);
    });
    
});



// Node Clusters

let workers = [];
const workersAmount = process.env.WEB_CONCURRENCY || 2;


if (cluster.isMaster) {
    console.log("Master " + process.pid + " is running");

    //Fork workers
    for (let i = 0; i < workersAmount; i++) {
        workers.push(cluster.fork());

        // recieve from workers
        workers[i].on("message", (message) => {
            console.log(message);
        });
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log("Worker " + worker.process.pid + " died with code: " + code + " and signal: " + signal);
        console.log("Starting new worker");
        cluster.fork();
        workers.push(cluster.fork());

        workers[workers.length-1].on("message", (message) => {
            console.log(message);
        });
    });
    
} else {
    server.listen(port, () => {
        console.log("Server Running on port " + port);
    });

    console.log("Worker " + process.pid + " started");

};



