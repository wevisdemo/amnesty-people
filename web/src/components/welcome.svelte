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
	class="flex flex-col items-center justify-center gap-[6px] md:flex-row md:gap-10 w-full max-w-[800px] h-full md:h-auto p-[20px] text-center text-neutral"
>
	<div class="flex flex-col min-h-0">
		<img
			class="w-auto h-auto min-h-0 max-h-full aspect-square object-contain block mb-[6px] md:mb-[10px]"
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
	</div>
	<div class="flex flex-col items-center gap-[6px] md:gap-[10px]">
		{#if process.env.PUBLIC_BUILD_TARGET !== 'production'}
			<p
				class="flex items-center justify-center gap-[6px] rounded-full bg-secondary text-neutral-50 body-02-semibold w-full whitespace-nowrap md:px-[35px]"
			>
				<span>ลงชื่อแล้ว</span>
				<span class="heading-responsive-02"
					>{documentCount.toLocaleString('th-TH')}+</span
				>
			</p>
			<p class="body-01-normal opacity-50">
				อัปเดตข้อมูล {new Date().toLocaleDateString('th-TH', {
					day: 'numeric',
					month: 'short',
					year: '2-digit',
				})}
			</p>
		{/if}
		<p class="body-02-normal text-balance">
			มาช่วยกันยุติการดำเนินคดีต่อประชาชนที่แสดงออกทางการเมือง
		</p>
		<div class="flex flex-col gap-[6px] w-[220px] mt-[4px]">
			<a href="#petition" class="btn btn-secondary w-full body-02-semibold">
				<img
					src="/icons/pen.svg"
					alt=""
					width="16"
					height="16"
					loading="eager"
					decoding="async"
				/>
				ลงชื่อ
			</a>
			<a href="/locations" class="btn btn-primary w-full body-02-semibold">
				<img
					src="/icons/pin.svg"
					alt=""
					width="16"
					height="16"
					loading="eager"
					decoding="async"
				/>
				ดูสถานที่ลงชื่อ
			</a>
			<a href="#activities" class="btn btn-primary w-full body-02-semibold">
				<img
					src="/icons/table.svg"
					alt=""
					width="16"
					height="16"
					loading="eager"
					decoding="async"
				/>
				ตารางกิจกรรม
			</a>
		</div>
		<div class="flex gap-[6px] mt-[4px]">
			<a href="#event-reasons" class="link-01 underline">ทำไมต้องล่ารายชื่อ</a>
			<a href="#volunteer" class="link-01 underline">อาสาล่ารายชื่อ</a>
		</div>
		<div class="flex items-center gap-[9px] mt-[4px]">
			<span class="body-01-normal">แชร์</span>
			<SocialGroup />
		</div>
	</div>
</div>
