<template>
    <footer class="text-white bg-gray-100">
        <div class="container flex items-center px-5 py-8 mx-auto ">
            <p class="text-sm text-black">
                @
                    2021 Any —
                <a href="#" class="ml-1 text-black" target="_blank">www.Google.com</a>
            </p>
        </div>
    </footer>
</template>
<script>

export default {
    data () {
        return {
            isOpen: false
        }
    },
    methods : {

    },
  mounted() {
  },
  head: {
     link: [
       {
        rel : 'stylesheet',
        href : "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
       },
       {
        rel : 'stylesheet',
        href : "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js"
       },
     ],
     meta: [
     ],
     title: "Home Page"
   }
}

</script>