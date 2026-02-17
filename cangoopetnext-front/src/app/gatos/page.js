export default function GatosPage() {
  return (
    <main style={styles.container}>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Gatos felices, humanos tranquilos 🐱</h1>
        <p style={styles.subtitle}>
          En Cangoopet cuidamos cada ronroneo con productos pensados para su bienestar,
          juego y descanso.
        </p>

        <button style={styles.button}>Ver productos</button>
      </section>

      {/* BENEFICIOS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Todo lo que tu gato necesita</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>🧶 Juguetes</h3>
            <p>Estimulan su instinto natural y evitan el estrés.</p>
          </div>

          <div style={styles.card}>
            <h3>🛏 Camas & descanso</h3>
            <p>Espacios suaves y seguros para dormir profundamente.</p>
          </div>

          <div style={styles.card}>
            <h3>🍽 Alimentación</h3>
            <p>Opciones nutritivas para una vida larga y saludable.</p>
          </div>

          <div style={styles.card}>
            <h3>🚿 Higiene</h3>
            <p>Arenas, cepillos y accesorios para mantenerlos limpios.</p>
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section style={styles.quote}>
        <h2>
          “Porque tu gato no es una mascota,
          es parte de tu familia.”
        </h2>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Descubrí nuestra línea felina</h2>
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
