<script>
	import Pictures from './icons/Pictures.svelte';
</script>

<div class="flex flex-col gap-4 w-full md:max-w-[650px] px-4 py-6 text-neutral">
	<h2 class="heading-responsive-01 text-balance leading-none text-center">
		อาสาล่ารายชื่อ
	</h2>
	<ol class="flex flex-col py-[10px] gap-4">
		<li class="flex flex-col gap-2">
			<h3 class="body-03-semibold flex gap-[.5ch]">
				<span>1.</span>
				<span>ลงทะเบียน</span>
			</h3>
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSeWRIT-xGSJaH0qErptSnBkhs-9A9MfKsxir_qsTjn4FUDLVg/viewform"
				target="_blank"
				rel="nofollow noopener noreferrer"
				class="btn btn-secondary w-full body-03-semibold text-base-100 normal-case"
			>
				<img
					src="/icons/form.svg"
					alt=""
					width="16"
					height="16"
					loading="eager"
					decoding="async"
				/>
				Google Form
			</a>
			<hr class="border-t-primary-focus mt-2" role="none" />
		</li>
		<li class="flex flex-col gap-2">
			<h3 class="body-03-semibold flex gap-[.5ch] text-balance">
				<span>2.</span>
				<span>ดาวน์โหลดแบบฟอร์ม และพิมพ์ลงกระดาษ A4</span>
			</h3>
			<p class="body-02-normal">
				การเข้าชื่อไม่ต้องถ่ายสำเนาบัตรประชาชน ลงเพียงแค่ชื่อ-นามสกุล
				เลขบัตรประชาชน และเซ็น
			</p>
			<img
				class="flex-none block mx-auto w-auto h-[300px] border border-base-300"
				src="/form.jpg"
				alt=""
				width="212.13675213675214"
				height="300"
			/>
			<a
				href="https://drive.google.com/file/d/1vjNdJ5wRebCaSrSWxarqXbJVdBq-ZmZU/view"
				target="_blank"
				rel="nofollow noopener noreferrer"
				class="btn btn-secondary w-full body-03-semibold text-base-100"
			>
				<img
					src="/icons/table-w.svg"
					alt=""
					width="16"
					height="16"
					loading="eager"
					decoding="async"
				/>
				ดาวน์โหลดแบบฟอร์ม
			</a>
			<a
				href="https://drive.google.com/drive/folders/1eit2XXkNU5RqqLYIpP2nPs2_wv-kqIcQ"
				target="_blank"
				rel="nofollow noopener noreferrer"
				class="btn btn-secondary btn-outline w-full body-03-semibold"
			>
				<Pictures />
				ดาวน์โหลดโปสเตอร์และโลโก้
			</a>
			<hr class="border-t-primary-focus mt-2" role="none" />
		</li>
		<li class="flex flex-col gap-2">
			<h3 class="body-03-semibold flex gap-[.5ch] text-balance">
				<span>3.</span>
				<span
					>ส่งเอกสารรวบรวมรายชื่อมายังสำนักงาน iLaw <span class="text-[#FF0202]"
						>ภายในวันที่ xxxx</span
					></span
				>
			</h3>
			<ol class="flex flex-col gap-2">
				<li>
					<span class="body-02-normal mb-[5px] block"
						>3.1. นำส่งด้วยตัวเองที่ iLaw</span
					>
					<a
						href="https://maps.app.goo.gl/Fuvq6voTmLD4LGLb7"
						target="_blank"
						rel="nofollow noopener noreferrer"
						class="btn btn-secondary btn-outline w-full body-03-semibold"
					>
						<Pictures />
						ดูแผนที่
					</a>
				</li>
				<li>
					<span class="body-02-normal mb-[5px] block"
						>3.2. ส่งไปรษณีย์<br />(ต้องใช้บริการไปรษณีย์ไทยเท่านั้น)</span
					>
					<address
						class="p-2 body-02-semibold text-center text-balance not-italic bg-base-200"
					>
						ออฟฟิศ iLaw<br />1111/3 บ้านกลางเมืองรัชดา-ลาดพร้าว<br />ถ.ลาดพร้าว
						แขวงจันทรเกษม เขตจตุจักร<br />กทม. 10900
					</address>
				</li>
			</ol>
			<hr class="border-t-primary-focus mt-2" role="none" />
		</li>
		<li class="flex flex-col gap-2">
			<h3 class="body-03-semibold flex gap-[.5ch] text-balance">
				<span>4.</span>
				<span>หากมีคำถามหรือสงสัย ติดต่อสอบถามผ่านไลน์</span>
			</h3>
			<a
				href="https://line.me/ti/g2/eufXPbLUpzyEUT9tkPKRrsVCne_4lxfW9cRaWg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
				target="_blank"
				rel="nofollow noopener noreferrer"
				class="btn w-full body-03-semibold text-base-100 bg-[#2BB25C] normal-case hover:bg-[#2BB25C] focus:bg-[#2BB25C] active:bg-[#2BB25C]"
			>
				<img
					src="/icons/line.svg"
					alt=""
					width="16"
					height="16"
					loading="eager"
					decoding="async"
				/>
				iLaw Club
			</a>
			<p class="body-02-normal">ถามได้หมด มีแอดมินคอยช่วยเหลือ</p>
		</li>
	</ol>
</div>
