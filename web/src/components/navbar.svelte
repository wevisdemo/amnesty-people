<script lang="ts">
	import SocialGroup from './social-group.svelte';
</script>

<div
	class="max-w-[650px] w-full flex justify-between items-center h-[60px] md:h-[80px] p-[18px] text-neutral"
>
	<div class="flex items-center">
		<span class="hidden md:block heading-03 mr-[12px]">แชร์ให้เพื่อน</span>
		<SocialGroup />
	</div>
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
</div>
