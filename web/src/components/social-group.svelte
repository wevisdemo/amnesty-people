<script lang="ts">
	import { WEB_DOMAIN } from '@amnesty-people/constants';
	const PROD_URL = encodeURI(`https://${WEB_DOMAIN}`);
</script>

<div class="flex items-center gap-[6px]">
	<a
		href={`http://www.facebook.com/sharer/sharer.php?u=${PROD_URL}`}
		target="_blank"
	>
		<img
			src="/share-facebook.svg"
			alt="share to facebook"
			width="32"
			height="32"
			loading="lazy"
			decoding="async"
		/>
	</a>
	<a href={`https://twitter.com/intent/tweet?url=${PROD_URL}`} target="_blank">
		<img
			src="/share-x.svg"
			alt="share to x"
			width="32"
			height="32"
			loading="lazy"
			decoding="async"
		/>
	</a>
	<a
		href={`https://social-plugins.line.me/lineit/share?url=${PROD_URL}`}
		target="_blank"
	>
		<img
			src="/share-line.svg"
			alt="share to line"
			width="32"
			height="32"
			loading="lazy"
			decoding="async"
		/>
	</a>
</div>
