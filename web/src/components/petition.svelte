<script lang="ts">
	import SignatureForm from './signature-form.svelte';
</script>

<div class="flex flex-col gap-4 w-full md:max-w-[650px] px-4 py-6 text-neutral">
	<div class="md:max-w-[320px] text-center m-auto">
		<h2 class="heading-responsive-02">ร่วมลงชื่อ</h2>
		<p>
			วิธีการลงชื่อเสนอร่าง พ.ร.บ.นิรโทษกรรมประชาชน
			<span class="font-semibold">ทำเพียงวิธีใดวิธีหนึ่ง</span>
		</p>
	</div>
	<div class="bg-base-100 p-[10px] rounded-[4px]">
		<SignatureForm />
	</div>
</div>
