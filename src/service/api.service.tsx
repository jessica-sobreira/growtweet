import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
});

export default api;


export async function login(body: any) {
  
try {

  const result = await api.post("/auth", body)
  
  return result.data.data;
 
} catch (error: any) {
  alert(error.toString());
  return null;
}
}