<script lang="ts" context="module">
	import type { ComponentProps } from 'svelte';

	export type LocationProps = ComponentProps<Location>;
</script>

<script lang="ts">
	import AccordionBase from '../accordion/AccordionBase.svelte';
	import AccordionHead from '../accordion/AccordionHead.svelte';
	import Location from './Location.svelte';

	export let province: string;
	export let locations: LocationProps[];
</script>

<AccordionBase sticky>
	<AccordionHead
		slot="head"
		header={province}
		count={locations.length}
		unit="จุด"
	/>
	<div class="flex flex-col gap-[26px] pt-[22px]">
		{#each locations as location (location.name)}
			<Location {...location} />
		{/each}
	</div>
</AccordionBase>
