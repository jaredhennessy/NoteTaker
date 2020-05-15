var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./public/assets/routes/apiRoutes")(app);
require("./public/assets/routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
