<template>
	<div class="theme theme-light absolute inset-0 bg-canvas flex">
		<router-view />
	</div>
</template>

<style lang="scss">
@import '../node_modules/ag-grid-community/dist/styles/ag-grid.css';
@import '../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css';
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
});
</script>
