<script lang="ts">
	import ActivityDay from './ActivityDay.svelte';
	import type { ActivityDetailProps } from './ActivityDay.svelte';

	const SAMPLE_EVENTS: ActivityDetailProps[] = [
		{
			name: 'งานนิทรรศการภาพถ่ายและเสวนา เรื่องความรุนแรงโดยรัฐและกระบวนการยุติธรรม และนิรโทษกรรม',
			eventUrl: 'https://google.com/',
			province: 'เชียงใหม่',
			timeDescription: '13.00-19.00 น.',
			location: 'พิพิธภัณฑ์ธรรมศาสตร์เฉลิมพระเกียรติ',
			locationUrl: 'https://google.com/',
			organizedBy: 'อมธ. x พิพิธภัณฑ์สามัญชน',
			description:
				'Lorem ipsum dolor sit amet consectetur. Id varius vitae ut iaculis gravida malesuada eget. Augue libero vitae magna eros.',
		},
		{
			name: 'งานนิทรรศการภาพถ่ายและเสวนา เรื่องความรุนแรงโดยรัฐและกระบวนการยุติธรรม และนิรโทษกรรม1',
			eventUrl: 'https://google.com/',
			province: 'เชียงใหม่',
			timeDescription: '13.00-19.00 น.',
			location: 'พิพิธภัณฑ์ธรรมศาสตร์เฉลิมพระเกียรติ',
			locationUrl: 'https://google.com/',
			organizedBy: 'อมธ. x พิพิธภัณฑ์สามัญชน',
			description:
				'Lorem ipsum dolor sit amet consectetur. Id varius vitae ut iaculis gravida malesuada eget. Augue libero vitae magna eros.',
		},
	];

	const DAYS: [number, ActivityDetailProps[]][] = [
		[1, SAMPLE_EVENTS],
		[2, SAMPLE_EVENTS],
		[3, SAMPLE_EVENTS],
		[4, SAMPLE_EVENTS],
		[5, SAMPLE_EVENTS],
	];

	const CURRENT_DAY = 3;

	$: activityCount = DAYS.map(([, activities]) => activities.length).reduce(
		(a, b) => a + b,
		0,
	);

	let searchQuery = '';

	$: formattedSearchQuery = searchQuery.trim();
	$: searchedActivities = formattedSearchQuery
		? DAYS /* TODO: Filtering Logic */
		: DAYS;
</script>

<div class="flex flex-col gap-[10px] px-4 py-[10px] w-full">
	<h1 class="heading-responsive-01 text-balance leading-none text-center">
		ตลอด 14 วัน มีกิจกรรม รวม {activityCount} กิจกรรม
	</h1>
	<div class="flex items-center gap-1 -mt-[4px] p-2 bg-base-200 rounded-lg">
		<img
			src="/icons/magnify.svg"
			alt=""
			width="16"
			height="16"
			loading="lazy"
			decoding="async"
		/>
		<input
			class="w-full bg-transparent outline-none focus:ring-2 focus:ring-primary-focus rounded"
			type="text"
			placeholder="ค้นหากิจกรรมด้วยชื่อจังหวัด..."
			bind:value={searchQuery}
		/>
	</div>
	<div class="flex flex-col gap-[10px]">
		{#each searchedActivities as [day, activities] (day)}
			<ActivityDay
				{day}
				{activities}
				isPassed={day < CURRENT_DAY}
				highlightProvince={formattedSearchQuery}
			/>
		{:else}
			<p class="body-02-normal text-center text-balance mt-[20px]">
				ไม่มีกิจกรรมในจังหวัดที่คุณค้นหา
			</p>
		{/each}
	</div>
</div>
