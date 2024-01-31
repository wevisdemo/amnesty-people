<script lang="ts">
	import { onMount } from 'svelte';
	import ActivityDetail from './activities/ActivityDetail.svelte';
	import { PUBLIC_DATA_URL } from '../utils/data';

	interface EventData {
		date: string;
		timeDescription: string;
		name: string;
		description: string;
		location: string;
		province: string;
		locationUrl: string;
		organizedBy: string;
		eventUrl: string;
	}

	const CURRENT_DAY = (
		new Date() < new Date('2024-02-01T00:00:00+07:00')
			? new Date('2024-02-01T00:00:00+07:00')
			: new Date()
	).toLocaleDateString('th', {
		day: 'numeric',
		month: 'short',
	});

	onMount(async () => {
		const resp = await fetch(`${PUBLIC_DATA_URL}/events.json`);
		const json = (await resp.json()) as EventData[];

		eventList = json.filter(
			(event) =>
				new Date(event.date).toLocaleDateString('th', {
					day: 'numeric',
					month: 'short',
				}) === CURRENT_DAY
		);
	});

	let eventList: EventData[] = [];
</script>

<div class="flex flex-col gap-4 w-full md:max-w-[650px] px-4 py-6 text-neutral">
	<h2 class="heading-responsive-02 text-balance leading-none text-center">
		ตารางกิจกรรม
	</h2>
	<p class="text-center text-balance body-02-normal">
		ช่วยกันแสดงออก ร่วมกิจกรรม รณรงค์ ส่งเสียง ในเทศกาลแห่งความรักปีนี้ 1-14
		กุมภาพันธ์ 2567
	</p>
	<article class="flex flex-col gap-[6px]">
		<h3 class="flex items-center gap-[5px] justify-center body-02-normal">
			<span class="heading-responsive-01">วันที่ {CURRENT_DAY}</span>
			<span>({eventList.length} กิจกรรม)</span>
		</h3>
		{#each eventList as activity}
			<ActivityDetail {...activity} />
		{:else}
			<p class="body-02-normal text-center">ไม่มีกิจกรรมวันนี้</p>
		{/each}
	</article>
	<a class="btn btn-secondary" href="/activities">
		<img
			src="/icons/calendar-w.svg"
			alt=""
			width="16"
			height="16"
			loading="eager"
			decoding="async"
		/>
		ดูกิจกรรมในวันอื่นๆ
	</a>
	<a class="btn btn-secondary" href="/parades">
		<img
			src="/icons/flag-w.svg"
			alt=""
			width="16"
			height="16"
			loading="eager"
			decoding="async"
		/>
		ดูกำหนดการเส้นทางรถแห่
	</a>
	<p class="text-center text-balance body-02-normal mt-2">
		ใครพร้อมเป็นเจ้าภาพจัดกิจกรรม ต้องการวิทยากร อุปกรณ์ ติดต่อทาง <a
			href="https://m.me/iLawClub"
			target="_blank"
			rel="noopener noreferrer"
			class="underline">iLawClub</a
		>
	</p>
</div>
