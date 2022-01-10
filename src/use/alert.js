import {ref} from "vue";

export function useAlert() {
	const alert = ref(false);
	const toggle = () => alert.value = !alert.value;
	const close = () => alert.value = false;

	return {
		alert, toggle, close
	}
}