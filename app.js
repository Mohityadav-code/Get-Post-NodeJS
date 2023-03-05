const express = require("express");

const fs = require("fs");

const app = express();

const port = 3000;

app.get("/dataOfProducts", (req, res) => {
  fs.readFile("data.json","utf-8", (err, data) => {
    if (err) {
      console.log("There is an error");
    } else {
      console.log(data);

      res.send(data);
    }
  });
});
app.listen(port, () => {
  console.log("server is running");
});

app.use(express.json());


app.post("/sendData", (req, res) => {

  //! read it and then  const dataArray = JSON.parse(data);  convert it into array push into it again convert it into json

  fs.readFile("data.json", (err, data) => {
    var arr = JSON.parse(data);

    class products {
      constructor() {}
    }
    fs.readFile;
    var temp = new products();
    temp.id = arr.length + 1;
    console.log(arr.length);
    temp.name = req.body.name;
    temp.total_quantity = req.body.total_quantity;
    temp.type_of_product = req.body.type_of_product;
    temp.price = req.body.price;
    console.log("dat: ", data);
    arr.push(temp);
    const dataString = JSON.stringify(arr);
    fs.writeFile("data.json", `${dataString}`, (err) => {
      if (err) {
        console.log("there is an error writing in file");
      }
    });
  });
  res.send("data submitted");
});
