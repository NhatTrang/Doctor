import api from '@/api'
import axios from 'axios'
const getTokenFromRefreshToken = async () => {
  let response = await axios({
    method: 'GET',
    url: api.getNewToken,
    data: localStorage.getItem('doctor_refresh_token'),
  })
  return response
}

const handleCheckAndSetToken = (response) => {
  if (response.code === 1) {
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('doctor_refresh_token', response.data.refresh_token)
  }
  else {
    localStorage.clear()
  }
}

const instance = axios.create({
  baseURL: process.env.VUE_APP_HOST_API,
  timeout: 10000
});
instance.interceptors.request.use(function (req) {
  let token = localStorage.getItem('access_token')
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req
});
axios.interceptors.response.use(function (response) {
  if (response.code == 401) {
    let response = getTokenFromRefreshToken();
    handleCheckAndSetToken(response)
  }
  return response;
}, function (error) {
  return error
});
export default instance;