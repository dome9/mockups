<template>
	<div class="absolute inset-0 theme theme-light flex flex-col">
		<div class="flex-0 border-b px-4 py-2 theme theme-dark-primary font-light uppercase">Title</div>
		<div class="flex flex-1 flex-row">
			<div class="flex-0 flex flex-col border-r theme theme-dark-primary p-6 text-xs">
				<div class="flex items-center ">
					<div class="flex items-center justify-center h-6 w-6 bg-[#ffffff] rounded-full"
						><svg
							class="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							version="1.1"
							x="0px"
							y="0px"
							viewBox="0 0 76.887 55.552"
							style="enable-background: new 0 0 76.887 55.552"
							xml:space="preserve"
						>
							<polygon
								style="fill: var(--color-primary)"
								points="34.373,49.541 76.887,5.889 70.739,0 28.426,43.458 6.078,20.632 0,26.585 22.488,49.557    22.488,49.557 28.517,55.552 28.426,55.467 28.517,55.552 34.373,49.541  "
							/></svg
					></div>
					<div class="ml-2 uppercase">CONFIGURATIONS</div>
				</div>
				<div class="h-10 w-0 ml-[11px] my-1 border-r-bold border-strongest"></div>
				<div class="flex items-center">
					<div class="flex items-center justify-center h-6 w-6 bg-[#ffffff] rounded-full"
						><svg
							class="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							version="1.1"
							x="0px"
							y="0px"
							viewBox="0 0 76.887 55.552"
							style="enable-background: new 0 0 76.887 55.552"
							xml:space="preserve"
						>
							<polygon
								style="fill: var(--color-primary)"
								points="34.373,49.541 76.887,5.889 70.739,0 28.426,43.458 6.078,20.632 0,26.585 22.488,49.557    22.488,49.557 28.517,55.552 28.426,55.467 28.517,55.552 34.373,49.541  "
							/></svg
					></div>
					<div class="ml-2 uppercase">UNIT</div>
				</div>
				<div class="h-10 w-0 ml-[11px] my-1 border-r-bold border-strongest"></div>
				<div class="flex items-center">
					<div class="flex items-center justify-center h-6 w-6 bg-[#ffffff] rounded-full"
						><svg
							class="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							version="1.1"
							x="0px"
							y="0px"
							viewBox="0 0 76.887 55.552"
							style="enable-background: new 0 0 76.887 55.552"
							xml:space="preserve"
						>
							<polygon
								style="fill: var(--color-primary)"
								points="34.373,49.541 76.887,5.889 70.739,0 28.426,43.458 6.078,20.632 0,26.585 22.488,49.557    22.488,49.557 28.517,55.552 28.426,55.467 28.517,55.552 34.373,49.541  "
							/></svg
					></div>
					<div class="ml-2 uppercase">INSTRUCTIONS</div>
				</div>
				<div class="h-10 w-0 ml-[11px] my-1 border-r-bold border-strongest"></div>
				<div class="flex items-center">
					<div class="flex items-center justify-center h-6 w-6 bg-[#ffffff] rounded-full">
						<div class="text-md font-semibold" style="color: var(--color-primary)">3</div>
					</div>
					<div class="ml-2 uppercase">Summary</div>
				</div>
			</div>
			<div class="flex flex-1 flex-col">
				<div class="flex-1 p-6 bg-canvas"> 

<div class="text-2xl -font-light">Onboarding Summary</div>
<div class="">Kubernetes cluster My_Cluster has been successfully created and is now waiting for the agent to initate communication.</div>
<div class="">To validate the onboarding and test the connectivity, install the agent on the cluster and click on </div>
<button class="border bg-content px-2 py-1">Validate</button>

<div class="bg-aside border my-8">
	<div class="h-1 w-4/6 bg-info-darkest"></div>
</div>

<div class="">
	The agent has not initated communication.
Once the agent is installed please click on the "VALIDATE" button again.
If the agent has already been installed please check the agent connectivity. See <a href="text-info">sk165514</a>

</div>

				</div>
				<div class="flex-0 border-t py-2 px-4 flex bg-aside">
					<div class="ml-auto space-x-2">
						<button
							class="
							bg-canvas
							border
							border-weaker
							text-weakest
								justify-center
								hover:bg-content
								hover:border
								active:bg-content-dark
								active:border-weakest
								focus:outline-none
								px-3
								py-1
								min-w-[10ch]
							"
							>Back</button
						>
						<button
							class="
								theme theme-dark
								justify-center
								bg-primary
								hover:bg-hover
								hover:border-stronger
								active:bg-primary-dark
								active:border-weakest
								border
								focus:outline-none
								px-3
								py-1
								min-w-[10ch]
							"
							>FINISH</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue';

defineProps({
	msg: String,
});

const state = reactive({ count: 0 });
</script>
