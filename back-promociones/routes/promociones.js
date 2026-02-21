const upload = require("../upload");
const cloudinary = require("../cloudinary");


const express = require("express");
const router = express.Router();
const db = require("../db");

// proteger admin
router.use((req, res, next) => {
  if (req.session.user) next();
  else res.redirect("/admin/login");
});

// LISTAR promociones
router.get("/", async (req, res) => {
  const [promos] = await db.query("SELECT * FROM promociones");
  res.render("admin/promociones", { promos });
});

// FORM EDITAR
router.get("/editar/:id", async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM promociones WHERE id = ?",
    [req.params.id]
  );

  res.render("admin/editar_promocion", { promocion: rows[0] });
});

// GUARDAR CAMBIOS
router.post("/editar/:id", upload.single("imagen"), async (req,res)=>{

 let imagen=null;

 if(req.file){
   const result = await cloudinary.uploader.upload(req.file.path);
   imagen = result.secure_url;
 }

 const {titulo,subtitulo,cuerpo}=req.body;

 if(imagen){
  await db.query(
   "UPDATE promociones SET titulo=?,subtitulo=?,cuerpo=?,imagen_id=? WHERE id=?",
   [titulo,subtitulo,cuerpo,imagen,req.params.id]
  );
 } else {
  await db.query(
   "UPDATE promociones SET titulo=?,subtitulo=?,cuerpo=? WHERE id=?",
   [titulo,subtitulo,cuerpo,req.params.id]
  );
 }

 res.redirect("/admin/promociones");
});

console.log(process.env.CLOUDINARY_CLOUD_NAME);

// BORRAR SOLO IMAGEN
router.get("/borrar-imagen/:id", async (req, res) => {
  await db.query(
    "UPDATE promociones SET imagen_id=NULL WHERE id=?",
    [req.params.id]
  );

  res.redirect("/admin/promociones/editar/" + req.params.id);
});


// BORRAR
router.get("/borrar/:id", async (req, res) => {
  await db.query("DELETE FROM promociones WHERE id = ?", [req.params.id]);
  res.redirect("/admin/promociones");
});

// FORM NUEVO
router.get("/nuevo", (req, res) => {
  res.render("admin/nueva_promocion");
});

// GUARDAR NUEVO
router.post("/nuevo", upload.single("imagen"), async (req,res)=>{

 let imagen=null;

 if(req.file){
   const result = await cloudinary.uploader.upload(req.file.path);
   imagen = result.secure_url;
 }

 const {titulo,subtitulo,cuerpo}=req.body;

 await db.query(
  "INSERT INTO promociones (titulo,subtitulo,cuerpo,imagen_id) VALUES (?,?,?,?)",
  [titulo,subtitulo,cuerpo,imagen]
 );

 res.redirect("/admin/promociones");
});


module.exports = router;
