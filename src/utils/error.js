const ERROR_CODES = {
	EMAIL_NOT_FOUND: 'email не найден',
	INVALID_PASSWORD: 'Неверный пароль',
	auth: 'Нужна авторизация',
}

export function error(code) {

	if (code.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) {
		return 'Слишком много попыток входа. Попробуйие позднее'
	}

	return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка';
}
