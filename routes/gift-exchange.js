const express = require("express");
const GiftExchange = require("../models/gift-exchange");
const router = express.Router();
// const names = ["me", "you", "them", "us", "her", "him", "they", "ya'll"]
// const giftExchangePairs = GiftExchange.pairs(names)
// const giftExchangeTrad = GiftExchange.traditional(names)

router.post("/pairs", async (req, res, next) => {
    const results = await GiftExchange.pairs(req.body.names);
    res.status(200).json({ results })
})

router.post("/traditional", async (req, res, next) => {
    const results = await GiftExchange.traditional(req.body.names);
    res.status(200).json({ results })
})

module.exports = router;