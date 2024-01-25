<script lang="ts">
	import { onMount } from 'svelte';
	import ActivityDay from '../activities/ActivityDay.svelte';

	interface EventData {
		date: string;
		timeDescription: string;
		name: string;
		location: string;
		locationUrl: string;
		notablePersons: string;
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
	const CURRENT_DAY = Date.now() - ONE_DAY - ONE_MILLISEC;
	// NOTE - Don't debug with Date(YYYY,MM,DD) cus timezone

	onMount(async () => {
		const resp = await fetch('/data/le-trucks.json');
		const json = (await resp.json()) as EventData[];

		days = Object.entries(groupBy(json, ({ date }) => date));
	});

	let days: [string, EventData[]][] = [];
</script>

<div class="flex flex-col gap-[10px] px-4 py-[10px] w-full">
	<h1 class="heading-responsive-01 text-balance leading-none text-center">
		กำหนดการเส้นทางรถแห่ ตลอด 14 วัน
	</h1>
	<div class="flex flex-col gap-[10px]">
		{#each days as [day, activities] (day)}
			{@const dayAsDate = +new Date(day)}
			<ActivityDay {day} {activities} isPassed={dayAsDate < CURRENT_DAY} />
		{/each}
	</div>
</div>
