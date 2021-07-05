<template>
	<div class="flex flex-1 items-center justify-center">
		<div class="theme theme-light flex flex-col flex-1 max-w-4xl relative overflow-hidden shadow-xl shadow-strong" >
			<div class="flex-0 border-b px-4 py-2 theme theme-dark-primary font-light uppercase"
				>KUBERNETES ONBOARDING</div
			>
			<div class="flex flex-1 flex-row">
				<div class="flex-0 flex flex-col border-r theme theme-dark-primary p-6 text-xs">
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
							<div class="text-md font-semibold" style="color: var(--color-primary)">4</div>
						</div>
						<div class="ml-2 uppercase">Summary</div>
					</div>
				</div>
				<div class="flex flex-1 flex-col max-w-3xl">
					<div class="flex-1 p-6 bg-canvas overflow-auto" style="max-height: 500px; min-height: 500px">
						<div class="text-2xl">Onboarding Summary</div>
						<div class="bg-info-lightest p-2 text-xs flex items-center mt-3">
							<div class="flex items-center justify-center">
								<svg width="16" height="16" viewBox="0 0 16 16">
									<path
										d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,13H8a1,1,0,0,1-1-1V7A1,1,0,0,1,8,6H8A1,1,0,0,1,9,7v5A1,1,0,0,1,8,13ZM9,4A1,1,0,1,1,8,3,1,1,0,0,1,9,4Z"
									/>
								</svg>
							</div>
							<div class="flex-1 ml-2">
								To validate the onboarding and test the connectivity, install the agent on the cluster.
							</div>
						</div>
						<div class="grid grid-cols-8 gap-3 my-8">
							<div class="col-span-2 font-semibold mr-4">Claster:</div>
							<div class="col-span-6">My_Cluster</div>

							<div  class="font-semibold mr-4 col-span-2">Kubernetes Version:</div>
							<div class="col-span-6">N/A</div>

							<div class=" font-semibold mr-4 col-span-2">Features:</div>
							<div class="col-span-6"><div class="inline-block bg-primary-lightest px-2 ml-1 rounded-md" style="color: white"
									>Posture Management</div
								>
								<div class="inline-block bg-primary-lightest px-2 ml-1 rounded-md" style="color: white"
									>Image Assurance</div
								></div>

							<div class=" font-semibold mr-4 col-span-2">Nodes:</div>
							<div class="col-span-6">N/A</div>

							<div class="font-semibold col-span-2 mr-4">Agents:</div>
							<div class="col-span-6">N/A</div>

							<div class=" font-semibold mr-4 col-span-2">Status:</div>
							

							<div class="col-span-6">
								<div class="flex flex-1">
									<svg
										class="w-4 h-4"
										fill="var(--color-warning)"
										id="Layer_1"
										data-name="Layer 1"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
									>
										<path
											class="cls-1"
											d="M15.84,13.85,9.25.78A1.38,1.38,0,0,0,7.4.14a1.35,1.35,0,0,0-.65.64L.16,13.85a1.53,1.53,0,0,0,0,1.44A1.41,1.41,0,0,0,1.41,16H14.59a1.41,1.41,0,0,0,1.21-.71A1.53,1.53,0,0,0,15.84,13.85ZM7,4.83A.93.93,0,0,1,8,4a.93.93,0,0,1,1,.83V8.17A.93.93,0,0,1,8,9a.93.93,0,0,1-1-.83ZM8,14a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,8,14Z"
										/>
									</svg>
									<div class="ml-1">Pending</div>
									<button class="border bg-content px-2 -py-1 ml-auto text-xs">VALIDATE</button>
								</div>
								<div class="bg-warning-lightest p-3 text-xs mt-2">
									<div class="font-semibold mb-1"> The agent has not initated communication</div>
									<ul class="list-disc ml-4">
										<li>Make sure agent is installed</li>
										<li>Check agent connectivity</li>
										<li>If the agent has already been installed please check the agent connectivity.
											<a class="text-info" href="">See sk165514</a>
										</li>
									</ul>
								</div>
							</div>
							<!--  -->
						</div>
					</div>
					<div class="flex-0 border-t py-2 px-4 flex bg-aside">
						<div class="ml-auto space-x-2">
							<button
								class="
									bg-canvas
									border border-weaker
									text-weakest
									justify-center
									hover:bg-content hover:border
									active:bg-content-dark active:border-weakest
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
									hover:bg-hover hover:border-stronger
									active:bg-primary-dark active:border-weakest
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
	</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue';

defineProps({
	msg: String,
});

const state = reactive({ count: 0 });
</script>
