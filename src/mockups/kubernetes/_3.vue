<template>
	<div class="flex flex-1 items-center justify-center">
		<div class="theme theme-light flex flex-col relative overflow-hidden shadow-xl shadow-strong">
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
					<div class="flex-1 p-6 bg-canvas">
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
								To validate the onboarding and test the connectivity, install the agent on the cluster
								and click on "Validate" button.
							</div>
						</div>
						<div class="grid grid-cols-5 gap-3 my-8">
							<div class="font-semibold">Claster:</div>
							<div class="col-span-4">My_Cluster</div>
							<!--  -->
							<div class="font-semibold">Status:</div>
							<div class="col-span-4">
								<div class="flex">
									<svg id="Layer_1" width="16" height="16" viewBox="0 0 16 16">
										<path
											style="fill: var(--color-success)"
											d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm4.27,5.64-5,6A1,1,0,0,1,6.5,12h0a1,1,0,0,1-.78-.45l-2-3a1,1,0,0,1,1.66-1.1L6.59,9.33l4.14-5a1,1,0,1,1,1.54,1.28Z"
										/>
									</svg>
									<div class="ml-1">Successfuly created</div>
								</div>
							</div>
							<!--  -->
							<div class="font-semibold">Communication:</div>
							<div class="col-span-4">
								<div class="flex flex-1">
									<svg 
									width="16" height="16"
										x="0px"
										y="0px"
										viewBox="0 0 16 16"
										xml:space="preserve"
									>
										
										<path fill= "var(--color-danger)" d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z" />
										<path fill="white"
											d="M11.7,10.3c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0c-0.4,0.4-1,0.4-1.4,0c0,0,0,0,0,0L8,9.4l-2.3,2.3 	c-0.4,0.4-1,0.4-1.4,0c0,0,0,0,0,0c-0.4-0.4-0.4-1,0-1.4c0,0,0,0,0,0L6.6,8L4.3,5.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0L8,6.6l2.3-2.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L9.4,8L11.7,10.3z"
										/>
									</svg>
									<div class="ml-1">Not initiated</div>
									<button class="border bg-content px-2 -py-1 ml-auto text-xs">VALIDATE</button>
								</div>
								<div class="bg-danger-lightest p-3 text-xs mt-2">
									<div class="font-semibold mb-1"> The agent has not initated communication</div>
									<ul class="list-disc ml-4">
										<li>Make sure agent is installed</li>
										<li
											>Once the agent is installed please click on the "VALIDATE" button
											again.</li
										>
										<li>Check agent connectivity</li>
									</ul>
									<!-- The agent has not initated communication. Once the agent is installed please click
									on the "VALIDATE" button again. If the agent has already been installed please check
									the agent connectivity. See <a href="text-info">sk165514</a> -->
								</div>
							</div>
							<!--  -->
						</div>

						<div class="my-12 -p-4 -bg-aside -border -rounded-md">
							<div class="flex">
								<div class="mb-1 flex-1"> Agents initialization </div>
								42 / 63
							</div>
							<div class="flex">
								<div class="bg-content border flex-1">
									<div class="h-1 w-4/6 bg-info-darkest"></div>
								</div>
							</div>
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
	</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue';

defineProps({
	msg: String,
});

const state = reactive({ count: 0 });
</script>
