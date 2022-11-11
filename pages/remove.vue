<template>
<main>
    <Header />
        <section class="bg-gray-200 min-h-screen">

            <!-- Delete Modal -->
                <div v-show="removing.status" class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
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
                                Are you sure you want to delete {{ removing.q }} {{ removing.name }}?
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


            <div>
                <div v-show="!removing.status" class="pl-8 pr-8 pb-5 text-grey-darkest">
                <div class="overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="inline-block min-w-full align-middle">
                        <div class="overflow-hidden ">
                            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" class="p-4">
                                            <button v-show="loading==false" @click="editItem()" class="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Edit</button>
                                            <!-- <button @click="add = true" class="h-6 px-2 text-sm text-indigo-100 transition-colors duration-150 bg-green-400 rounded-lg focus:shadow-outline hover:bg-indigo-800 fa fa-plus"></button> -->
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Name
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Quantity
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Use
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Left
                                        </th>
                                        <!-- <th scope="col" class="p-4">
                                        </th> -->
                                    </tr>
                                </thead>
                                <tbody v-show="loading==false && x.left >= 1" :class="{ shake: edit }" v-for="(x,i) in sortedList" :key="i" class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td class="p-4 w-4 ">
                                            <div class="flex items-center">
                                            <button @click="removeItem(x, i)" class="h-6 px-2 text-sm text-indigo-100 transition-colors duration-150 bg-red-400 rounded-lg focus:shadow-outline hover:bg-indigo-800 fa fa-trash"></button>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"><input size="10" v-model="x.name" disabled></td>
                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"><input size="3" v-model="x.q" disabled></td>
                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"><input size="3" type="number" v-model="x.use" :disabled='!edit'></td>
                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"><input size="3" :value="x.use ? x.left - (Number(x.use) || 0) : x.left" disabled></td>
                                        <!-- <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <button @click="x.edit = !x.edit" class="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Edit</button>
                                        </td> -->
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
const api = 'http://localhost:8000/' || 'https://UrbanFastMoto.notabc.repl.co/' // 'http://localhost:8000/' || 

export default {
    data () {
        return {
            allList : [
                { 
                    date : '2022-03-15', 
                    buyingList : [{ name : 'pigpiggg', q : 23, price : 300, edit : false, left : 21 }, { name : 'pigss', q : 2, price : 300, edit : false, left : 20  }] 
                },
                { 
                    date : '2022-03-18', 
                    buyingList : [{ name : 'pigpiggg', q : 23, price : 300, edit : false, left : 19  }, { name : 'pigss', q : 2, price : 300, edit : false, left : 12  }] 
                },
            ],
            sortedList : [],
            removing: { status : false },
            edit : false,
            loading : true
        }
    },
     methods : {
         removeItem(x, index) {
             this.removing = {
                 status : true,
                 name : x.name,
                 q : x.q,
                 index,
             }
         },
         deleteItem() {
             this.sortedList = this.sortedList.filter((a, x) => x != this.removing.index)
             return this.removing = { status : false }
         },
         async editItem(x) {
             this.edit = !this.edit
             if(this.edit == false) {
                 const list = [];
                 this.sortedList.map((a, x) => {
                     if(Number(a.use)) {
                         list.push(x)
                     }
                 })
                 if(list.length) {
                     const editedItem = []
                     list.map(a => {
                         editedItem.push(this.sortedList[a])
                     })

                    const res = await axios.post(`${api}removeStock`, editedItem)
                    await location.reload()
                 }
                // const data = {
                //         info : this.allList[this.currentIndex].buyingList,
                //         date : date
                //     }
                // const res = await axios.post(`${api}editItem`, data)

                // location.reload()
             }
         }
     },
  async mounted() {
      this.loading = true
      const res = await axios.post(`${api}fullList`)
      const data = res.data
      this.allList = res.data
      // sortedList
      await Promise.all(this.allList.map(async (a, x) => {
          a.buyingList.map(c => {
            const foundItem = this.sortedList.find(b => b.name == c.name)
                if(foundItem) {
                    const index = this.sortedList.indexOf(foundItem)
                    this.sortedList[index].q = Number(this.sortedList[index].q)  + Number(c.q)
                    this.sortedList[index].left = Number(this.sortedList[index].left)  + Number(c.left)
                    this.sortedList[index].date.push(a.date) 
                }
                else {
                    this.sortedList.push({ name : c.name, q : c.q, edit : false, left : c.left, date : [a.date] })
                }
          })
      }))
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
     title: "Remove Page"
   }
}

</script>
