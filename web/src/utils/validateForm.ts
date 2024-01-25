import { ValiError } from 'valibot';

export const validateCitizenID =
	() =>
	(input: string, info: any): string => {
		const m = input.match(/(\d{12})(\d)/);
		if (!m) {
			throw new ValiError([
				{
					validation: 'min_length',
					origin: 'value',
					message: 'เลขประจำตัวประชาชนต้องเป็นตัวเลข 13 หลัก',
					input,
					...info,
				},
			]);
		}
		const digits = m[1].split('');
		const sum = digits.reduce((total: number, digit: string, i: number) => {
			return total + (13 - i) * +digit;
		}, 0);
		const lastDigit = `${(11 - (sum % 11)) % 10}`;
		const inputLastDigit = m[2];
		if (lastDigit !== inputLastDigit) {
			throw new ValiError([
				{
					validation: 'min_length',
					origin: 'value',
					message: 'เลขประจำตัวประชาชนไม่ถูกต้อง',
					input,
					...info,
				},
			]);
		}
		return input;
	};
