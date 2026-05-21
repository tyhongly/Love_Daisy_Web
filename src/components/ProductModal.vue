<template>
  <div 
    v-if="product" 
    class="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full flex flex-col md:flex-row relative">
      <!-- Close Button -->
      <button 
        @click="$emit('close')" 
        class="absolute top-4 right-4 bg-white/80 hover:bg-rose-500 hover:text-white text-stone-800 w-8 h-8 rounded-full flex items-center justify-center shadow transition-colors duration-200 z-10 cursor-pointer"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Product Image -->
      <div class="w-full md:w-1/2 aspect-square md:aspect-auto md:h-96 bg-stone-100">
        <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
      </div>

      <!-- Product Info -->
      <div class="p-8 w-full md:w-1/2 flex flex-col justify-between">
        <div class="space-y-4">
          <span class="text-xs uppercase tracking-widest text-rose-500 font-semibold">Flower Collection</span>
          <h3 class="font-serif text-2xl md:text-3xl text-stone-900">{{ product.name }}</h3>
          <p class="font-serif text-2xl text-stone-800 font-light">${{ product.price.toFixed(2) }}</p>
          <p class="text-stone-500 text-sm font-light leading-relaxed">
            Every arrangement is handcrafted with love by our florists using the freshest blooms available. Perfectly balanced colors and textures to capture your sentiments beautifully.
          </p>
        </div>
        
        <div class="pt-6">
          <button 
            @click="$emit('add-to-cart', product); $emit('close')"
            class="w-full bg-stone-900 hover:bg-rose-500 text-white py-3 uppercase tracking-widest text-xs font-semibold transition-colors duration-300 rounded shadow-md cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
defineProps({
  product: {
    type: Object,
    default: null
  }
})

defineEmits(['close', 'add-to-cart'])
</script>

