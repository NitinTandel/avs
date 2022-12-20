<template>
    <div>
        <div v-if="service.LogoPosition=='Left'" class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
                 <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">                
                    {{ service.ServiceName }}
                </h3>
                <p class="text-gray-600 mb-8">                
                    {{ service.ServiceDescr }}
                    <br />
                    <br />

                    Know more:
                    <NuxtLink class="text-pink-500 underline" :to="`services/${service.ServiceId}`">check here</NuxtLink>

                    <!--<a class="text-pink-500 underline" href="https://undraw.co/">check here</a>-->
                </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
                <img class="w-5/6 sm:h-64 mx-auto"  :src="service.Logo"   alt="">
            </div>
        </div>
        <div v-else class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full sm:w-1/2 p-6 mt-6">
                <img class="w-5/6 sm:h-64 mx-auto"  :src="service.Logo"   alt="">
            </div>
            <div class="w-full sm:w-1/2 p-6 mt-6">
                <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                    {{ service.ServiceName }}
                </h3>
                <p class="text-gray-600 mb-8">
                    {{ service.ServiceDescr }}
                    <br />
                    <br />
                    Know more:

                    <NuxtLink class="text-pink-500 underline" :to="`services/${service.ServiceId}`">check here</NuxtLink>
                </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
  const { service } = defineProps(['service'])

</script>

<style  scoped>

</style>