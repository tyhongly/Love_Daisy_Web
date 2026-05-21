<script setup>
const searchQuery = defineModel('searchQuery', { type: String, default: '' })

defineProps({
  cartLength: {
    type: Number,
    required: true
  }
})

defineEmits(['toggle-cart'])
</script>

<template>
  <header class="border-b border-stone-200/60 sticky top-0 bg-[#FAF8F5]/90 backdrop-blur-md z-40">
    <div class="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
      
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2 group">
        <svg class="w-8 h-8 text-rose-500 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3M12 5.25a2.25 2.25 0 00-4.5 0v1.5a2.25 2.25 0 004.5 0v-1.5zm0 9a2.25 2.25 0 00-4.5 0v1.5a2.25 2.25 0 004.5 0v-1.5zm9-4.5a2.25 2.25 0 00-4.5 0v1.5a2.25 2.25 0 004.5 0v-1.5zm0 9a2.25 2.25 0 00-4.5 0v1.5a2.25 2.25 0 004.5 0v-1.5z" />
        </svg>
        <span class="font-serif text-xl font-semibold tracking-wider uppercase text-stone-900">LOVE-DAISY</span>
      </a>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase text-stone-600">
        <a href="#bouquets" class="hover:text-rose-500 transition-colors duration-200">Bouquets</a>
        <a href="#flowers" class="hover:text-rose-500 transition-colors duration-200">Flowers</a>
        <a href="#contacts" class="hover:text-rose-500 transition-colors duration-200">Contacts</a>
      </nav>

      <!-- Right Side Icons & Search -->
      <div class="flex items-center gap-6">
        <!-- Search Bar -->
        <div class="relative hidden sm:block">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search..." 
            class="w-40 md:w-48 bg-transparent border-b border-stone-300 py-1 pr-6 text-sm focus:outline-none focus:border-stone-800 transition-colors duration-300 placeholder-stone-400"
          />
          <svg class="w-4 h-4 text-stone-500 absolute right-0 top-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <!-- Instagram Icon -->
        <a href="https://instagram.com" target="_blank" rel="noopener" class="text-stone-600 hover:text-rose-500 transition-colors duration-200" aria-label="Instagram">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
          </svg>
        </a>

        <!-- Cart Icon with badge -->
        <button 
          @click="$emit('toggle-cart')"
          class="relative text-stone-600 hover:text-rose-500 transition-colors duration-200 cursor-pointer" 
          aria-label="Cart"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span class="absolute -top-2 -right-2 bg-rose-500 text-white font-semibold text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            {{ cartLength }}
          </span>
        </button>
      </div>
    </div>
  </header>
</template>
