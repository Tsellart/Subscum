const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/subscriptiondb"
    , { useNewUrlParser: true }
);

const subsSeed = [
    {
        userName : "Spacetitanium",
        service : "Netflix",
        price: 14.99,
        rate: "monthly"
    },
    {
        userName : "Spacetitanium",
        service : "Hulu",
        price: 12.99,
        rate: "monthly"
    },
    {
        userName : "Spacetitanium",
        service : "Netflix",
        price: 14.99,
        rate: "monthly"
    },
    {
        userName : "EkiTa",
        service : "Netflix",
        price: 14.99,
        rate: "monthly"
    },
    {
        userName : "Spunnups",
        service : "WoW",
        price: 12.99,
        rate: "monthly"
    }
];

db.Items
    .remove({})
    .then(() => db.Items.collection.insertMany(subsSeed))
    .then(data => {
        console.log(data.result.n + " Records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });