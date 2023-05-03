const router = require("express").Router();
let Requests = require("../models/requests.model");
const { v4: uuidv4 } = require('uuid');

router.route("/").get(async (req, res) => {
  try {
    const { bid, rid } = req.query;

    const binRequests = await Requests.find({
      bid:bid,
      rid: rid
  });

    const { createdAt, updatedAt, __v, ...reqData } = binRequests._doc;

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

router.route("/new").post(async (req, res) => {
  try {
    const { bid } = req.query;
    const { method, headers, body, path, params, ip } = req.body;

    const newRequest = await Requests.create({
      bid: bid,
      rid: uuidv4(),

      ip: ip,
      path:path,
      method:method,
      headers:JSON.stringify(headers),
      body:body,
      params:JSON.stringify(params)
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
