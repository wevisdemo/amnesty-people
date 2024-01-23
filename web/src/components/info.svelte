<div
	class="flex flex-col gap-3 w-full md:max-w-[650px] px-4 pt-6 pb-20 text-neutral"
>
	<header class="text-center text-balance">
		<span class="body-02-semibold block mb-3">ผู้จัดแคมเปญ</span>
		<h2 class="heading-responsive-01 leading-none">
			เครือข่ายนิรโทษกรรมประชาชน
		</h2>
	</header>
	<div class="flex justify-center gap-[6px] flex-wrap">
		{#each Array(24) as _, idx}
			<img
				src="/cooperations/{idx + 1}.svg"
				alt=""
				width="60"
				height="60"
				loading="lazy"
				decoding="async"
			/>
		{/each}
	</div>
</div>
