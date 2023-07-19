require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const uploadRouter = require("./routes/upload-file-router");

const notFoundMiddleware = require("./middleware/not-found");

app.use("/uploadFile/",uploadRouter)

app.use(notFoundMiddleware);

app.listen(port, () => {
  console.log(`Server listening on port ${port}....`)
})