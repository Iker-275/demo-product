const mongoose = require('mongoose');
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1"]);

function connectToDatabase() {
    try {
        mongoose.connect(process.env.DB_URL);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = { connectToDatabase };