<template>
    <div class="absolute top-0 bottom-0 right-0 left-0 z-100">
        <section class="flex items-center h-full p-16 bg-white text-gray-100">
            <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div class="max-w-md text-center">
                    <h2 class="mb-8 font-extrabold text-9xl text-gray-600">
                        <span class="sr-only">Error</span>404
                    </h2>
                    <p class="text-2xl text-gray-800 font-semibold md:text-3xl uppercase">Page not found</p>
                    <p class="mb-8 text-gray-400">찾을 수 없는 페이지입니다</p>
                    <router-link to="/">
                        <div class="flex items-center justify-center">
                            <p class="px-8 text-white py-3 font-semibold rounded bg-blue-400">
                                Back to homepage <i class="fa-solid fa-arrow-right ml-1"></i>
                            </p>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
export default {
    name: "404Page",

    data() {
        return {};
    },

    mounted() { },

    methods: {},
};
</script>
  
<style scoped>

</style>
  