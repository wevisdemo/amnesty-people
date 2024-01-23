<script lang="ts">
	export let name: string;
	export let link: string;
	export let province: string;
	export let time: string;
	export let location: string;
	export let mapURL: string;
	export let arrangeBy: string;
	export let details: string;

	export let isPassed = false;
	export let highlightProvince = false;
</script>

<div
	class="relative flex flex-col gap-1 body-01-normal pt-[10px] border-t border-t-base-300"
>
	<h3>
		<a class="link-02 underline hover:text-secondary-focus" href={link}
			>{name}</a
		>
	</h3>
	<div class="flex">
		<div class="flex-1">
			<strong class="block body-01-semibold">จังหวัด</strong>
			<p class="w-fit" class:bg-primary-focus={highlightProvince}>{province}</p>
		</div>
		<div class="flex-1">
			<strong class="block body-01-semibold">เวลา</strong>
			<p>{time}</p>
		</div>
	</div>
	<div>
		<strong class="block body-01-semibold">สถานที่</strong>
		<p>{location}</p>
		<a class="block w-max underline text-secondary-focus link-01" href={mapURL}
			>ดูแผนที่</a
		>
	</div>
	<details class="bg-base-200 group">
		<summary class="p-1 list-none opacity-60 cursor-pointer">
			<span
				class="flex items-center justify-between group-open:border-b group-open:border-b-base-300"
			>
				<span>อ่านรายละเอียด</span>
				<img
					src="/icons/chevron-down.svg"
					alt=""
					width="16"
					height="16"
					loading="lazy"
					decoding="async"
				/>
			</span>
		</summary>
		<div class="flex flex-col gap-1 p-1 pt-0">
			<div>
				<strong class="block body-01-semibold">จัดโดย</strong>
				<p>{arrangeBy}</p>
			</div>
			<div>
				<strong class="block body-01-semibold">รายละเอียด</strong>
				<p>{details}</p>
			</div>
		</div>
	</details>
	{#if isPassed}
		<div
			class="absolute inset-0 bg-base-100/70 flex items-center justify-center"
		>
			<span class="heading-responsive-01 -rotate-[20deg]">จบกิจกรรม</span>
		</div>
	{/if}
</div>

<style>
	summary::-webkit-details-marker {
		display: none;
	}
</style>
