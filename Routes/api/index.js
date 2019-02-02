const router = require("express").Router();
const subsRoutes = require("./items");

router.use("/items", subsRoutes);

module.exports = router;
