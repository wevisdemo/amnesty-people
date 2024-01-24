<script lang="ts" context="module">
	import type { ComponentProps } from 'svelte';

	export type ActivityDetailProps = Omit<
		ComponentProps<ActivityDetail>,
		'isPassed' | 'highlightProvince'
	>;
</script>

<script lang="ts">
	import AccordionBase from '../accordion/AccordionBase.svelte';
	import AccordionHead from '../accordion/AccordionHead.svelte';
	import ActivityDetail from './ActivityDetail.svelte';

	export let day: number;
	export let activities: ActivityDetailProps[];

	export let isPassed = false;
	export let highlightProvince = '';
</script>

<AccordionBase sticky open={!isPassed}>
	<AccordionHead
		slot="head"
		header="วันที่ {day}"
		count={activities.length}
		unit="กิจกรรม"
		class="[&>.heading-responsive-01]:relative [&>.heading-responsive-01]:top-1 {isPassed
			? 'opacity-30'
			: ''}"
	/>
	<div class="flex flex-col gap-[10px] pt-[10px]">
		{#each activities as activity}
			<ActivityDetail
				{...activity}
				{isPassed}
				highlightProvince={activity.province === highlightProvince}
			/>
		{/each}
	</div>
</AccordionBase>
