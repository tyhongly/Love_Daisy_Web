<template>
  <div class="min-h-screen bg-[#FAF8F5] text-stone-800 antialiased font-sans selection:bg-rose-200">
    
    <!-- HEADER / NAVIGATION -->
    <Navbar 
      v-model:searchQuery="searchQuery" 
      :cartLength="cart.length" 
      @toggle-cart="isCartOpen = true" 
    />

    <!-- HERO SECTION -->
    <Hero />

    <!-- COZY SHOP / ABOUT SECTION -->
    <About />

    <!-- BOUQUETS SECTION (Pink Theme) -->
    <section id="bouquets" class="bg-[#FCD8DB]/40 py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16 space-y-2">
          <h2 class="font-serif text-3xl md:text-5xl font-light text-stone-900 tracking-wide uppercase">
            Our Bouquets
          </h2>
          <div class="w-16 h-[2px] bg-rose-300 mx-auto"></div>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard 
            v-for="item in displayedBouquets" 
            :key="item.id"
            :product="item"
            theme="rose"
            @quick-view="selectProduct"
            @add-to-cart="addToCart"
          />
        </div>

        <!-- View More Button -->
        <div v-if="filteredBouquets.length > 4" class="text-center mt-12 md:mt-16">
          <button 
            v-if="displayedBouquetsLimit < filteredBouquets.length"
            @click="displayedBouquetsLimit = Math.min(displayedBouquetsLimit + 4, filteredBouquets.length)"
            class="border border-stone-800 hover:bg-stone-900 hover:text-white text-stone-800 px-8 py-3 uppercase tracking-widest text-xs font-semibold transition-colors duration-300 cursor-pointer"
          >
            View More Bouquets
          </button>
          <button 
            v-else
            @click="displayedBouquetsLimit = 4"
            class="border border-stone-800 hover:bg-stone-900 hover:text-white text-stone-800 px-8 py-3 uppercase tracking-widest text-xs font-semibold transition-colors duration-300 cursor-pointer"
          >
            Show Less Bouquets
          </button>
        </div>

      </div>
    </section>

    <!-- FLOWERS SECTION (Beige Theme) -->
    <section id="flowers" class="bg-[#FAF3E8]/70 py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16 space-y-2">
          <h2 class="font-serif text-3xl md:text-5xl font-light text-stone-900 tracking-wide uppercase">
            Our Flowers
          </h2>
          <div class="w-16 h-[2px] bg-amber-400 mx-auto"></div>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard 
            v-for="item in displayedFlowers" 
            :key="item.id"
            :product="item"
            theme="amber"
            @quick-view="selectProduct"
            @add-to-cart="addToCart"
          />
        </div>

        <!-- View More Button -->
        <div v-if="filteredFlowers.length > 4" class="text-center mt-12 md:mt-16">
          <button 
            v-if="displayedFlowersLimit < filteredFlowers.length"
            @click="displayedFlowersLimit = Math.min(displayedFlowersLimit + 4, filteredFlowers.length)"
            class="border border-stone-800 hover:bg-stone-900 hover:text-white text-stone-800 px-8 py-3 uppercase tracking-widest text-xs font-semibold transition-colors duration-300 cursor-pointer"
          >
            View More Flowers
          </button>
          <button 
            v-else
            @click="displayedFlowersLimit = 4"
            class="border border-stone-800 hover:bg-stone-900 hover:text-white text-stone-800 px-8 py-3 uppercase tracking-widest text-xs font-semibold transition-colors duration-300 cursor-pointer"
          >
            Show Less Flowers
          </button>
        </div>

      </div>
    </section>

    <!-- FOOTER / CONTACTS -->
    <Footer />

    <!-- PRODUCT DETAIL MODAL (Quick View) -->
    <ProductModal 
      :product="selectedProduct" 
      @close="closeModal"
      @add-to-cart="addToCart"
    />

    <!-- CART SIDEBAR / DRAWER -->
    <CartSidebar 
      :isOpen="isCartOpen"
      :cartItems="cartItems"
      :cartTotal="cartTotal"
      :cartLength="cart.length"
      @close="isCartOpen = false"
      @add-to-cart="addToCart"
      @remove-from-cart="removeFromCart"
      @clear-product="clearProductFromCart"
      @checkout="checkout"
    />

  </div>
</template>


<script setup>
import { ref, computed } from 'vue'

// Import components
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import ProductCard from './components/ProductCard.vue'
import ProductModal from './components/ProductModal.vue'
import CartSidebar from './components/CartSidebar.vue'
import Footer from './components/Footer.vue'

// State for Cart, Search, and Modals
const cart = ref([])
const searchQuery = ref('')
const selectedProduct = ref(null) // For viewing product details modal
const isCartOpen = ref(false) // Toggle Cart Drawer

// Data for Bouquets Section (Pink background)
const bouquets = ref([
  {
    id: 'b1',
    name: 'Bouquet №1',
    price: 30.00,
    image: 'image/demo_Lili.jpg'
  },  
  {
    id: 'b2',
    name: 'Bouquet №2',
    price: 30.00,
    image: 'image/Bouquet2.jpg'
  },  
  {
    id: 'b3',
    name: 'Bouquet №3',
    price: 30.00,
    image: 'image/Bouquet1.jpg'
  },  
  {
    id: 'b4',
    name: 'Bouquet №4',
    price: 30.00,
    image: 'image/floral.jpg'
  },  
  {
    id: 'b5',
    name: 'Velvet Rose Bouquet',
    price: 45.00,
    image: 'image/bouquet.jpg'
  },  
  {
    id: 'b6',
    name: 'Peony Dreams Bouquet',
    price: 50.00,
    image: 'image/Gerbera Daisies.jpg'
  },  
  {
    id: 'b7',
    name: 'Lyli\'s Whisper Lilies',
    price: 40.00,
    image: 'image/Mixed_Garden.jpg'
  },  
  {
    id: 'b8',
    name: 'Midnight Rose',
    price: 48.00,
    image: 'image/Daisy.jpg'
  },  
  {
    id: 'b9',
    name: 'Lavender Bliss',
    price: 35.00,
    image: 'image/velvet_rose_bouquet_1778698925258.png'
    
  },  
  {
    id: 'b10',
    name: 'Baby Breath Bouquet',
    price: 28.00,
    image: 'image/Baby_Breath.jpg'
  },  
  {
    id: 'b11',
    name: 'Gerbera Daisies Bouquet',
    price: 32.00,
    image: 'image/peony_dreams_bouquet_1778699157226.png'
  },  
  {
    id: 'b12',
    name: 'Mixed Garden Bouquet',
    price: 38.00,    
    image: 'image/lylis_whisper_lilies_1778699117796.png'
  }
])

// Data for Flowers Section (Beige background)
const flowers = ref([
  {
    id: 'f1',
    name: 'Flower Bouquet №1',
    price: 25.00,
    image: 'image/White_Tulip.jpg'
  },  
  {
    id: 'f2',
    name: 'Flower Bouquet №2',
    price: 28.00,
    image: 'image/Yellow_Tulip.jpg'
  },  
  {
    id: 'f3',
    name: 'Flower Bouquet №3',
    price: 22.00,
    image: 'image/Tulip_flower2.jpg'
  },  
  {
    id: 'f4',
    name: 'Flower Bouquet №4',
    price: 32.00,
    image: 'image/Pink_Tulip.jpg'
  },  
  {
    id: 'f5',
    name: 'Camellia Flower',
    price: 15.00,
    image: 'image/Camellia_flower.jpg'
  },  
  {
    id: 'f6',
    name: 'Cherry Blossom Flower',
    price: 18.00,
    image: 'image/Cherry_Blossom_flower.jpg'
  },  
  {
    id: 'f7',
    name: 'Dahlia Flower',
    price: 12.00,
    image: 'image/Dahlia_flower.jpg'
  },  
  {
    id: 'f8',
    name: 'Daisy Flower',
    price: 10.00,
    image: 'image/Daisy_flower.jpg'
  },  
  {
    id: 'f9',
    name: 'Jasmine Flower',
    price: 14.00,
    image: 'image/Jasmine_flower.jpg'
  },  
  {
    id: 'f10',
    name: 'Lavender Flower',
    price: 16.00,
    image: 'image/Lavender_flower.jpg'
  },  
  {
    id: 'f11',
    name: 'Lotus Flower',
    price: 20.00,
    image: 'image/Lotus_flower.jpg'
  },  
  {
    id: 'f12',
    name: 'Peony Flower',
    price: 22.00,    
    image: 'image/Peony_flower.jpg'
  }
])

// --- Cart Logic ---

// Group cart items to display quantity for each unique item
const cartItems = computed(() => {
  const groups = {}
  cart.value.forEach(item => {
    if (!groups[item.id]) {
      groups[item.id] = { ...item, quantity: 0 }
    }
    groups[item.id].quantity++
  })
  return Object.values(groups)
})

// Calculate total cart price
const cartTotal = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price, 0)
})

// Add an item to the cart
function addToCart(product) {
  cart.value.push(product)
}

// Decrease item quantity or remove if it drops to 0
function removeFromCart(productId) {
  const index = cart.value.findIndex(item => item.id === productId)
  if (index !== -1) {
    cart.value.splice(index, 1)
  }
}

// Completely clear all quantities of a product from the cart
function clearProductFromCart(productId) {
  cart.value = cart.value.filter(item => item.id !== productId)
}

// Clear entire cart
function checkout() {
  if (cart.value.length === 0) return
  alert('Thank you for your purchase! Your order is being processed.')
  cart.value = []
  isCartOpen.value = false
}

// --- Product Modal Logic ---
function selectProduct(product) {
  selectedProduct.value = product
}

function closeModal() {
  selectedProduct.value = null
}

// --- Search Filter Logic ---
const filteredBouquets = computed(() => {
  if (!searchQuery.value) return bouquets.value
  return bouquets.value.filter(item => 
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const filteredFlowers = computed(() => {
  if (!searchQuery.value) return flowers.value
  return flowers.value.filter(item => 
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// --- Pagination / Limit Logic ---
const displayedBouquetsLimit = ref(4)
const displayedFlowersLimit = ref(4)

const displayedBouquets = computed(() => {
  return filteredBouquets.value.slice(0, displayedBouquetsLimit.value)
})

const displayedFlowers = computed(() => {
  return filteredFlowers.value.slice(0, displayedFlowersLimit.value)
})  
</script>


<style scoped>
  html {
      scroll-behavior: smooth;
    }
</style>