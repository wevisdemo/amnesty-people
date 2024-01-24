import {
	object,
	string,
	toTrimmed,
	length,
	type Output,
	optional,
	minLength,
	regex,
} from 'valibot';
import { validateCitizenID } from '../../web/src/utils/validateForm';

export const PERSONALID_KEY = 'personalid';

export const documentSchema = object({
	location: string([toTrimmed(), minLength(1)]),
	day: string('วันที่ไม่ถูกต้อง', [regex(/([1-9]|[12][0-9]|3[01])/)]),
	month: string('เดือนไม่ถูกต้อง', [regex(/[1-9]|1[0-2]/)]),
	year: string('ปีไม่ถูกต้อง', [regex(/^25[3-6][0-9]$/)]),
	[PERSONALID_KEY]: string([toTrimmed(), validateCitizenID()]),
	prefix: optional(string()),
	firstname: string([toTrimmed(), minLength(1), regex(/^[ก-๙]+$/)]),
	lastname: string([toTrimmed(), minLength(1), regex(/^[ก-๙]+$/)]),
	signature: string('กรุณาลงชื่อ'),
});

export type Document = Output<typeof documentSchema>;
