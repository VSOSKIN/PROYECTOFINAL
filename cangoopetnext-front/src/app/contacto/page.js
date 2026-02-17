"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    try {
      const res = await fetch("http://localhost:3001/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Mensaje enviado correctamente ✅");
        setForm({ nombre: "", email: "", mensaje: "" });
      } else {
        setStatus("No se pudo enviar el mensaje ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("No se pudo enviar el mensaje ❌");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", color: "white" }}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="mensaje" placeholder="Mensaje" value={form.mensaje} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
