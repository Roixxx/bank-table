import {ref} from "vue";

export function useAlert(showed = false) {
	const alert = ref(showed);
	const toggle = () => alert.value = !alert.value;
	const close = () => alert.value = false;

	return {
		alert, toggle, close
	}
}