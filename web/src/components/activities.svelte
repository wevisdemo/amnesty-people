<script>
	import ActivityDetail from './activities/ActivityDetail.svelte';

	const SAMPLE_EVENTS = [
		{
			name: 'งานนิทรรศการภาพถ่ายและเสวนา เรื่องความรุนแรงโดยรัฐและกระบวนการยุติธรรม และนิรโทษกรรม',
			link: 'https://google.com/',
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
			link: 'https://google.com/',
			province: 'เชียงใหม่',
			time: '13.00-19.00 น.',
			location: 'พิพิธภัณฑ์ธรรมศาสตร์เฉลิมพระเกียรติ',
			mapURL: 'https://google.com/',
			arrangeBy: 'อมธ. x พิพิธภัณฑ์สามัญชน',
			details:
				'Lorem ipsum dolor sit amet consectetur. Id varius vitae ut iaculis gravida malesuada eget. Augue libero vitae magna eros.',
		},
	];
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
			<span class="heading-responsive-01">วันที่ 1 ก.พ.</span>
			<span>({SAMPLE_EVENTS.length} กิจกรรม)</span>
		</h3>
		{#each SAMPLE_EVENTS as activity}
			<ActivityDetail {...activity} />
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
</div>
