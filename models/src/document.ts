import {
	object,
	string,
	toTrimmed,
	type Output,
	optional,
	minLength,
	regex,
} from 'valibot';
import { validateCitizenID } from '../../web/src/utils/validateForm';

export const PERSONALID_KEY = 'personalid';

export const documentSchema = object({
	location: string([toTrimmed(), minLength(1)]),
	[PERSONALID_KEY]: string([toTrimmed(), validateCitizenID()]),
	prefix: optional(string()),
	firstname: string([toTrimmed(), minLength(1), regex(/^[ก-๙]+$/)]),
	lastname: string([toTrimmed(), minLength(1), regex(/^[ก-๙]| +$/)]),
	signature: string('กรุณาลงชื่อ'),
});

export type Document = Output<typeof documentSchema>;
