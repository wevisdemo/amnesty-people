<script lang="ts">
	export let timeDescription: string;
	export let name: string;
	export let location: string;
	export let locationUrl: string;
	export let description = '';
	export let notablePersons = '';
	export let eventUrl = '';
	export let province = '';
	export let organizedBy = '';

	export let isPassed = false;
	export let highlightProvince = false;
</script>

<div
	class="relative flex flex-col gap-1 body-01-normal pt-[10px] border-t border-t-base-300"
>
	<h3>
		{#if eventUrl}
			<a
				class="link-02 underline hover:text-secondary-focus"
				href={eventUrl}
				target="_blank"
				rel="nofollow noopener noreferrer">{name}</a
			>
		{:else}
			<span class="body-02-normal">{name}</span>
		{/if}
	</h3>
	<div class="flex">
		{#if province}
			<div class="flex-1">
				<strong class="block body-01-semibold">จังหวัด</strong>
				<p class="w-fit" class:bg-primary-focus={highlightProvince}>
					{province}
				</p>
			</div>
		{/if}
		<div class="flex-1">
			<strong class="block body-01-semibold">เวลา</strong>
			<p>{timeDescription}</p>
		</div>
	</div>
	<div>
		<strong class="block body-01-semibold">สถานที่</strong>
		<p>{location}</p>
		<a
			class="block w-max underline text-secondary-focus link-01"
			href={locationUrl}
			target="_blank"
			rel="nofollow noopener noreferrer">ดูแผนที่</a
		>
	</div>
	{#if organizedBy || description || notablePersons}
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
				{#if organizedBy}
					<div>
						<strong class="block body-01-semibold">จัดโดย</strong>
						<p>{organizedBy}</p>
					</div>
				{/if}
				{#if description}
					<div>
						<strong class="block body-01-semibold">รายละเอียด</strong>
						<p>{description}</p>
					</div>
				{/if}
				{#if notablePersons}
					<div>
						<strong class="block body-01-semibold">พบกับ</strong>
						<p>{notablePersons}</p>
					</div>
				{/if}
			</div>
		</details>
	{/if}
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
