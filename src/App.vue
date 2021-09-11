<template>
	<div class="theme theme-light absolute inset-0 bg-canvas flex">
		<router-view />
	</div>
</template>

<style lang="scss">
@import './styles';
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
	data() {
		return {
			columnDefs: null,
			rowData: null,
		};
	},

	watch: {
		theme(newTheme) {
			localStorage.theme = newTheme;
		},
	},

	mounted() {
		window.addEventListener('keydown', (e) => {
			switch (e.key) {
				case 'F':
					window.top.postMessage('shift+f', '*');
					break;
				case 'E':
					window.top.postMessage('shift+e', '*');
					break;
			}
		});
	},
});
</script>
