<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  theme: {
    type: String,
    default: 'rose', // 'rose' or 'amber'
    validator: (value) => ['rose', 'amber'].includes(value)
  }
})

defineEmits(['quick-view', 'add-to-cart'])

const themeClasses = computed(() => {
  if (props.theme === 'amber') {
    return {
      iconHover: 'hover:bg-amber-600 hover:text-white',
      btnHover: 'hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50/50'
    }
  }
  return {
    iconHover: 'hover:bg-rose-500 hover:text-white',
    btnHover: 'hover:border-rose-400 hover:text-rose-500 hover:bg-rose-50/50'
  }
})
</script>

<template>
  <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
    <!-- Image Frame -->
    <div class="aspect-square bg-stone-100 overflow-hidden relative">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
        <!-- Quick View Button -->
        <button 
          @click="$emit('quick-view', product)"
          class="bg-white text-stone-800 p-2.5 rounded-full shadow-md transition-colors duration-200 cursor-pointer"
          :class="themeClasses.iconHover"
          title="Quick View"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
        <!-- Add to Cart Button (Top hover) -->
        <button 
          @click="$emit('add-to-cart', product)"
          class="bg-white text-stone-800 p-2.5 rounded-full shadow-md transition-colors duration-200 cursor-pointer"
          :class="themeClasses.iconHover"
          title="Add to Cart"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Card Body -->
    <div class="p-5 flex-1 flex flex-col justify-between">
      <div>
        <h3 class="font-serif text-lg font-medium text-stone-800">{{ product.name }}</h3>
        <p class="text-stone-500 mt-1 text-sm font-semibold tracking-wide">${{ product.price.toFixed(2) }}</p>
      </div>
      <!-- Add to Cart Button (Bottom card) -->
      <button 
        @click="$emit('add-to-cart', product)"
        class="mt-4 w-full border border-stone-200 py-2 text-xs uppercase tracking-widest text-stone-600 transition-colors duration-200 rounded cursor-pointer"
        :class="themeClasses.btnHover"
      >
        Add To Cart
      </button>
    </div>
  </div>
</template>
