const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const Message = require("./src/mongomodel");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

const uri =
  "mongodb+srv://michalzaduban:spartak02@obis-t7duv.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(process.env.MONGODB_URI || uri, {
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Succesfuly connected");
  })
  .catch(err => {
    console.log("connection error");
    throw err;
  });

app.get("/messages", async (req, res) => {
  const messages = await Message.find();
  res.send(messages);
});

app.get("/messages/:_id", async (req, res) => {
  const _id = req.params._id;
  const message = await Message.findOne({ _id: _id });
  res.send(message);
});

app.post("/messages", async (req, res) => {
  const message = new Message({
    message: req.body.message,
    key: req.body.key
  });
  await message.save();
  res.status(200).send(message);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("obisnew/build/"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "obisnew", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`);
});

//   "start-dev": "npx nodemon --exec npx babel-node src/server.js",
