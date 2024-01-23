<script>
	import SocialGroup from './social-group.svelte';
	// import { countSubmittedDocuments } from '../utils/firebase';
	// import { onMount } from 'svelte';

	const documentCount = 12280;

	// onMount(async () => {
	// 	try {
	// 		const count = await countSubmittedDocuments();
	// 		documentCount = count;
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// });
</script>

<div
	class="flex flex-col items-center justify-center gap-[6px] w-full md:max-w-[650px] h-full p-[20px] text-center text-neutral"
>
	<img
		class="flex-1 min-h-0 w-auto h-full aspect-square"
		src="/logo.png"
		alt=""
		width="140"
		height="140"
		loading="lazy"
		decoding="async"
	/>
	<h1 class="heading-responsive-01 text-balance leading-none">
		ลงชื่อเสนอ ร่าง พ.ร.บ. นิรโทษกรรมประชาชน
	</h1>
	<p class="rounded-full bg-secondary text-neutral-50 body-02-semibold w-full">
		ลงชื่อแล้ว <span class="heading-responsive-02"
			>{documentCount.toLocaleString('th-TH')}+</span
		>
	</p>
	<p class="body-01 opacity-50">
		อัปเดตข้อมูล {new Date().toLocaleDateString('th-TH', {
			day: 'numeric',
			month: 'short',
			year: '2-digit',
		})}
	</p>
	<p class="body-02 text-balance">
		มาช่วยกันยุติการดำเนินคดีต่อประชาชนที่แสดงออกทางการเมือง
	</p>
	<div class="flex flex-col gap-[6px] w-[220px] mt-[4px]">
		<button type="button" class="btn btn-secondary w-full">
			<img
				src="/icons/pen.svg"
				alt=""
				width="16"
				height="16"
				loading="eager"
				decoding="async"
			/>
			ลงชื่อ
		</button>
		<button type="button" class="btn btn-primary w-full">
			<img
				src="/icons/pin.svg"
				alt=""
				width="16"
				height="16"
				loading="eager"
				decoding="async"
			/>
			ดูสถานที่ลงชื่อ
		</button>
		<button type="button" class="btn btn-primary w-full">
			<img
				src="/icons/table.svg"
				alt=""
				width="16"
				height="16"
				loading="eager"
				decoding="async"
			/>
			ตารางกิจกรรม
		</button>
	</div>
	<div class="flex gap-[6px] mt-[4px]">
		<a href="#event-reasons" class="link-01 underline">ทำไมต้องล่ารายชื่อ</a>
		<a href="#volunteer" class="link-01 underline">อาสาล่ารายชื่อ</a>
	</div>
	<div class="flex items-center gap-[9px] mt-[4px]">
		<span>แชร์</span>
		<SocialGroup />
	</div>
</div>
