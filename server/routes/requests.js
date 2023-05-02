const router = require("express").Router();
let Requests = require("../models/requests.model");

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