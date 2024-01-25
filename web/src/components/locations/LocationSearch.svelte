<script lang="ts">
	import { onMount } from 'svelte';
	import Province, { type LocationProps } from './Province.svelte';

	type LocationWithProvince = LocationProps & {
		province: string;
	};

	const groupBy = <T, K extends keyof any>(
		arr: T[],
		groupFn: (element: T) => K,
	): Record<K, T[]> =>
		arr.reduce(
			(r, v, _i, _a, k = groupFn(v)) => ((r[k] || (r[k] = [])).push(v), r),
			{} as Record<K, T[]>,
		);

	onMount(async () => {
		const resp = await fetch('/data/locations.json');
		const json = (await resp.json()) as LocationWithProvince[];

		locationByProvinces = Object.entries(
			groupBy(json, ({ province }) => province),
		);
	});

	let locationByProvinces: [string, LocationProps[]][] = [];

	$: provinceCount = locationByProvinces.length;
	$: locationCount = locationByProvinces
		.map(([, locations]) => locations.length)
		.reduce((a, b) => a + b, 0);

	let searchQuery = '';

	$: formattedSearchQuery = searchQuery.trim();
	$: searchedLocations = formattedSearchQuery
		? locationByProvinces.filter(([province]) =>
				province.includes(formattedSearchQuery),
		  )
		: locationByProvinces;
</script>

<div class="flex flex-col gap-[30px] px-4 py-[20px] w-full">
	<h1 class="heading-responsive-01 text-balance leading-none text-center">
		มีจุดตั้งโต๊ะทั้งหมด {locationCount} จุด ใน {provinceCount} จังหวัด
	</h1>
	<div class="flex items-center gap-1 p-2 bg-base-200 rounded-lg">
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
			placeholder="ค้นด้วยชื่อจังหวัด"
			bind:value={searchQuery}
		/>
	</div>
	<div class="flex flex-col gap-[19px]">
		{#each searchedLocations as [province, locations] (province)}
			<Province {province} {locations} />
		{:else}
			<p class="body-02-normal text-center text-balance">
				ไม่มีจุดตั้งโต๊ะในจังหวัดที่คุณค้นหา
			</p>
		{/each}
	</div>
</div>
