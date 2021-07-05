<template>
	<div class="theme theme-light absolute inset-0 bg-canvas flex">
		<router-view />
	</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
// import { applyPolyfills, defineCustomElements } from '@dome9/components/loader';

// applyPolyfills().then(() => {
//   defineCustomElements();
// });

export default defineComponent({
	name: 'App',
	// productionTip: false,
	// ignoredElements: [/test-\w*/],
	components: {},
	data() {
		return {
			theme: '',
		};
	},
	mounted() {
		if (localStorage.theme) {
			this.theme = localStorage.theme;
		}
	},
	watch: {
		theme(newTheme) {
			localStorage.theme = newTheme;
		},
	},
});
</script>
