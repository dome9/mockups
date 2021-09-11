<template>
	<div>
		<button class="bg-info p-2 m-2 rounded theme theme-dark hover:bg-info-light active:bg-info-dark font-semibold" @click="count++"> You clicked me {{ count }} times. </button>
	</div>
</template>

<script>
export default {
	selector:'my-counter',
	data() {
		return {
			count: 0,
		};
	},
};
</script>
