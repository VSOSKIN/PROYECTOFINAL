export default function AvesPage() {
  return (
    <main style={styles.container}>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Aves felices, hogares llenos de vida 🐦</h1>
        <p style={styles.subtitle}>
          En Cangoopet acompañamos cada canto con productos pensados para su bienestar,
          libertad y alegría.
        </p>

        <button style={styles.button}>Ver productos</button>
      </section>

      {/* BENEFICIOS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Todo lo que tus aves necesitan</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>🌾 Alimentación</h3>
            <p>Semillas y mezclas nutritivas para plumajes brillantes.</p>
          </div>

          <div style={styles.card}>
            <h3>🏠 Jaulas & hábitat</h3>
            <p>Espacios seguros para descansar y moverse libremente.</p>
          </div>

          <div style={styles.card}>
            <h3>🪶 Juguetes</h3>
            <p>Estimulan su mente y reducen el aburrimiento.</p>
          </div>

          <div style={styles.card}>
            <h3>🚿 Higiene</h3>
            <p>Accesorios para mantenerlas limpias y saludables.</p>
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section style={styles.quote}>
        <h2>
          “Cada ave trae consigo
          un pedacito de cielo.”
        </h2>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Descubrí nuestra línea para aves</h2>
        <p>Todo para acompañar su vuelo con amor.</p>
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
