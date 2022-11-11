<template>
<main>
    <Header />
        <section class="bg-gray-200 min-h-screen">
            <div class="max-w-2xl mx-auto ">
                <div class="flex flex-col">

                <!-- Delete Modal -->
                <div v-show="removing.status" class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto my-40">
                    <div class="w-full h-full text-center">
                        <div class="flex h-full flex-col justify-between">
                            <svg width="40" height="40" class="mt-4 w-12 h-12 m-auto text-indigo-500" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z">
                                </path>
                            </svg>
                            <p class="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                                Remove {{ removing.name }}
                            </p>
                            <p class="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                                Are you sure you want to delete {{ removing.q }} {{ removing.name }} from {{ removing.date }}?
                            </p>
                            <div class="flex items-center justify-between gap-4 w-full mt-8">
                                <button @click="deleteItem()" type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Delete
                                </button>
                                <button @click="removing.status = !removing.status" type="button" class="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Delete Modal (date) -->
                <div v-show="deletingDate.status" class="container mx-auto px-3 md:px-12 justify-center relative z-5 flex items-center py-32 xl:py-40">
                    <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800">
                        <div class="bg-white rounded-lg w-1/2">
                        <div class="flex flex-col items-start p-4">
                            <div class="flex items-center w-full">
                            <!-- <div class="text-gray-900 my-3 font-medium text-lg">Add Stock</div> -->
                        <svg class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" @click="deletingDate=false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                            </svg>
                            </div>
                            Are you sure you want to delete date "{{ deletingDate.date }}" ?
                            <div class="ml-auto">
                            <button @click="deleteDate(null, null, true)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                Delete
                            </button>
                            <button @click="deletingDate=false" class="bg-red-500 hover:bg-red-700 text-white font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded">
                                Cancel
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <!-- Add Modal -->
                <div v-show="add" class="container mx-auto px-6 md:px-12 justify-center relative z-10 flex items-center py-20 xl:py-35">
                    <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800">
                        <div class="bg-white rounded-lg w-1/2">
                        <div class="flex flex-col items-start p-4">
                            <div class="flex items-center w-full">
                            <!-- <div class="text-gray-900 my-3 font-medium text-lg">Add Stock</div> -->
                        <svg class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" @click="add=false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                            </svg>
                            </div>
                            <hr>
                            <label for="" class="block"> Name</label>
                            <input v-model="blank.name" type="text" class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="pig belly">
                            <label for="" class="block"> Quantity</label>
                            <input v-model="blank.q" type="number" class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="20">
                            <label for="" class="block"> Price</label>
                            <input v-model="blank.price" type="number" class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="30.20">
                            <hr>
                            <div class="ml-auto">
                            <button @click="addItem()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Add
                            </button>
                            <button @click="add=false" class="bg-red-500 hover:bg-red-700 text-white font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                                Cancel
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <!-- Table -->
                <section v-show="!removing.status" class="shadow my-10">
                    <article class="border-b">
                        <div class="border-l-2 border-transparent">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
                                <span class="text-grey-darkest font-thin text-xl">
                                    <input v-model="newDate" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a Date">
                                </span>
                                <div v-show="loading==false" @click="addDate()" class="fa fa-plus rounded-full bg-green-500 border border-grey w-7 h-7 flex items-center justify-center">
                                </div>
                            </header>
                        </div>
                    </article>

                    <article v-show="loading==false" :class="{ shake: ii == exist }" v-for="(xx, ii) in allList" :key="ii" class="border-b">
                        <div class="border-l-2 bg-grey-lightest border-indigo">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
                                <div @click="deleteDate(xx.date, ii)" class="fa fa-times rounded-full bg-red-500 border border-grey w-7 h-7 flex items-center justify-center"></div>

                                <span class="text-indigo font-thin text-xl">
                                    {{ xx.date }} ( {{xx.buyingList.length}} ) - RM {{xx.buyingList.reduce((a, b) => a + (Number(b.price) || 0), 0)}}
                                </span>
                                <div class="hover:bg-blue-700 bg-indigo-600 rounded-full border border-indigo w-7 h-7 flex items-center justify-center">
                                    <!-- icon by feathericons.com -->
                                    <svg @click="currentIndex == ii ? currentIndex = 0.1 : currentIndex = ii" aria-hidden="true" data-reactid="281" fill="none" height="24" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="18 15 12 9 6 15">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div>
                                <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                <div v-show="ii == currentIndex" class="overflow-x-auto shadow-md sm:rounded-lg my-10">
                                    <div class="inline-block min-w-full align-middle">
                                        <div class="overflow-hidden ">
                                            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                                <thead class="bg-gray-100 dark:bg-gray-700">
                                                    <tr>
                                                        <th scope="col" class="p-4">
                                                            <button @click="add = true" class="h-6 px-2 text-sm text-indigo-100 transition-colors duration-150 bg-green-400 rounded-lg focus:shadow-outline hover:bg-indigo-800 fa fa-plus"></button>
                                                        </th>
                                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Name
                                                        </th>
                                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Quantity
                                                        </th>
                                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Price
                                                        </th>
                                                        <th scope="col" class="p-4">
                                                            <!-- <span class="sr-only">Edit</span> -->
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                                    <tr v-for="(x, i) in xx.buyingList" :key="i" :class="{ shake: x.edit }" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                        <td class="p-4 w-4 ">
                                                            <div class="flex items-center">
                                                            <button @click="removeItem(x, i, xx.date)" class="h-6 px-2 text-sm text-indigo-100 transition-colors duration-150 bg-red-400 rounded-lg focus:shadow-outline hover:bg-indigo-800 fa fa-trash"></button>
                                                            </div>
                                                        </td>
                                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"><input size="10" v-model="x.name" :disabled='!x.edit'></td>
                                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"><input size="5" v-model="x.q" :disabled='!x.edit'></td>
                                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">RM <input size="5" v-model="x.price" :disabled='!x.edit'></td>
                                                        <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                            <button @click="editItem(x, xx.date)" class="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Edit</button>
                                                            <!-- <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline"></a> -->
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                </div>
            </div>
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
const api = 'http://107.152.38.108/8000/' || 'https://UrbanFastMoto.notabc.repl.co/' // 'http://localhost:8000/' || 
export default {
    data () {
        return {
            isOpen: false,
            allList : [] || [
                { 
                    date : '2022-03-15', 
                    buyingList : [{ name : 'pigpiggg', q : 2, price : 300, edit : false }, { name : 'pigss', q : 2, price : 300, edit : false }] 
                },
                { 
                    date : '2022-03-18', 
                    buyingList : [{ name : 'pigpiggg', q : 2, price : 300, edit : false }, { name : 'pigss', q : 2, price : 300, edit : false }] 
                },
            ],
            removing : { status : false },
            add : false,
            blank : { edit : false },
            newDate : '2022-03-15',
            currentIndex : 0.1,
            deletingDate : {},
            exist : 0.1,
            loading : true
        }
    },
    methods : {
        async editItem(x, date) {
            x.edit = !x.edit
            if(x.edit == false) {
            const data = {
                    info : this.allList[this.currentIndex].buyingList,
                    date : date
                }
                const res = await axios.post(`${api}editItem`, data)
            }
        },
        removeItem(x, i, date) {
            this.removing = {
                status : true,
                name : x.name,
                q : x.q,
                price : x.price,
                index : i,
                date : date
            }
        },
        async deleteItem() {
            this.allList[this.currentIndex].buyingList = this.allList[this.currentIndex].buyingList.filter((a, x) => x != this.removing.index)
            this.removing.status = false
            const data = {
                info : this.allList[this.currentIndex].buyingList,
                date : this.allList[this.currentIndex].date
            }
            const res = await axios.post(`${api}removeItem`, data)
        },
        async addItem() {
            const data = {
                info : {
                    name : this.blank.name,
                    q : this.blank.q,
                    price : this.blank.price,
                    left : this.blank.q
                },
                date : this.allList[this.currentIndex].date
            }
            this.blank.left = this.blank.q
            this.allList[this.currentIndex].buyingList.push(this.blank)
            this.add = false
            this.blank = { edit : false }
            const res = await axios.post(`${api}addItem`, data)
        },
        async addDate() {
            if(this.allList.filter(a => a.date == this.newDate).length >= 1) {
                this.exist = this.allList.indexOf(this.allList.find(a => a.date == this.newDate))
                setTimeout(() => {
                    this.exist = 0.1
                }, 5000);
                return 
            }
            this.allList.unshift({ 
                date : this.newDate, 
                buyingList : [],
            })
            const data = { date : this.newDate }
            const res = await axios.post(`${api}create`, data)
        },
        async deleteDate(i,index, status = false) {
            if(status == false) {
                return this.deletingDate = {
                    date : i,
                    status : true,
                    index
                }
            }
            if (status == true) {
                const data = {
                    date : this.deletingDate.date
                }
                const res = await axios.post(`${api}deleteDate`, data)
                this.allList = this.allList.filter((a, x) => x != this.deletingDate.index)
                return this.deletingDate.status = false
            }
        }
    },
  async mounted() {
      this.loading = true
      const res = await axios.post(`${api}fullList`)
      const data = res.data
      this.allList = data.sort((a, b) => new Date(b.date) - new Date(a.date))
      this.loading = false
  },
  head: {
    script: [
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
     title: "Home Page"
   }
}

</script>
