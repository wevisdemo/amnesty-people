<script lang="ts">
	import Province, { type LocationProps } from './Province.svelte';

	const SAMPLE_LOCATIONS: LocationProps[] = [
		{
			name: 'ห้องหนังสือสมจริง(Somjing book)',
			workingHours: 'ตั้งโต๊ะหลายวัน แต่อาจไม่ต่อเนื่องกัน 09.00-02.00 น.',
			tel: '0809424076',
			transport: 'อยู่หน้าหมู่บ้านกลางซอยวิลเลจ 2 อยู่หลังตลาดเอซี ถนนริมคลอง',
			address: '60/9 หมู่ 4 ตำบลลาดสวาย อำเภอลำลูกกา จังหวัดปทุมธานี',
			locationURL: 'https://google.com/',
		},
		{
			name: '(ชื่อสถานที่)สำนักงานใหญ่ก้าวไกล0',
			workingHours: 'วัน จ. - ศ. เวลา 08:00-18:00 น.',
			tel: '081-112-1212',
			transport: 'อยู่หน้าหมู่บ้านกลางซอยวิลเลจ 2 อยู่หลังตลาดเอซี ถนนริมคลอง',
			address:
				'บ้านเลขที่ 1111/3 บ้านกลางเมืองรัชดา-ลาดพร้าว (หลังตรงกลางติดถนนใหญ่) ถ.ลาดพร้าวว แขวงจันทร์เกษม เขตจตุจักร กทม. 10900',
			locationURL: 'https://google.com/',
		},
	];

	const SAMPLE_PROVINCES: [string, LocationProps[]][] = [
		['กรุงเทพมหานคร', SAMPLE_LOCATIONS],
		['ฉะเชิงเทรา', SAMPLE_LOCATIONS],
	];

	$: provinceCount = SAMPLE_PROVINCES.length;
	$: locationCount = SAMPLE_PROVINCES.map(
		([, locations]) => locations.length,
	).reduce((a, b) => a + b, 0);

	let searchQuery = '';

	$: formattedSearchQuery = searchQuery.trim();
	$: searchedLocations = formattedSearchQuery
		? SAMPLE_PROVINCES /* TODO: Filtering Logic */
		: SAMPLE_PROVINCES;
</script>

<div class="flex flex-col gap-[30px] px-4 py-[20px] w-full">
	<h1 class="heading-responsive-01 text-balance leading-none text-center">
		มีจุดตั้งโต๊ะทั้งหมด {locationCount} จุด ใน {provinceCount} จังหวัด
	</h1>
	<div class="flex items-center gap-1 p-2 bg-base-200 rounded-lg">
		<img
			src="/icons/magnify.svg"
			alt=""
			width="16"
			height="16"
			loading="lazy"
			decoding="async"
		/>
		<input
			class="w-full bg-transparent outline-none focus:ring-2 focus:ring-primary-focus rounded"
			type="text"
			placeholder="ค้นด้วยชื่อจังหวัด"
			bind:value={searchQuery}
		/>
	</div>
	<div class="flex flex-col gap-[19px]">
		{#each searchedLocations as [province, locations] (province)}
			<Province {province} {locations} />
		{:else}
			<p class="body-02-normal text-center text-balance">
				ไม่มีจุดตั้งโต๊ะในจังหวัดที่คุณค้นหา
			</p>
		{/each}
	</div>
</div>
