<script lang="ts">
	import { onMount } from 'svelte';
	import SocialGroup from './social-group.svelte';
	import { checkCampaignEnded } from '../utils/schedule';

	let isCompaignEnded: boolean | null = null;

	onMount(() => {
		isCompaignEnded = checkCampaignEnded();
	});
</script>

<div
	class="max-w-[650px] w-full flex items-center h-[60px] md:h-[80px] p-[18px] text-neutral {isCompaignEnded
		? 'justify-center'
		: 'justify-between'}"
>
	<div class="flex items-center">
		<span class="hidden md:block heading-03 mr-[12px]">แชร์ให้เพื่อน</span>
		<SocialGroup />
	</div>
	{#if !isCompaignEnded}
		<a href="#petition">
			<button class="btn btn-secondary heading-03 font-bold"
				>ลงชื่อเลย<img
					src="/icons/pen.svg"
					alt=""
					width="16"
					height="16"
					loading="lazy"
					decoding="async"
				/></button
			>
		</a>
	{/if}
</div>
