const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response) {
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var result = num1 + num2;
  response.send("The result of the calculation is " + result);
});

app.get("/bmiCalculator", function(request, response) {
  response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(request, response) {
  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);
  var result = weight / (height * height);
  response.send("Your BMI is " + result);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
