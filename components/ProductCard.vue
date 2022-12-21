<template>
    <div class="m-3 border-2 border-gray-100 shadow-gray-400 shadow-md hover:shadow-lg">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow h-40 pt-3">
            <!--<a href="#" class="flex flex-wrap no-underline hover:no-underline">-->
            <NuxtLink :to="`/products/${product.page}`" class="flex flex-wrap no-underline hover:no-underline">                
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                    {{ product.ProductName }}
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                    {{ product.shortDescr }}
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                    {{ product.Descr }}
                </p>
            </NuxtLink>
            <!--</a>-->
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-4">
            <!--<div class="flex items-center justify-start">-->
            <NuxtLink :to="`/products/${product.page}`" class="flex items-center justify-start">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Know More
                </button>
            </NuxtLink>
            <!--</div>-->
        </div>
    </div>


</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style  scoped>

</style>