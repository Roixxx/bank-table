import axios from "axios";
import router from "../router";

const requestAxios = axios.create({
	baseURL: process.env.VUE_APP_FB_URL
})


// если пропала авторизация
requestAxios.interceptors.response.use(null, err => {
	console.log('da')
	if (err.response.status === 401) {
		router.push('/auth?msg=auth');
	}

	return Promise.reject(err);
})

export default requestAxios;
