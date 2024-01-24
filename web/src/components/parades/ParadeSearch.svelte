<script lang="ts">
	import ActivityDay from '../activities/ActivityDay.svelte';
	import type { ActivityDetailProps } from '../activities/ActivityDay.svelte';

	const SAMPLE_EVENTS: ActivityDetailProps[] = [
		{
			name: 'งานนิทรรศการภาพถ่ายและเสวนา เรื่องความรุนแรงโดยรัฐและกระบวนการยุติธรรม และนิรโทษกรรม',
			province: 'เชียงใหม่',
			time: '13.00-19.00 น.',
			location: 'พิพิธภัณฑ์ธรรมศาสตร์เฉลิมพระเกียรติ',
			mapURL: 'https://google.com/',
			arrangeBy: 'อมธ. x พิพิธภัณฑ์สามัญชน',
			details:
				'Lorem ipsum dolor sit amet consectetur. Id varius vitae ut iaculis gravida malesuada eget. Augue libero vitae magna eros.',
		},
		{
			name: 'งานนิทรรศการภาพถ่ายและเสวนา เรื่องความรุนแรงโดยรัฐและกระบวนการยุติธรรม และนิรโทษกรรม1',
			province: 'เชียงใหม่',
			time: '13.00-19.00 น.',
			location: 'พิพิธภัณฑ์ธรรมศาสตร์เฉลิมพระเกียรติ',
			mapURL: 'https://google.com/',
			arrangeBy: 'อมธ. x พิพิธภัณฑ์สามัญชน',
			details:
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

	let searchQuery = '';

	$: formattedSearchQuery = searchQuery.trim();
	$: searchedActivities = formattedSearchQuery
		? DAYS /* TODO: Filtering Logic */
		: DAYS;
</script>

<div class="flex flex-col gap-[10px] px-4 py-[10px] w-full">
	<h1 class="heading-responsive-01 text-balance leading-none text-center">
		กำหนดการเส้นทางรถแห่ ตลอด 14 วัน
	</h1>
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
