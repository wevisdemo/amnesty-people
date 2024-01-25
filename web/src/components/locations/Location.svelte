<script lang="ts">
	export let name: string;
	export let workingHours: string;
	export let tel: string;
	export let transport: string;
	export let address: string;
	export let locationURL: string;
</script>

<div
	class="flex flex-col gap-[9px] pt-[9px] body-01-normal border-t border-t-base-300"
>
	<h3 class="body-02-semibold">{name}</h3>
	<div>
		<strong class="block body-01-semibold">วันและเวลาที่เปิด</strong>
		<p>{workingHours}</p>
	</div>
	<div>
		<strong class="block body-01-semibold">ติดต่อ</strong>
		<p>{tel}</p>
	</div>
	<div>
		<strong class="block body-01-semibold">คำบรรยายการเดินทาง</strong>
		<p>{transport}</p>
	</div>
	<div>
		<strong class="block body-01-semibold">ที่อยู่</strong>
		<p>{address}</p>
		<a
			class="block w-max mt-1 underline text-secondary-focus link-01"
			href={locationURL}
			target="_blank"
			rel="nofollow noopener noreferrer">ดูแผนที่</a
		>
	</div>
</div>
