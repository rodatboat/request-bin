const router = require("express").Router();
let Bins = require("../models/bins.model");
let Requests = require("../models/requests.model");
const { v4: uuidv4 } = require('uuid');

router.route("/").get(async (req, res) => {
    try {

        const { bid } = req.query

        let existingBin = await Bins.findOne({ bid: bid });

        if (!existingBin) {
            // newBin = true;
            // existingBin = await Bins.create({
            //     bid: uuidv4()
            // });
        }

        const binRequests = await Requests.find({
            bid: existingBin.bid
        });

        const {createdAt, updatedAt, __v, ...binData} = existingBin._doc

        return res.json({
            data: {
                bin: binData,
                requests: binRequests,
            },
            success: true
        });

    } catch (error) {
        console.log(error.message)
        return res.send({ success: false, message: "Error fetching bin." });
    }
});

router.route("/new").get(async (req, res) => {
    try {

        let newBin = await Bins.create({
            bid: uuidv4()
        });

        const binRequests = await Requests.find({
            bid: newBin.bid
        });

        return res.json({
            data: {
                new: true,
                bin: newBin,
                requests: binRequests,
            },
            success: true
        });

    } catch (error) {
        console.log(error.message)
        return res.send({ success: false, message: "Error creating bin." });
    }
});

module.exports = router;