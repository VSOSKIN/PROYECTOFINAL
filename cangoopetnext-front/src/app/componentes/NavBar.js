"use client"; // Componente cliente para interactividad

import Link from "next/link";

export default function NavBar() {
  const navStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const linkStyle = {
    color: "white",
    marginRight: "15px",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const logoStyle = {
    fontWeight: "bold",
    fontSize: "24px",
    color: "white",
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Cangoopet</div>
      <div>
        <Link href="/perros" style={linkStyle}>Perros</Link>
        <Link href="/gatos" style={linkStyle}>Gatos</Link>
        <Link href="/aves" style={linkStyle}>Aves</Link>
        <Link href="/peces" style={linkStyle}>Peces</Link>
        <Link href="/promociones" style={linkStyle}>Promociones</Link>
        <Link href="/contacto" style={linkStyle}>Contacto</Link>
      </div>
    </nav>
  );
}
