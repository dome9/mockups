<template>
	<div class="flex flex-1 flex-col p-10">
		<div class="mb-4">
			<div class="">
				<div class="flex">
					<div class="font-bold mr-3"> Name: </div>
					<div class="-font-bold mb-3">This is a very long name. Probably longer than needed.</div>
				</div>
				<div class="flex flex-0 space-x-8">
					<div class="mb-2 items-center flex">
						<div class="font-bold mr-3"> Tag: </div>
						<div class="">2.04</div>
					</div>
					<div class="mb-2 items-center flex">
						<div class="font-bold mr-3"> Registry: </div>
						<div class="">quay.io</div>
					</div>
					<div class="mb-2 items-center flex">
						<div class="font-bold mr-3"> Image ID: </div>
						<div class="" title="sha256:19bc31ffe6707187f9d8735a0de9b819b2b317ed9a6e7d867a0b07f30d2d0988">19bc31ff...</div>
						<!-- <div class="">sha256:19bc31ffe6707187f9d8735a0de9b819b2b317ed9a6e7d867a0b07f30d2d0988</div> -->
					</div>
					<div class="mb-2 items-center flex">
						<div class="font-bold mr-3"> Image Size: </div>
						<div class="">537 MB</div>
					</div>
					<div class="mb-2 items-center flex">
						<div class="font-bold mr-3"> Running workloads: </div>
						<div class="">5</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-0 uppercase">
			<div class="border-t border-l border-r bg-content px-5 py-2">Overview</div>
			<div class="border-b px-5 py-2">Properties</div>
			<div class="border-b px-5 py-2 relative">
				<div class="absolute top-1 right-2 p-1 bg-warning rounded-full animate-ping"></div>
				<div class="absolute top-1 right-2 p-1 bg-warning rounded-full"></div>
				POD Group</div>
			<div class="border-b px-5 py-2">Entity Viewer</div>
			<div class="border-b px-5 py-2 relative">
				<div class="absolute top-1 right-2 p-1 bg-danger rounded-full animate-ping"></div>
				<div class="absolute top-1 right-2 p-1 bg-danger rounded-full"></div>

				Threat & Security Events
			</div>
			<div class="border-b px-5 py-2 relative">
				<div class="absolute top-1 right-2 p-1 bg-danger rounded-full animate-ping"></div>
				<div class="absolute top-1 right-2 p-1 bg-danger rounded-full"></div>
				Posture Findings
			</div>
			<div class="border-b flex-1"></div>
		</div>
		<div class="flex-1 overflow-auto bg-content p-10 border-r border-b border-l">
			<div class="flex">
				<div class="grid gap-3 grid-cols-2">
					<div class="font-bold self-center"> Risk score: </div>
					<div class="flex items-center">
						<!-- <svg id="Layer_1" class="w-4 h-4 self-center" fill="var(--color-danger)" viewBox="0 0 32 32">
							<path
								class="cls-1"
								d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm7.71,22.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L16,17.41l-6.29,6.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L14.59,16,8.29,9.71A1,1,0,0,1,9.71,8.29L16,14.59l6.29-6.3a1,1,0,0,1,1.42,1.42L17.41,16Z"
							/>
						</svg> -->
						<div class="bg-danger-darkest theme theme-dark font-black text-strongest px-3 rounded text-xl"
							>9.8</div
						>
					</div>
					<div class="font-bold"> Image status: </div>
					<div class="flex items-center">
						<svg id="Layer_1" class="w-4 h-4 self-center" fill="var(--color-danger)" viewBox="0 0 32 32">
							<path
								class="cls-1"
								d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm7.71,22.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L16,17.41l-6.29,6.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L14.59,16,8.29,9.71A1,1,0,0,1,9.71,8.29L16,14.59l6.29-6.3a1,1,0,0,1,1.42,1.42L17.41,16Z"
							/>
						</svg>
						<div class="ml-2">Failed policy</div>
					</div>

					<div class="font-bold"> Vulnerabilities: </div>
					<div class="flex items-center">
						<svg id="Layer_1" class="w-4 h-4 self-center" fill="var(--color-danger)" viewBox="0 0 32 32">
							<path
								class="cls-1"
								d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm7.71,22.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L16,17.41l-6.29,6.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L14.59,16,8.29,9.71A1,1,0,0,1,9.71,8.29L16,14.59l6.29-6.3a1,1,0,0,1,1.42,1.42L17.41,16Z"
							/>
						</svg>
						<div class="ml-2">52</div>
					</div>
					<div class="pl-6 mr-3"> Criticality: </div>
					<div class="flex">
						<div class="theme theme-dark bg-danger-darkest px-2 py-0.5 text-strongest rounded self-start">
							Critical</div
						>
					</div>
					<div class="pl-6 mr-3"> CVE: </div>
					<div class="flex items-center">
						<svg id="Layer_1" class="w-4 h-4 self-center" fill="var(--color-danger)" viewBox="0 0 32 32">
							<path
								class="cls-1"
								d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm7.71,22.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L16,17.41l-6.29,6.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L14.59,16,8.29,9.71A1,1,0,0,1,9.71,8.29L16,14.59l6.29-6.3a1,1,0,0,1,1.42,1.42L17.41,16Z"
							/>
						</svg>
						<div class="ml-2">Failed</div>
					</div>
					<div class="pl-6 mr-3"> Malicious Files: </div>
					<div class="flex items-center">
						<svg id="Layer_1" class="w-4 h-4 self-center" fill="var(--color-danger)" viewBox="0 0 32 32">
							<path
								class="cls-1"
								d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm7.71,22.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L16,17.41l-6.29,6.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L14.59,16,8.29,9.71A1,1,0,0,1,9.71,8.29L16,14.59l6.29-6.3a1,1,0,0,1,1.42,1.42L17.41,16Z"
							/>
						</svg>
						<div class="ml-2">39</div>
					</div>
					<div class="pl-6 mr-3"> Insecure Code: </div>
					<div class="flex items-center">
						<svg
							id="Layer_1"
							class="w-4 h-4 self-center"
							fill="var(--color-success)"
							data-name="Layer 1"
							viewBox="0 0 16 16"
						>
							<path
								class="cls-1"
								d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm4.27,5.64-5,6A1,1,0,0,1,6.5,12h0a1,1,0,0,1-.78-.45l-2-3a1,1,0,0,1,1.66-1.1L6.59,9.33l4.14-5a1,1,0,1,1,1.54,1.28Z"
							/>
						</svg>
						<div class="ml-2">0</div>
					</div>
					<div class="pl-6 mr-3"> Insecure Content: </div>
					<div class="flex items-center">
						<svg
							id="Layer_1"
							class="w-4 h-4 self-center"
							fill="var(--color-success)"
							data-name="Layer 1"
							viewBox="0 0 16 16"
						>
							<path
								class="cls-1"
								d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm4.27,5.64-5,6A1,1,0,0,1,6.5,12h0a1,1,0,0,1-.78-.45l-2-3a1,1,0,0,1,1.66-1.1L6.59,9.33l4.14-5a1,1,0,1,1,1.54,1.28Z"
							/>
						</svg>
						<div class="ml-2">0</div>
					</div>
					<div class="pl-6 mr-3"> Malicious URL: </div>
					<div class="flex items-center">
						<svg
							id="Layer_1"
							class="w-4 h-4 self-center"
							fill="var(--color-success)"
							data-name="Layer 1"
							viewBox="0 0 16 16"
						>
							<path
								class="cls-1"
								d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm4.27,5.64-5,6A1,1,0,0,1,6.5,12h0a1,1,0,0,1-.78-.45l-2-3a1,1,0,0,1,1.66-1.1L6.59,9.33l4.14-5a1,1,0,1,1,1.54,1.28Z"
							/>
						</svg>
						<div class="ml-2">0</div>
					</div>
					<div class="font-bold"> Malicious IP: </div>
					<div class="flex items-center">
						<svg id="Layer_1" class="w-4 h-4 self-center" fill="var(--color-danger)" viewBox="0 0 32 32">
							<path
								class="cls-1"
								d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm7.71,22.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L16,17.41l-6.29,6.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L14.59,16,8.29,9.71A1,1,0,0,1,9.71,8.29L16,14.59l6.29-6.3a1,1,0,0,1,1.42,1.42L17.41,16Z"
							/>
						</svg>
						<div class="ml-2">2</div>
					</div>
					<div class="font-bold"> Packages: </div>
					<div class="">666</div>

					<div class="pl-6 mr-3"> Vulnerable packages: </div>
					<div class="flex items-center">
						<svg
							id="Layer_1"
							class="w-4 h-4 self-center"
							fill="var(--color-success)"
							data-name="Layer 1"
							viewBox="0 0 16 16"
						>
							<path
								class="cls-1"
								d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm4.27,5.64-5,6A1,1,0,0,1,6.5,12h0a1,1,0,0,1-.78-.45l-2-3a1,1,0,0,1,1.66-1.1L6.59,9.33l4.14-5a1,1,0,1,1,1.54,1.28Z"
							/>
						</svg>
						<div class="ml-2">0</div>
					</div>
					<div class="pl-6 mr-3"> Fixable packages: </div>
					<div class="">N/A</div>

					<div class="font-bold"> Scan Status: </div>
					<div class="flex">
						<div class="theme theme-dark bg-success px-2 py-0.5 text-strongest rounded self-start">
							No Errors</div
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
