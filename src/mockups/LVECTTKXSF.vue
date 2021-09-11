<template>
	<div class="absolute inset-0">
		<ag-grid-vue
			class="ag-theme-cp inset-0 absolute"
			:columnDefs="columnDefs"
			:rowData="rowData"
			:rowHeight="rowHeight"
		>
		</ag-grid-vue>
	</div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue3';
import consts from '../consts'

export default {
	components: {
		'ag-grid-vue': AgGridVue,
	},
	beforeMount() {
		this.rowHeight = consts.ROW_HEIGHT;
			this.columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

		this.rowData = [
			{ make: 'Toyota', model: 'Celica', price: 35000 },
			{ make: 'Ford', model: 'Mondeo', price: 32000 },
			{ make: 'Porsche', model: 'Boxter', price: 72000 },
		];
	},
	mount() {
		console.log(data);
	},
};
</script>
