const express = require("express");
const app = express();
const port = 3000;

app.get("/get", (req, res) => {
  console.log("req::", req.query);
  // res.send("Hello World!");
  // res.status(500).json()
  res.json({
    data: {
      name: 'zhangsan',
      age: 29
    },
    code: '000000'
  })
});

app.post("/post", function (req, res) {
  console.log("post");
  var str = "";
  req.on("data", function (chunk) {
    str += chunk;
  });
  req.on("end", function () {
    console.log(str);
    res.end("ok");
  });
  res.json({
    code: '606',
    data: {
      some: '1212'
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
