<template>
	<div class="flex flex-1 bg-aside">
		<div class="border m-12 bg-content p-5">
			<div class="">
				<div class="mb-2 items-center flex">
					<div class="font-bold mr-6"> Image status </div>
					<div class="ml-auto px-2 theme theme-dark bg-danger">Failed policy</div>
				</div>
				<div class="mb-2 items-center flex">
					<div class="font-bold mr-6"> Risk Score </div>
					<div class="ml-auto px-2 theme theme-dark bg-danger-darkest">9.80</div>
				</div>
				<div class="mb-2 items-center flex">
					<div class="font-bold mr-6"> Vulnerabilities </div>
					<div class="ml-auto px-2 theme theme-dark bg-danger">52</div>
				</div>
				<div class="ml-6">
					<div class="mb-2 items-center flex">
						<div class="-font-bold mr-6"> Criticality </div>
						<div class="ml-auto px-2 theme theme-dark bg-danger-darkest">Critical</div>
					</div>
					<div class="mb-2 items-center flex">
						<div class="-font-bold mr-6"> CVE </div>
						<div class="ml-auto px-2 theme theme-dark bg-danger">Failed</div>
					</div>
					<div class="mb-2 items-center flex">
						<div class="-font-bold mr-6"> Malicious Files </div>
						<div class="ml-auto px-2 theme theme-dark bg-danger">39</div>
					</div>
					<div class="mb-2 items-center flex">
						<div class="-font-bold mr-6"> Insecure Code </div>
						<div class="ml-auto px-2 theme theme-dark bg-success">0</div>
					</div>
					<div class="mb-2 items-center flex">
						<div class="-font-bold mr-6"> Insecure Content </div>
						<div class="ml-auto px-2 theme theme-dark bg-success">0</div>
					</div>
					<div class="mb-2 items-center flex">
						<div class="-font-bold mr-6"> Malicious URL </div>
						<div class="ml-auto px-2 theme theme-dark bg-success">0</div>
					</div>
				</div>
				<div class="mb-2 items-center flex">
					<div class="font-bold mr-6"> Malicious IP </div>
					<div class="ml-auto px-2 theme theme-dark bg-danger">2</div>
				</div>
				<div class="mb-2 items-center flex">
					<div class="font-bold mr-6"> Packages </div>
					<div class="ml-auto">666</div>
				</div>
				<div class="ml-6">
					<div class="mb-2 items-center flex">
						<div class="-font-bold mr-6"> Vulnerable packages </div>
						<div class="ml-auto px-2 theme theme-dark bg-success">0</div>
					</div>
					<div class="mb-2 items-center flex">
						<div class="-font-bold mr-6"> Fixable packages </div>
						<div class="ml-auto">N/A</div>
					</div>
				</div>
				<div class="mb-2 items-center flex">
					<div class="font-bold mr-6"> Scan Status </div>
					<div class="ml-auto px-2 theme theme-dark bg-success">No Errors</div>
				</div>
			</div>
			<br />
			<div class="">
				<div class="mb-2 items-center flex">
					<div class="font-bold mr-6"> Name </div>
					<div class="ml-auto">event_exporter</div>
				</div>
				<div class="mb-2 items-center flex">
					<div class="font-bold mr-6"> Tag </div>
					<div class="ml-auto">2.04</div>
				</div>
				<div class="mb-2 items-center flex">
					<div class="font-bold mr-6"> Registry </div>
					<div class="ml-auto">666</div>
				</div>
				<div class="mb-2 items-center flex">
					<div class="font-bold mr-6"> Image ID </div>
					<div class="ml-auto">666</div>
				</div>
				<div class="mb-2 items-center flex">
					<div class="font-bold mr-6"> Image Size </div>
					<div class="ml-auto">537 MB</div>
				</div>
				<div class="mb-2 items-center flex">
					<div class="font-bold mr-6"> Running workloads </div>
					<div class="ml-auto">5</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>


defineProps({
	msg: String,
});

const state = reactive({ count: 0 });
</script>
