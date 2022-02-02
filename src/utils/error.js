const ERROR_CODES = {
	EMAIL_NOT_FOUND: 'email не найден'
}

export function error(code) {
	return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка';
}
