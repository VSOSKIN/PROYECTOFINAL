export default function PromocionesItem({ promocion }) {
  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h2>{promocion.titulo}</h2>
      <h4>{promocion.subtitulo}</h4>
      <p>{promocion.cuerpo}</p>
      {promocion.imagen_id && (
        <img src={`/imagenes/${promocion.imagen_id}.jpg`} alt={promocion.titulo} width={200} />
      )}
    </div>
  );
}
