  <template>
    <div 
      v-if="isOpen" 
      class="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex justify-end"
      @click.self="$emit('close')"
    >
      <div class="bg-[#FAF8F5] w-full max-w-md h-full shadow-2xl flex flex-col justify-between">
        <!-- Header -->
        <div class="p-6 border-b border-stone-200 flex items-center justify-between">
          <h3 class="font-serif text-xl font-medium text-stone-900">Your Cart ({{ cartLength }})</h3>
          <button 
            @click="$emit('close')"
            class="text-stone-500 hover:text-stone-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-100 transition-colors duration-200 cursor-pointer"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
  
        <!-- Cart Items List -->
        <div class="flex-1 overflow-y-auto p-6 space-y-6">
          <div v-if="cartItems.length === 0" class="text-center py-20 space-y-4">
            <svg class="w-16 h-16 text-stone-300 mx-auto" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <p class="text-stone-500 font-light">Your shopping cart is empty.</p>
            <button 
              @click="$emit('close')"
              class="text-rose-500 text-sm font-semibold tracking-wider uppercase hover:underline cursor-pointer"
            >
              Start Shopping
            </button>
          </div>
  
          <div 
            v-else
            v-for="item in cartItems" 
            :key="item.id"
            class="flex gap-4 bg-white p-4 rounded-xl shadow-xs border border-stone-200/50"
          >
            <!-- Item Thumbnail -->
            <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-lg bg-stone-100" />
  
            <!-- Item Info -->
            <div class="flex-1 flex flex-col justify-between">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-serif font-medium text-stone-900 leading-tight">{{ item.name }}</h4>
                  <p class="text-stone-500 text-xs mt-1">Unit price: ${{ item.price.toFixed(2) }}</p>
                </div>
                
                <!-- Remove entire item button -->
                <button 
                  @click="$emit('clear-product', item.id)"
                  class="text-stone-400 hover:text-rose-500 transition-colors duration-200 p-1 cursor-pointer"
                  title="Remove item"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
  
              <!-- Quantity Controls & Sum -->
              <div class="flex justify-between items-center mt-2">
                <div class="flex items-center border border-stone-200 rounded overflow-hidden bg-stone-50">
                  <button 
                    @click="$emit('remove-from-cart', item.id)"
                    class="px-2 py-1 text-stone-600 hover:bg-stone-200 transition-colors duration-150 cursor-pointer"
                  >
                    -
                  </button>
                  <span class="px-3 py-1 text-xs font-semibold text-stone-800">{{ item.quantity }}</span>
                  <button 
                    @click="$emit('add-to-cart', item)"
                    class="px-2 py-1 text-stone-600 hover:bg-stone-200 transition-colors duration-150 cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <span class="text-sm font-semibold text-stone-900">${{ (item.price * item.quantity).toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Footer -->
        <div class="p-6 border-t border-stone-200 bg-stone-50 space-y-4">
          <div class="flex justify-between items-center text-stone-900">
            <span class="font-medium text-sm">Subtotal</span>
            <span class="font-serif text-xl font-semibold">${{ cartTotal.toFixed(2) }}</span>
          </div>
          <p class="text-[11px] text-stone-400 font-light">Shipping and taxes calculated at checkout.</p>
          <button 
            @click="$emit('checkout')"
            :disabled="cartLength === 0"
            class="w-full bg-stone-900 hover:bg-rose-500 disabled:bg-stone-300 text-white py-3.5 uppercase tracking-widest text-xs font-semibold transition-colors duration-300 rounded shadow-md disabled:cursor-not-allowed cursor-pointer"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  cartItems: {
    type: Array,
    required: true
  },
  cartTotal: {
    type: Number,
    required: true
  },
  cartLength: {
    type: Number,
    required: true
  }
})

defineEmits(['close', 'add-to-cart', 'remove-from-cart', 'clear-product', 'checkout'])
</script>

