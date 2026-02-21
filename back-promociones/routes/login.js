const express = require("express");
const router = express.Router();
const db = require("../db");

// formulario login
router.get("/", (req, res) => {
  res.render("admin/login");
});

// procesar login
router.post("/", async (req, res) => {
  const { usuario, password } = req.body;

  const [rows] = await db.query(
    "SELECT * FROM usuarios WHERE usuario = ? AND password = ?",
    [usuario, password]
  );

  if (rows.length > 0) {
    req.session.user = rows[0];
    res.redirect("/admin/promociones");
  } else {
    res.render("admin/login", { error: "Credenciales incorrectas" });
  }
});



module.exports = router;

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/admin/login");
});

