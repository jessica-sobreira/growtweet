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

export async function listarTweets(userId: string, token: string) {
  try {

    const result = await api.get(`/usuario/${userId}/tweet`, {
      headers: {
        Authorization: token
      }
    });
    
    return result.data.data;
   
  } catch (error: any) {
    alert(error.toString());
    return [];
  } 
}