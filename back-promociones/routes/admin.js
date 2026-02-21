const express = require("express");
const router = express.Router();
const db = require("../db");

function auth(req, res, next) {
  if (req.session.user) next();
  else res.status(401).json({ error: "No autorizado" });
}

// VER promociones
router.get("/", auth, async (req, res) => {
  const [rows] = await db.query("SELECT * FROM promociones");
  res.json(rows);
});

// BORRAR
router.delete("/:id", auth, async (req, res) => {
  await db.query("DELETE FROM promociones WHERE id=?", [req.params.id]);
  res.json({ success: true });
});

// EDITAR
router.put("/:id", auth, async (req, res) => {
  const { titulo, subtitulo, cuerpo } = req.body;

  await db.query(
    "UPDATE promociones SET titulo=?, subtitulo=?, cuerpo=? WHERE id=?",
    [titulo, subtitulo, cuerpo, req.params.id]
  );

  res.json({ success: true });
});

module.exports = router;
