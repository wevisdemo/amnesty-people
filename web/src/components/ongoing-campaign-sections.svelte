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
{:else}
	<section
		class="flex flex-col justify-center items-center py-6 px-3 bg-white space-y-4"
	>
		<h2 class="heading-responsive-01 text-balance leading-none text-center">
			ที่อยู่สำหรับจัดส่งเอกสาร
		</h2>
		<address
			class="w-full max-w-md p-2 body-02-semibold text-center text-balance not-italic rounded border border-base-300"
		>
			ออฟฟิศ iLaw 099-678-6031<br />1111/3 บ้านกลางเมืองรัชดา-ลาดพร้าว<br
			/>ถ.ลาดพร้าว แขวงจันทรเกษม เขตจตุจักร<br />กทม. 10900
		</address>
	</section>
{/if}
