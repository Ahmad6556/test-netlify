const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const azzaih = require("./models/azzaih");
const mlass = require("./models/mlass");

app.use(express.static('public'))
app.set('view engine', 'ejs')

// auto Refresh

const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// mongoDB

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Ahmad_RAQ:1w3r5y7i8@cluster0.wrxv6um.mongodb.net/")
  .then(result => {
    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}/`)
    })
  })
  .catch(err => {
    console.log(err);
  });

//pages

//index

app.get('/', (req, res) => {
  res.render("index")
})

//mnuat

app.get("/mnuat", (req, res) => {
  azzaih.find()
    .sort({ "name": 1 })
    .then((result) => {
      res.render("mnuat", { item: result });
    })
    .catch((err) => {
      console.log(err);
    });
})

//mouled

app.get("/mouled", (req, res) => {
  azzaih.find()
    .sort({ "name": 1 })
    .then((result) => {
      res.render("mouled", { item: result });
    })
    .catch((err) => {
      console.log(err);
    });
})

//wfah

app.get("/wfah", (req, res) => {
  azzaih.find()
    .sort({ "name": 1 })
    .then((result) => {
      res.render("wfah", { item: result });
    })
    .catch((err) => {
      console.log(err);
    });
})

//duaa

app.get("/duaa", (req, res) => {
  azzaih.find()
    .sort({ "name": 1 })
    .then((result) => {
      res.render("duaa", { item: result });
    })
    .catch((err) => {
      console.log(err);
    });
})

//mlass

app.get("/mlass", (req, res) => {
  mlass.find()
    .then((result) => {
      res.render("mlass", { item: result })
    })
    .catch((err) => {
      console.log(err);
    });
})

app.get("/mlass/:id", (req, res) => {
  mlass.findById(req.params.id)
    .then((resultM) => {
      azzaih.find()
        .then((result) => {
          res.render("mlassI", { item: result, itemM: resultM });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
})

//fuv

////fuv show

app.get("/fuv", (req, res) => {
  res.render("showfuv")
})

////fuv select

app.get("/sfuv", (req, res) => {
  azzaih.find()
    .then((result) => {
      res.render("sellectfuv", { item: result })
    })
    .catch((err) => {
      console.log(err);
    });
})


//support

app.get("/support", (req, res) => {
  res.render("support")
})