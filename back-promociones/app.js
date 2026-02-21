require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const session = require("express-session");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors({
  origin: "http://localhost:3003", // tu front
  credentials: true
}));

app.use(session({
  secret: "secreto123",
  resave: false,
  saveUninitialized: false
}));

// handlebars
const { engine } = require("express-handlebars");

app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// rutas
app.use("/admin/login", require("./routes/login"));
app.use("/admin/promociones", require("./routes/promociones"));
app.use("/api", require("./routes/api"));
app.use("/api/contacto", require("./routes/contacto"));

module.exports = app;
