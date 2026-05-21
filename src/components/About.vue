<template>
  <section class="bg-[#FAF3E8] py-16 md:py-24 border-y border-stone-200/40">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-16">
      <!-- About Image -->
      <div class="flex-1 w-full">
        <div class="aspect-16/10 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=800&auto=format&fit=crop" 
            alt="Florist working in cozy shop"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- About Text -->
      <div class="flex-1 space-y-6 text-center md:text-left">
        <h2 class="font-serif text-3xl md:text-4xl font-light text-stone-900 leading-tight">
          WELCOME TO <br />
          OUR <span class="italic font-normal text-amber-700">LOVE-DAISY</span>
        </h2>
        <p class="text-stone-600 font-light leading-relaxed text-base md:text-lg">
          We have been working for and 1 year create beautiful bouquets for you. Our store is open 24/7 and we are happy to bring beauty to your life.
        </p>
        <div class="flex flex-wrap justify-center md:justify-start gap-8 pt-2">
          <div>
            <p class="font-serif text-3xl font-light text-amber-800">1+</p>
            <p class="text-xs uppercase tracking-widest text-stone-500 font-medium">Years Active</p>
          </div>
          <div>
            <p class="font-serif text-3xl font-light text-amber-800">24/7</p>
            <p class="text-xs uppercase tracking-widest text-stone-500 font-medium">Service</p>
          </div>
          <div>
            <p class="font-serif text-3xl font-light text-amber-800">10k+</p>
            <p class="text-xs uppercase tracking-widest text-stone-500 font-medium">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
