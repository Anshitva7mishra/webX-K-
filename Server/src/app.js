import express from "express";
import cors from "cors";

import rateLimiter from "./middlewares/rateLimit.middleware.js";
import contactRoutes from "./routes/contact.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();


app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));


app.use(rateLimiter);


app.use("/api/contact", contactRoutes);


app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});


app.use(errorMiddleware);

export default app;
