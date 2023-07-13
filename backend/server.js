const express = require("express");
const app = express();
const storyRoutes = require("./routes/storyRoutes");
const cors = require("cors");

app.use(express.json()); // to parse JSON request bodies
app.use(cors({ origin: "*" }));
app.use("/api", storyRoutes);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
