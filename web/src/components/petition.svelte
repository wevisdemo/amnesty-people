<script lang="ts">
	import SignatureForm from './signature-form.svelte';
	let tab = 'online';
</script>

<div class="flex flex-col gap-4 w-full md:max-w-[650px] px-4 py-6 text-neutral">
	<div class="text-center m-auto body-03-normal">
		<h2 class="heading-responsive-02">ร่วมลงชื่อ</h2>
		<p>
			วิธีการลงชื่อเสนอร่าง พ.ร.บ.นิรโทษกรรมประชาชน <span class="font-semibold"
				>ทำเพียงวิธีใดวิธีหนึ่ง</span
			>
		</p>
	</div>
	<div class="flex w-full justify-center font-sans">
		<button
			class="flex w-full justify-center bg-base-100 rounded-l-lg py-[8px] heading-03 {tab !==
				'online' && 'bg-opacity-50'}"
			on:click={() => {
				tab = 'online';
			}}
		>
			แบบออนไลน์
		</button>
		<button
			class="flex w-full justify-center bg-base-100 rounded-r-lg py-[8px] heading-03 {tab ===
				'online' && 'bg-opacity-50'}"
			on:click={() => {
				tab = 'paper';
			}}
		>
			แบบกระดาษ
		</button>
	</div>
	{#if tab === 'online'}
		<div class="bg-base-100 p-[10px] rounded-[4px]">
			<SignatureForm />
		</div>
	{:else}
		<div class="flex flex-col w-full space-y-[12px] body-02-normal">
			<div class="flex flex-col w-full bg-base-100 p-[16px]">
				<p class="body-03-semibold">
					วิธีที่ 1 : เดินทางไปลงชื่อที่จุดตั้งโต๊ะ
				</p>
				<a
					href="/locations"
					class="btn btn-secondary w-full body-02-semibold text-base-100 mt-[12px]"
				>
					<img
						src="/icons/pin-w.svg"
						alt="pin-icon"
						width="16"
						height="16"
						loading="eager"
						decoding="async"
					/>
					ดูสถานที่ลงชื่อ
				</a>
			</div>
			<div class="flex flex-col w-full bg-base-100 p-[16px]">
				<p class="body-03-semibold">วิธีที่ 2 : ดาวน์โหลดแบบฟอร์มมากรอก</p>
				<hr class="border-t-neutral mt-[12px]" role="none" />
				<p class="flex space-x-[2px] mt-[20px] ml-[2px] body-02-semibold">
					<span>1.</span><span>ดาวน์โหลดแบบฟอร์มและพิมพ์ลงกระดาษ A4</span>
				</p>
				<a
					href="https://drive.google.com/file/d/1vjNdJ5wRebCaSrSWxarqXbJVdBq-ZmZU/view"
					class="btn btn-secondary w-full body-02-semibold text-base-100 mt-[8px]"
				>
					<img
						src="/icons/table-w.svg"
						alt="table-icon"
						width="16"
						height="16"
						loading="eager"
						decoding="async"
					/>
					ดาวน์โหลดแบบฟอร์ม
				</a>
				<hr class="border-t-neutral mt-[20px]" role="none" />
				<p class="flex space-x-[2px] mt-[20px] ml-[2px] body-02-semibold">
					<span>2.</span><span>ลงลายมือชื่อบนแบบฟอร์ม</span>
				</p>
				<p class="mt-[8px]">ชวนคนใกล้ๆ ตัวมาร่วมลงชื่อให้เต็มแผ่น เลยก็ได้</p>
				<img src="/form.jpg" alt="form" class="mt-[8px] max-w-[295px] m-auto" />
				<hr class="border-t-neutral mt-[20px]" role="none" />
				<p class="flex space-x-[2px] mt-[20px] ml-[2px] body-02-semibold">
					<span>3.</span><span
						>ส่งเอกสารรวบรวมรายชื่อมายังสำนักงาน iLaw <span
							class="text-[#FF0202]">ภายในวันที่ 14 ก.พ. 2567</span
						></span
					>
				</p>
				<p class="mt-[8px]">3.1. นำส่งด้วยตัวเองที่ iLaw</p>
				<a
					href="https://www.google.com/maps/place/iLaw/@13.8043583,100.5747799,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29f78881156fb:0x7356cb8f9a29f043!8m2!3d13.8043531!4d100.5773548!16s%2Fg%2F11tgf6ww0c?entry=tts&shorturl=1"
					class="btn btn-outline btn-secondary mt-[5px]"
				>
					<img
						src="/icons/pictures.svg"
						alt="pictures-icon"
						width="16"
						height="16"
						loading="eager"
						decoding="async"
					/>ดูแผนที่</a
				>
				<p class="mt-[5px]">3.2. ส่งไปรษณีย์</p>
				<div class="bg-base-200 mt-[5px] body-02-semibold p-[8px] text-center">
					ออฟฟิศ iLaw 099-678-6031<br />1111/3 บ้านกลางเมืองรัชดา-ลาดพร้าว<br
					/>ถ.ลาดพร้าว แขวงจันทรเกษม เขตจตุจักร<br />กทม. 10900
				</div>
			</div>
		</div>
	{/if}
</div>
