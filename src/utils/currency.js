const formatter = new Intl.NumberFormat('ru-RU', {currency: 'RUB', style: 'currency'})

export function currency(val) {
	return formatter.format((val))
}
