<script>
	export let sticky = false;
	export let open = false;
</script>

<details class="accordion-base" {open}>
	<summary class="list-none {sticky ? 'sticky top-0 z-10' : ''}">
		<slot name="head" />
	</summary>
	<slot />
</details>

<style>
	summary::-webkit-details-marker {
		display: none;
	}

	:global(
			.accordion-base[open] > summary > .accordion-head > .accordion-chevron
		) {
		transform: rotate(180deg);
	}
</style>
