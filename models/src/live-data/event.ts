export interface Event {
	date: string; // ISO date in "YYYY-MM-DD" format
	timeDescription: string;
	name: string;
	description?: string;
	location: string;
	province: string;
	locationUrl?: string;
	organizedBy: string;
	eventUrl?: string;
}
