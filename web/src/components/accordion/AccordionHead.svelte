<script lang="ts">
	let staticHead = false;
	export { staticHead as static };

	export let header: string;
	export let count: number;
	export let unit: string;
</script>

<span
	class="accordion-head flex items-center gap-[5px] pb-1 bg-base-100 border-t-2 border-t-neutral body-02-normal transition-colors {staticHead
		? ''
		: 'cursor-pointer hover:text-secondary-focus hover:border-t-secondary-focus'}"
>
	<span class="heading-responsive-01">{header}</span>
	<span class="leading-none">({count} {unit})</span>
	{#if !staticHead}
		<svg
			class="accordion-chevron ml-auto transition-transform"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 17 17"
			width="16"
			height="16"
			><path
				fill="currentColor"
				d="M8.02 11.722l-5-5 .7-.7 4.3 4.3 4.3-4.3.7.7-5 5z"
			/></svg
		>
	{/if}
</span>
