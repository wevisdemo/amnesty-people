import { mkdir, writeFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';
import 'dotenv/config';
import { Location, Event, LeTruck, Count } from '@amnesty-people/models';
import { countSubmittedDocuments } from '@amnesty-people/web/src/utils/firebase';

const OUTPUT_PATH = './dist';

async function fetchWithColumns<T>(csvUrl: string): Promise<T> {
	const res = await fetch(csvUrl);
	const content = await res.text();
	return parse(content, { columns: true }) as T;
}

async function fetchFiles() {
	if (
		!process.env.LOCATION_CSV_URL ||
		!process.env.EVENT_CSV_URL ||
		!process.env.LE_TRUCK_CSV_URL ||
		!process.env.OFFLINE_COUNT_CSV_URL
	) {
		console.error('*_CSV_URL parameters have not been set properly!');
		console.log(`
	  LOCATION_CSV_URL=${process.env.LOCATION_CSV_URL}
	  EVENT_CSV_URL=${process.env.EVENT_CSV_URL}
	  LE_TRUCK_CSV_URL=${process.env.LE_TRUCK_CSV_URL}
	  OFFLINE_COUNT_CSV_URL=${process.env.OFFLINE_COUNT_CSV_URL}
	  `);
		return;
	}

	const results = await Promise.all([
		fetchWithColumns<Location[]>(process.env.LOCATION_CSV_URL),
		fetchWithColumns<Event[]>(process.env.EVENT_CSV_URL),
		fetchWithColumns<LeTruck[]>(process.env.LE_TRUCK_CSV_URL),
		fetchWithColumns<Count[]>(process.env.OFFLINE_COUNT_CSV_URL),
	]);

	await mkdir(OUTPUT_PATH + '/data', { recursive: true });

	await writeFile(
		`${OUTPUT_PATH}/data/locations.json`,
		JSON.stringify(results[0]),
	);
	await writeFile(
		`${OUTPUT_PATH}/data/events.json`,
		JSON.stringify(results[1]),
	);
	await writeFile(
		`${OUTPUT_PATH}/data/le-trucks.json`,
		JSON.stringify(results[2]),
	);
	await writeFile(
		`${OUTPUT_PATH}/data/count.json`,
		JSON.stringify(results[3][0]),
	);
	await writeFile(
		`${OUTPUT_PATH}/online-petition.html`,
		`count: ${await countSubmittedDocuments()}<br/>updated at ${new Date().toLocaleString(
			'TH-th',
			{ timeZone: 'Asia/Bangkok' },
		)}`,
	);

	process.exit();
}

fetchFiles();
