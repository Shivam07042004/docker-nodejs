const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (request, response) => {
  return response.json({ message: "Hey , i am nodejs in the container" });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("error in the running the server ", PORT);
  }

  console.log("Server is running in the port ", PORT);
});
