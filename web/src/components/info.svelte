<script lang="ts">
	const LOGOS = [
		{ name: 'กลุ่ม 24 มิถุนา ประชาธิไตย', filename: 'june24th' },
		{ name: 'CALL', filename: 'call' },
		{ name: 'DRG', filename: 'drg' },
		{ name: 'ธรรมศาสตร์และการชุมนุม', filename: 'thammasat' },
		{ name: 'Wevis', filename: 'wevis' },
		{ name: 'CrCF', filename: 'crcf' },
		{ name: 'Worker’s Union', filename: 'workersunion' },
		{ name: 'iLaw', filename: 'ilaw' },
		{ name: 'HRLA', filename: 'hrla' },
		{ name: 'NITI hub', filename: 'nitihub' },
		{ name: 'โมกหลวงริมน้ำ', filename: 'mokelung' },
		{ name: 'เครือข่ายนักวิชาการเพื่อสิทธิพลเมือง', filename: 'tanc' },
		{ name: 'ทะลุฟ้า', filename: 'thalufah' },
		{ name: 'ครช.', filename: 'cpd' },
		{ name: 'ACTLAB', filename: 'actlab' },
		{ name: 'Rocket Media Lab', filename: 'rml' },
		{ name: 'Bloom', filename: 'bloom' },
		{ name: 'TLHR', filename: 'tlhr' },
		{ name: 'FreeArts', filename: 'freearts' },
		{ name: 'เครือข่ายแรงงานเพื่อสิทธิประชาชน', filename: 'lnpr' },
		{ name: 'Amnesty', filename: 'amnesty' },
		{ name: 'เฟมินิสต์ปลดแอก', filename: 'feminist' },
		{ name: 'พิพิธภัณฑ์สามัญชน', filename: 'mph' },
	];
</script>

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
		{#each LOGOS as { name, filename } (name)}
			<img
				src="/cooperations/{filename}.svg"
				alt={name}
				width="60"
				height="60"
				loading="lazy"
				decoding="async"
			/>
		{/each}
	</div>
</div>
