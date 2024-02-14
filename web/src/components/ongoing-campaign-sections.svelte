<script lang="ts">
	import { onMount } from 'svelte';
	import Activities from './activities.svelte';
	import Petition from './petition.svelte';
	import Volunteer from './volunteer.svelte';
	import { checkCampaignEnded } from '../utils/schedule';

	let isCompaignEnded: boolean | null = null;

	onMount(() => {
		isCompaignEnded = checkCampaignEnded();
	});
</script>

{#if !isCompaignEnded}
	<section id="activities" class="flex justify-center">
		<Activities />
	</section>

	<section id="petition" class="flex justify-center bg-primary-focus">
		<Petition />
	</section>

	<section id="volunteer" class="flex justify-center">
		<Volunteer />
	</section>
{/if}
