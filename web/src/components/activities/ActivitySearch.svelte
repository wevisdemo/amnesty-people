<script lang="ts">
	import { onMount } from 'svelte';
	import ActivityDay from './ActivityDay.svelte';
	import type { ActivityDetailProps } from './ActivityDay.svelte';
	import { PUBLIC_DATA_URL } from '../../utils/data';

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

	const groupBy = <T, K extends keyof any>(
		arr: T[],
		groupFn: (element: T) => K,
	): Record<K, T[]> =>
		arr.reduce(
			(r, v, _i, _a, k = groupFn(v)) => ((r[k] || (r[k] = [])).push(v), r),
			{} as Record<K, T[]>,
		);

	const ONE_DAY = 86400000;
	const ONE_MILLISEC = 1;
	const CURRENT_DAY = new Date().getDate() - ONE_DAY - ONE_MILLISEC;

	onMount(async () => {
		const resp = await fetch(`${PUBLIC_DATA_URL}/events.json`);
		json = (await resp.json()) as EventData[];
	});

	let json: EventData[] = [];
	$: activityCount = json.length;

	let searchQuery = '';
	$: formattedSearchQuery = searchQuery.trim();
	$: filteredJson = formattedSearchQuery
		? json.filter((e) => e.province.includes(formattedSearchQuery))
		: json;

	let days: [string, ActivityDetailProps[]][] = [];
	$: days = Object.entries(groupBy(filteredJson, ({ date }) => date));
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
		{#each days as [day, activities] (day)}
			{@const dayAsDate = +new Date(day)}
			<ActivityDay
				{day}
				{activities}
				isPassed={dayAsDate < CURRENT_DAY}
				provinceQuery={formattedSearchQuery}
			/>
		{:else}
			<p class="body-02-normal text-center text-balance mt-[20px]">
				ไม่มีกิจกรรมในจังหวัดที่คุณค้นหา
			</p>
		{/each}
	</div>
</div>
