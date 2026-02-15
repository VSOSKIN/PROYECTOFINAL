"use client";
import { useEffect, useState } from "react";

export default function PromocionesPage() {
  const [promociones, setPromociones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/promociones")
      .then(res => res.json())
      .then(data => setPromociones(data))
      .catch(err => console.error("Error al cargar promociones:", err));
  }, []);

  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
      <h1>Promociones</h1>

      {promociones.length === 0 && <p>No hay promociones cargadas.</p>}

      {promociones.map((p, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid lime",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>{p.titulo}</h3>
          <h4>{p.subtitulo}</h4>
          <p>{p.cuerpo}</p>

          {p.imagen_id && (
            <img
              src={p.imagen_id} // URL de Cloudinary
              alt={p.titulo}
              style={{ maxWidth: "200px" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
