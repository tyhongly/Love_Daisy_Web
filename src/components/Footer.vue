<template>
  <footer id="contacts" class="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
      
      <!-- Brand -->
      <div class="space-y-4">
        <span class="font-serif text-2xl font-light text-white tracking-widest uppercase">Love Daisy</span>
        <p class="text-stone-400 font-light text-sm leading-relaxed max-w-sm">
          Beautifully crafted bouquets and fresh flowers to brighten any special day or bring elegance to your home space.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="space-y-4">
        <h3 class="font-serif text-lg text-white font-medium">Quick Links</h3>
        <ul class="space-y-2 text-sm font-light">
          <li><a href="#bouquets" class="hover:text-rose-400 transition-colors duration-200">Our Bouquets</a></li>
          <li><a href="#flowers" class="hover:text-rose-400 transition-colors duration-200">Our Flowers</a></li>
          <li><a href="#" class="hover:text-rose-400 transition-colors duration-200">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-rose-400 transition-colors duration-200">Terms of Service</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="space-y-4">
        <h3 class="font-serif text-lg text-white font-medium">Contact Us</h3>
        <ul class="space-y-2 text-sm font-light text-stone-400">
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (+855) 886-087-350
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            lovedaisy@gmail.com
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            742 Evergreen Terrace, Cozy Ville
          </li>
        </ul>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
      &copy; {{ new Date().getFullYear() }} Just Bloom. All rights reserved.
    </div>
  </footer>
</template>
