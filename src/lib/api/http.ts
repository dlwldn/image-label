import axios from "axios";

const BASE_IMAGE_URL = 'https://jsonplaceholder.typicode.com';

const baseAxios = axios.create({
  baseURL: BASE_IMAGE_URL
})

export default baseAxios;