export const API_URL = "http://localhost:5000/api/promociones";

export const getPromociones = async () => {
  const res = await fetch(API_URL);
  return res.json();
};
