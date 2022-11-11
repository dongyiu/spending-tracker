<template>

<div class="bg-gray-800 relative overflow-hidden h-screen">
    <img src="/images/landscape/5.svg" class="absolute h-full w-full object-cover"/>
    <div class="inset-0 bg-black opacity-25 absolute">
    </div>
    <!-- <header class="absolute top-0 left-0 right-0 z-20">
        <nav class="container mx-auto px-6 md:px-12 py-4">
            <div class="md:flex justify-between items-center">
                <div class="flex justify-between items-center">
                    <a href="#" class="text-white">
                        <svg class="w-8 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 16.16 12.57">
                            <defs>
                            </defs>
                            <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z">
                            </path>
                            <path d="M16.16 5.82H0L8.08 0l8.08 5.82z">
                            </path>
                        </svg>
                    </a>
                    <div class="md:hidden">
                        <button class="text-white focus:outline-none">
                            <svg class="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="hidden md:flex items-center">
                    <a @click="add=true" class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300" data-modal-toggle="defaultModal">
                        Add
                    </a>
                    <a @click="edit = !edit" class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                        Edit
                    </a>
                    <a @click="remove = !remove" class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                        Remove
                    </a>
                </div>
            </div>
        </nav>
    </header> -->
    <!-- <div class="container m-auto justify-center relative z-10 flex items-center xl:py-40"> -->
      <!-- Navbar -->
    <div
      class="w-full text-gray-100 bg-gray-800 h-17 fixed top-0 animated z-40"
      x-bind:class='{ "bg-black shadow-lg": !atTop }'
    >
      <div
        x-data="{ open: false }"
        class="flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:justify-between md:flex-row"
      >
        <div class="p-4 flex flex-row items-center justify-between">
          <!-- Button Mobile Nav -->
          <button
            class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <span class="text-lg text-primary"
              ><i :class="!open ? 'fa fa-angle-up' : 'fa fa-angle-down' "></i
            ></span>
          </button>
          <!-- End Button Mobile Nav -->
        </div>
        <!-- Navbar Mobile  -->
        <nav
          class="flex-col flex-grow pb-4 bg-gray-800 shadow-lg rounded-b flex"
          :class="{ hidden: open }"
        >
          <a @click="addS()"
            class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-pink-200 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >Add</a
          >
          <a @click="editS()"
          class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-pink-200 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >Edit</a
        >
        <a @click="removeS()"
        class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-pink-200 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        >Remove</a
      >
        </nav>
        <!-- End Navbar Mobile -->

        <nav class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row bg-gray-800">
        <a  @click="add=true" class="flex items-center px-3 py-1 mt-2 text-lg font-semibold text-white rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-pink-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Add</a>
        <a  @click="edit = !edit" class="flex items-center px-3 py-1 mt-2 text-lg font-semibold text-white rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-pink-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Edit</a>
        <a  @click="remove = !remove" class="flex items-center px-3 py-1 mt-2 text-lg font-semibold text-white rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-pink-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Remove</a>

          
        </nav>
      </div>
    </div>
    <!-- End Navbar -->
    <div class="container mx-auto px-6 md:px-12 justify-center relative z-10 flex items-center py-32 xl:py-40">
      <div v-show="add" class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800">
        <div class="bg-white rounded-lg w-1/2">
          <div class="flex flex-col items-start p-4">
            <div class="flex items-center w-full">
              <div class="text-gray-900 font-medium text-lg">Add Stock</div>
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
        <!-- <table :class="{ shake: edit }" class="table-layout: auto table p-4 bg-white shadow rounded-lg">
          <thead>
              <tr>
                  <th v-show="remove" class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      
                  </th>
                  <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      #
                  </th>
                  <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      Item
                  </th>
                  <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      Quantity
                  </th>
                  <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                      Price
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr class="text-gray-700" v-for="(a, x) in buyingList" :key="x">
                  <td v-show="remove" class="border p-4 dark:border-dark-5">
                      <button @click="buyingList = buyingList.filter(a => a!= buyingList[x])" type="button" class="bg-white rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                  </td>
                  <td class="border p-4 dark:border-dark-5">
                      {{x + 1}}
                  </td>
                  <td class="border p-4 dark:border-dark-5">
                      <input v-model="buyingList[x].name" :disabled='!edit'>
                  </td>
                  <td class="border p-4 dark:border-dark-5">
                      <input v-model="buyingList[x].q" :disabled='!edit'>
                  </td>
                  <td class="border p-4 dark:border-dark-5">
                      <input v-model="buyingList[x].price" :disabled='!edit'>
                  </td>
              </tr>
          </tbody>
        </table> -->
    <table v-show="!add" :class="{ shake: edit }" class="bg-white min-w-full border-collapse block md:table">
		<thead  class="block md:table-header-group md:w-600">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class=" p-2 text-black-400 font-bold md:border md:border-grey-500 text-left block md:table-cell">#</th>
				<th class=" p-2 text-black-400 font-bold md:border md:border-grey-500 text-left block md:table-cell">Item</th>
				<th class=" p-2 text-black-400 font-bold md:border md:border-grey-500 text-left block md:table-cell">Quantity</th>
				<th class=" p-2 text-black-400 font-bold md:border md:border-grey-500 text-left block md:table-cell">Price</th>
				<th v-show="remove" class="p-2 text-black-400 font-bold md:border md:border-grey-500 text-left block md:table-cell"></th>
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
      <!-- <tr class="text-gray-700" v-for="(a, x) in buyingList" :key="x"> -->
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row" v-for="(a, x) in buyingList" :key="x">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">
        #</span>
        {{x + 1}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">
        Item</span>
        <input v-model="buyingList[x].name" :disabled='!edit'></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">
        Quantity</span>
        <input v-model="buyingList[x].q" :disabled='!edit'></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">
        Price</span>
        <input v-model="buyingList[x].price" :disabled='!edit'></td>
        <td v-show="remove" class="p-1 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>
        <button @click="buyingList = buyingList.filter(a => a!= buyingList[x])" type="button" class="bg-white rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>                                  
        </td>
			</tr>
		</tbody>
	</table>
    </div>
</div>

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
export default {
  data () {
    return {
      buyingList : [{ name : 'pig', q : 2, price : 300 }],
      add : false,
      blank : {},
      edit : false,
      disabled: false,
      remove: false,
      dropdown : false,
      open: true,
    }
  },
  methods : {
      addItem() {
      this.buyingList.push({ name : this.blank.name, q : this.blank.q, price : this.blank.price })
      this.add = false
      this.blank = {}
    },
    warnDisabled() {
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
      }, 1000)
    },
    addS() {
      this.add = true
      this.open = true
    },
    editS() {
      this.edit = !this.edit
      this.open = true
    },
    removeS() {
      this.remove = !this.remove
      this.open = true
    },
  },
  head: {
     link: [
       {
        rel : 'stylesheet',
        href : 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
       },
     ],
     meta: [
     ],
     title: "Home Page"
   }
  
}
</script>
