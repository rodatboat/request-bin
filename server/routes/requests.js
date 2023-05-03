const router = require("express").Router();
let Requests = require("../models/requests.model");

router.route("/new").post(async (req, res) => {
  try {
    const { bid } = req.query;
    const { method, headers, body } = req.body;
    // Missing params, path, ip

    const newRequest = await Requests.create({
      bid: bid,
    });

    const { createdAt, updatedAt, __v, ...reqData } = newRequest._doc;

    return res.json({
      data: {
        request: reqData,
      },
      success: true,
    });
  } catch (error) {
    return res.send({ success: false, message: "Error fetching bin." });
  }
});

module.exports = router;
