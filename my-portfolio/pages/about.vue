<template>
  <div class="min-h-screen bg-[#1e1f22] text-white py-20 px-6 font-sans">
    
    <section class="mb-24">
      <div class="text-center mb-12">
        <h2 class="text-xs font-mono tracking-[0.3em] text-gray-500 uppercase mb-2">My Journey</h2>
        <h1 class="text-4xl font-black italic uppercase text-[#d871f3]">History_Log</h1>
      </div>
      <HistoryTimeLine />
    </section>

    <section class="max-w-4xl mx-auto">
      <div class="flex items-center gap-4 mb-12">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent to-gray-800"></div>
        <h2 class="text-3xl font-black italic uppercase text-[#d871f3] tracking-tighter">Experience</h2>
        <div class="h-px flex-1 bg-gradient-to-l from-transparent to-gray-800"></div>
      </div>

      <div class="grid gap-6">
        <div class="group relative p-6 rounded-2xl bg-[#2d2e32]/30 border border-gray-800 hover:border-[#d871f3]/50 transition-all duration-300">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 class="text-xl font-bold text-white group-hover:text-[#d871f3] transition-colors">IT Specialist</h3>
              <p class="text-gray-400 font-mono text-sm">PLEXCOM</p>
            </div>
            <div class="text-right">
              <span class="px-3 py-1 rounded-full bg-[#d871f3]/10 text-[#d871f3] text-xs font-bold border border-[#d871f3]/20">
                internship 2023
              </span>
            </div>
            </div>
          </div>
        </div>


        <div class="grid gap-6">
        <div class="group relative p-6 rounded-2xl bg-[#2d2e32]/30 border border-gray-800 hover:border-[#d871f3]/50 transition-all duration-300">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 class="text-xl font-bold text-white group-hover:text-[#d871f3] transition-colors">PLC Programmer</h3>
              <p class="text-gray-400 font-mono text-sm">Kba Automatic</p>
            </div>
            <div class="text-right">
              <span class="px-3 py-1 rounded-full bg-[#d871f3]/10 text-[#d871f3] text-xs font-bold border border-[#d871f3]/20">
                internship 2022
              </span>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-2xl border border-dashed border-gray-800 flex items-center justify-center group hover:bg-[#d871f3]/5 transition-all">
          <p class="text-gray-600 font-mono text-xs group-hover:text-gray-400">
            [ waiting_for_next_challenge.exe ]
          </p>
        </div>
      </div>
    </section>

    <div class="mt-20 text-center">
      <NuxtLink to="/" class="group inline-flex items-center gap-2 text-gray-500 hover:text-white transition-all font-mono text-sm">
        <span class="group-hover:-translate-x-1 transition-transform">←</span> 
        cd .. / home
      </NuxtLink>
    </div>

  </div>
</template>