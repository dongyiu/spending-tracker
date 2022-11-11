<template>
        <header class="bg-gray-800" x-data="{ isOpen: false }">
            <nav class="container px-8 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <a class="text-xl font-bold text-gray-900 md:text-2xl" href="#"></a>

                    <!-- Mobile menu button -->
                    <div @click="isOpen = !isOpen" class="flex md:hidden">
                        <button type="button"
                            class="text-white hover:text-pink-400 focus:outline-none focus:text-white"
                            aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div :class="isOpen ? 'flex' : 'hidden'"
                    class="flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                    <a href="/">
                    <button type="button" class="text-white hover:text-pink-400 bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                    <i class="fa fa-plus mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" role="img" viewBox="0 0 320 512"></i>
                    Add Stock
                    </button>
                    </a>
                    <a href="/remove">
                    <button type="button" class="text-white hover:text-pink-400 bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                    <i class="fa fa-ban mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" role="img" viewBox="0 0 320 512"></i>
                    Remove Stock
                    </button>
                    </a>
                    <a href="/view">
                    <button type="button" class="text-white hover:text-pink-400 bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                    <i class="fa fa-eye mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" role="img" viewBox="0 0 320 512"></i>
                    View Stock
                    </button>
                    </a>
                </div>
            </nav>
        </header>
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
     ],
     meta: [
     ],
     title: "Home Page"
   }
}

</script>