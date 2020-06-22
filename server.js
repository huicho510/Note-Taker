const express = require("express");
const htmlRoutes=require("./routes/html");
const apiRoutes = require("./routes/apiRoutes");


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoutes);
app.use(apiRoutes);



app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});