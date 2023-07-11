const express = require("express");
const app = express();
const storyRoutes = require("./routes/storyRoutes");

app.use(express.json()); // to parse JSON request bodies
app.use("/api", storyRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
