<template>
<main>
    <Header />
        <section class="bg-gray-200 min-h-screen">

            <div  class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight">Stocks</h2>
                    </div>
                    <div class="my-2 flex sm:flex-row flex-col">
                        <div class="flex flex-row mb-1 sm:mb-0">
                            <!-- <div class="relative">
                                <select v-model="counter"
                                    class="h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>5</option>
                                    <option>10</option>
                                    <option>20</option>
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div> -->
                            <div class="relative">
                                <select v-model="type"
                                    class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                    <option>All</option>
                                    <option v-for="(x, i) in Array.from(itemName)" :key="i">{{ x }}</option>
                                    <!-- <option>Active</option>
                                    <option>Inactive</option> -->
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="block relative">
                            <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                    <path
                                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                    </path>
                                </svg>
                            </span>
                            <input placeholder="Search" v-model="search"
                                class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                        </div>
                    </div>

                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Item
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Quantity
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <!-- <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th> -->
                                    </tr>
                                </thead>
                                <tbody v-show="loading==false"> 
                                    <!-- i <= (counter - 1) && -->
                                    <tr v-show="(type != 'All' ? (x.name == type) : true) && (search != null ? (x.name.includes(search)) : true) && x.left >= 1" v-for="(x, i) in sortedList" :key="i">
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <!-- <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" /> -->
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        {{ x.name }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">{{ x.left }}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{ new Date(x.date).toDateString() }}
                                            </p>
                                        </td>
                                        <!-- <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                <span class="relative">Activo</span>
                                            </span>
                                        </td> -->
                                    </tr>
                                    
                                </tbody>
                            </table>
                            <!-- <div
                                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span class="text-xs xs:text-sm text-gray-900">
                                    Showing 1 to 4 of 50 Entries
                                </span>
                                <div class="inline-flex mt-2 xs:mt-0">
                                    <button
                                        class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                        Prev
                                    </button>
                                    <button
                                        class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                        Next
                                    </button>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
  <!-- <bar-loader class="custom-class" color="#bada55" :loading="loading" :size="150" :sizeUnit="px"></bar-loader> -->
        <div v-show="loading==true" class="flex items-center justify-center ">
            <div style="border-top-color:transparent"
                class="w-16 h-16 border-4 border-blue-400 border-dotted rounded-full animate-spin"></div>
        </div>
        </section>

    <!-- <Footer /> -->
</main>
</template>

<style scoped>
.shake {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 3.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import axios from 'axios'
const api = 'http://localhost:8000/' ||  'https://UrbanFastMoto.notabc.repl.co/' // 'http://localhost:8000/' ||

export default {
    data () {
        return {
            allList : [
                { 
                    date : '2022-03-15', 
                    buyingList : [{ name : '鸡腿', q : 23, price : 300, edit : false, left : 21 }, { name : '鸡胸', q : 2, price : 300, edit : false, left : 20  }] 
                },
                { 
                    date : '2022-03-18', 
                    buyingList : [{ name : '烤鸡', q : 23, price : 300, edit : false, left : 19  }, { name : 'cow', q : 2, price : 300, edit : false, left : 12  }] 
                },
                { 
                    date : '2022-03-3', 
                    buyingList : [{ name : 'lamb', q : 23, price : 300, edit : false, left : 19  }, { name : 'pork', q : 2, price : 300, edit : false, left : 12  }] 
                },
                { 
                    date : '2022-02-18', 
                    buyingList : [{ name : 'pigpiggg', q : 23, price : 300, edit : false, left : 19  }, { name : 'pigss', q : 2, price : 300, edit : false, left : 12  }] 
                },
            ],
            sortedList : [],
            counter : 5,
            type : 'All',
            search : null,
            itemName : new Set(),
            loading : true
        }
    },
     methods : {

     },
  async mounted() {
      this.loading = true
      const res = await axios.post(`${api}fullList`)
      const data = res.data
      this.allList = res.data
      await Promise.all(this.allList.map(a => {
          a.buyingList.map(b => {
              this.itemName.add(b.name)
              this.sortedList.push({ date : new Date(a.date), name : b.name, q : b.q, price : b.price, left : b.left })
          })
      }))
      await this.sortedList.sort((a, b) => b.date - a.date).reverse()
      this.loading = false
    //   console.log(this.sortedList.map(a => new Date(a.date).toLocaleString()))
  },
  head: {
    script: [
    //   {
    //     src: "https://unpkg.com/vue",
    //   },
    //   {
    //     src: "https://unpkg.com/@saeris/vue-spinners",
    //   },
      {
        src: "https://unpkg.com/flowbite@1.3.4/dist/datepicker.js",
      },
    ],
     link: [
       {
        rel : 'stylesheet',
        href : "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
       },
       {
        rel : 'stylesheet',
        href : "https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
       },
       {
        href : "./TW-ELEMENTS-PATH/dist/js/index.min.js"
       }
     ],
     meta: [
     ],
     title: "Remove Page"
   }
}

</script>
