// src/app/componentes/promocionesItem.js
"use client";  // <--- obligatorio si usas hooks

import React, { useState } from "react";

export default function PromocionesItem({ promocion }) {
  // ejemplo de uso de hook
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <h2>{promocion.titulo}</h2>
      <p>{promocion.subtitulo}</p>
      <p>{promocion.cuerpo}</p>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}
