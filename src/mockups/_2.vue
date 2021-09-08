<template>
	<div class="flex flex-1 items-center justify-center">
		<div class="theme theme-light flex flex-col flex-1 max-w-4xl relative overflow-hidden shadow-xl shadow-strong">
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

						<div class="grid grid-cols-8 gap-3 my-8">
							<div class="font-semibold col-span-2 mr-4">Claster:</div>
							<div class="col-span-6">My_Cluster</div>
							<div class="font-semibold col-span-2 mr-4">Kubernetes Version:</div>
							<div class="col-span-6">v1.18.16-eks-7737de</div>

							<div class="font-semibold col-span-2 mr-4">Features:</div>
							<div class="col-span-6">
								<div class="inline-block bg-primary-lightest px-2 ml-1 rounded-md" style="color: white">Posture Management</div>
								<div class="inline-block bg-primary-lightest px-2 ml-1 rounded-md" style="color: white">Image Assurance</div>
							</div>
							<div class="font-semibold col-span-2 mr-4">Nodes:</div>
							<div class="col-span-6">20</div>
							<div class="font-semibold col-span-2 mr-4">Agents:</div>

							<div class="col-span-6">
								<div class="flex">
									<div class="mb-1 flex-1"> </div>
									42 out of 63
								</div>
								<div class="flex">
									<div class="bg-content border flex-1">
										<div class="h-1 w-4/6 bg-info-darkest"></div>
									</div>
								</div>
							</div>
							<div class="font-semibold col-span-2 mr-4">Status:</div>
							<div class="col-span-6">Initialization</div>
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

<script>
</script>
