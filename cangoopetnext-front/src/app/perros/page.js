export default function PerrosPage() {
  return (
    <main style={styles.container}>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Perros felices, humanos tranquilos 🐶</h1>
        <p style={styles.subtitle}>
          En Cangoopet acompañamos cada movimiento de cola con productos pensados para su bienestar,
          energía y descanso.
        </p>

        <button style={styles.button}>Ver productos</button>
      </section>

      {/* BENEFICIOS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Todo lo que tu perro necesita</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>🦴 Juguetes</h3>
            <p>Estimulan su mente, reducen la ansiedad y fortalecen el vínculo.</p>
          </div>

          <div style={styles.card}>
            <h3>🛏 Camas & descanso</h3>
            <p>Comodidad y soporte para recuperar energía después del juego.</p>
          </div>

          <div style={styles.card}>
            <h3>🍖 Alimentación</h3>
            <p>Opciones nutritivas para una vida activa y saludable.</p>
          </div>

          <div style={styles.card}>
            <h3>🚿 Higiene</h3>
            <p>Shampoo, cepillos y accesorios para mantenerlos limpios y felices.</p>
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section style={styles.quote}>
        <h2>
          “Porque tu perro no es solo una mascota,
          es tu mejor amigo.”
        </h2>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Descubrí nuestra línea canina</h2>
        <p>Productos seleccionados con amor para cada etapa de su vida.</p>
        <button style={styles.button}>Comprar ahora</button>
      </section>

    </main>
  );
}

const styles = {
  container: {
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif"
  },

  hero: {
    padding: "40px 20px",
    textAlign: "center"
  },

  title: {
    fontSize: "36px",
    marginBottom: "10px"
  },

  subtitle: {
    color: "#ccc",
    maxWidth: "550px",
    margin: "0 auto 20px"
  },

  button: {
    padding: "10px 26px",
    background: "#1aff00",
    border: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  section: {
    padding: "35px 20px"
  },

  sectionTitle: {
    textAlign: "center",
    marginBottom: "25px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "18px",
    maxWidth: "850px",
    margin: "auto"
  },

  card: {
    background: "#111",
    padding: "18px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,255,0,0.15)"
  },

  quote: {
    padding: "35px 20px",
    textAlign: "center",
    background: "#050505",
    fontStyle: "italic"
  },

  cta: {
    padding: "35px 20px",
    textAlign: "center"
  }
};
