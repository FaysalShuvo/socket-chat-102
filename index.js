const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 8000;



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(port, () => {
  console.log(`port ${port}`);
});
