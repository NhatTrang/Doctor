/* eslint-disable no-prototype-builtins */
let config = {
	host: process.env.VUE_APP_HOST,
	api: process.env.VUE_APP_HOST_API,

	// Home banner
	Login: "/api/auth/login",
};

let api = new Proxy(config, {
	get(target, name) {
		if (name !== "params") {
			return (
				Reflect.get(target, "api").replace(/\/$/, "") +
				Reflect.get(target, name)
			);
		} else {
			return Reflect.get(target, name);
		}
	},
});

api.params = (name, options) => {
	try {
		let endpoint = api[name];
		for (let value in options) {
			if (value && options.hasOwnProperty(value)) {
				endpoint = endpoint.replace(`{${value}}`, options[value]);
			}
		}
		return endpoint;
	} catch (e) {
		console.log(e);
	}
};

export default api;
