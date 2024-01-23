<script>
	import ActivityDetail from './activities/ActivityDetail.svelte';
	import Pictures from './icons/Pictures.svelte';
</script>

<div class="flex flex-col gap-4 w-full md:max-w-[650px] px-4 py-6 text-neutral">
	<h2 class="heading-responsive-02 text-balance leading-none text-center">
		ตารางกิจกรรม
	</h2>
	<p class="text-center text-balance body-02-normal">
		ช่วยกันแสดงออก ร่วมกิจกรรม รณรงค์ ส่งเสียง ในเทศกาลแห่งความรักปีนี้ 1-14
		กุมภาพันธ์ 2567
	</p>
	<a class="btn btn-secondary" href="/activities">
		<img
			src="/icons/table-w.svg"
			alt=""
			width="16"
			height="16"
			loading="eager"
			decoding="async"
		/>
		ดูตารางกิจกรรมวันอื่นๆ
	</a>
	<article class="flex flex-col gap-[6px]">
		<h3 class="flex items-center gap-[5px] justify-center body-02-normal">
			<span class="heading-responsive-01">วันที่ 1 ก.พ.</span>
			<span>(xx กิจกรรม)</span>
		</h3>
		<ActivityDetail />
		<ActivityDetail />
	</article>
</div>
