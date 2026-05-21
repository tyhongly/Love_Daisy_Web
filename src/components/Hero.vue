<template>
  <section class="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 md:gap-8">
    <!-- Hero Text -->
    <div class="flex-1 text-center md:text-left space-y-6">
      <h1 class="font-serif text-5xl md:text-7xl font-light text-stone-900 tracking-tight leading-[1.1]">
        FOR YOUR <br class="hidden md:inline" />
        <span class="italic text-rose-500 font-normal">LOVED ONE</span>
      </h1>
      <p class="text-stone-500 text-lg md:text-xl font-light tracking-wide max-w-md mx-auto md:mx-0">
        The most beautiful bouquets for any occasion
      </p>
      <div class="pt-4">
        <a href="#bouquets" class="inline-block bg-stone-900 text-white px-8 py-3.5 tracking-widest text-xs uppercase hover:bg-rose-500 transition-colors duration-300 shadow-md">
          Explore Collection
        </a>
      </div>
    </div>

    <!-- Hero Image -->
    <div class="flex-1 w-full relative">
      <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
        <img 
          src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1200&auto=format&fit=crop" 
          alt="Beautiful flower bouquet"
          class="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
        />
        <div class="absolute inset-0 bg-stone-950/10 pointer-events-none"></div>
      </div>
    </div>
  </section>
</template>
