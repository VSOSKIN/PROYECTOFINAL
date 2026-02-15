import "./style.css"; // tu CSS global

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Logo */}
        <div style={{ textAlign: "center", padding: "20px", borderBottom: "2px solid lime" }}>
          <img
            src="/imagenes/logo.png"
            alt="Cangoo Pet"
            style={{ maxWidth: "200px" }}
          />
        </div>

        {/* Navbar */}
        <nav style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "10px 0", borderBottom: "1px solid lime" }}>
          <a href="/perros">Perros</a>
          <a href="/gatos">Gatos</a>
          <a href="/aves">Aves</a>
          <a href="/peces">Peces</a>
          <a href="/promociones">Promociones</a>
          <a href="/contacto">Contacto</a>
        </nav>

        {/* Contenido principal */}
        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
