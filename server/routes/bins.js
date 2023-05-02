const router = require("express").Router();
let Bins = require("../models/bins.model");
let Requests = require("../models/requests.model");
const { v4: uuidv4 } = require('uuid');

router.route("/").get(async (req, res) => {
    try {

        const { bid } = req.query

        let existingBin = await Bins.findOne({ bid: bid });

        let newBin = false;
        if (!existingBin) {
            newBin = true;
            // existingBin = await Bins.create({
            //     bid: uuidv4()
            // });
        }

        const binRequests = await Requests.find({
            bid: existingBin._id
        })

        return res.json({
            data: {
                new: newBin,
                bin: existingBin,
                requests: binRequests,
            },
            success: true
        });

    } catch (error) {
        console.log(error.message)
        return res.send({ success: false, message: "Error fetching bin." });
    }
});

module.exports = router;