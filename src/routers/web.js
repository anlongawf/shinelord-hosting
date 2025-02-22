import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Trang chủ");
});

export default router;
