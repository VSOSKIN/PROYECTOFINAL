export default function PecesPage() {
  return (
    <main style={styles.container}>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Peces tranquilos, acuarios felices 🐠</h1>
        <p style={styles.subtitle}>
          En Cangoopet cuidamos cada burbuja con productos pensados para su bienestar,
          equilibrio y armonía acuática.
        </p>

        <button style={styles.button}>Ver productos</button>
      </section>

      {/* BENEFICIOS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Todo lo que tus peces necesitan</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>🐟 Alimentación</h3>
            <p>Comidas balanceadas para colores vivos y energía constante.</p>
          </div>

          <div style={styles.card}>
            <h3>💧 Filtros & oxigenación</h3>
            <p>Agua limpia y oxigenada para un ecosistema saludable.</p>
          </div>

          <div style={styles.card}>
            <h3>🌿 Decoración</h3>
            <p>Plantas, piedras y refugios para un acuario armónico.</p>
          </div>

          <div style={styles.card}>
            <h3>🧪 Cuidado del agua</h3>
            <p>Productos para mantener el PH y la claridad perfecta.</p>
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section style={styles.quote}>
        <h2>
          “Un acuario equilibrado es
          un mundo lleno de vida.”
        </h2>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Descubrí nuestra línea acuática</h2>
        <p>Todo para crear un espacio relajante y saludable.</p>
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
