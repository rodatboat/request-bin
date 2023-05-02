const router = require("express").Router();
let Bins = require("../models/bins.model");

router.route("/").get(async (req, res) => {
    try {
        return res.json({
            success: true
        });

    } catch (error) {
        return res.send({ success: false, message: "Error fetching bin." });
    }
});

module.exports = router;