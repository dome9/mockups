<template>
	<div class=" p-10 theme theme-light absolute inset-0 bg-canvas flex">
		<router-view />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
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
