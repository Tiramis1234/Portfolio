<template>
  <div class="min-h-screen bg-[#1e1f22] text-white py-12 px-4 flex flex-col items-center">
    
    <header class="w-full max-w-2xl text-center mb-12">
      <h1 class="text-4xl font-black italic uppercase tracking-tighter">
        Cyber <span class="text-[#d871f3]">Path</span>
      </h1>
      <div class="h-1 w-20 bg-[#d871f3] mx-auto mt-2 shadow-[0_0_15px_#d871f3]"></div>
    </header>

    <div class="w-full max-w-2xl space-y-10">
      
      <section class="bg-[#2d2e32]/50 p-6 rounded-2xl border border-gray-800 flex flex-col items-center">
        <p class="text-[10px] font-mono text-gray-500 uppercase mb-6 tracking-widest text-center w-full italic">
          // platform_activity
        </p>
        <a href="https://tryhackme.com/p/Tiramis" target="_blank" class="block w-full max-w-[320px]">
          <img src="https://tryhackme-badges.s3.amazonaws.com/Tiramis.png" alt="THM Badge" class="w-full rounded-lg border border-gray-700 shadow-xl shadow-black/50" />
        </a>
        <div class="mt-4 flex gap-6 font-mono text-[11px]">
          <span class="text-gray-400">User: <span class="text-[#d871f3]">Tiramis</span></span>
          <span class="text-green-500 animate-pulse font-bold">● Active_Status</span>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-xl font-black italic uppercase tracking-tight text-white border-b border-[#d871f3]/30 pb-2">
          01. Cisco Networking Academy
        </h2>
        
        <div class="grid gap-3">
          <div class="p-4 bg-[#2d2e32]/40 border border-gray-800 rounded-xl flex justify-between items-center">
            <div class="text-left">
              <p class="font-bold text-sm">CCNAv7: Introduction to Networks</p>
              <p class="text-[10px] text-gray-500 font-mono italic">Completed | Cisco v7.0</p>
            </div>
            <span class="px-2 py-1 bg-green-500/10 text-green-500 text-[9px] font-black rounded border border-green-500/20 uppercase">Completed</span>
          </div>

          <div class="p-4 bg-[#2d2e32]/40 border border-gray-800 rounded-xl space-y-2 text-left">
            <div class="flex justify-between items-center">
              <p class="font-bold text-sm text-[#d871f3]">CCNAv7: Switching, Routing, and Wireless</p>
              <span class="text-[#d871f3] text-[9px] font-black uppercase animate-pulse italic">In_Progress</span>
            </div>
            <div class="w-full bg-gray-900 h-1 rounded-full overflow-hidden">
              <div class="bg-[#d871f3] h-full w-1/2 shadow-[0_0_8px_#d871f3]"></div>
            </div>
          </div>

          <div class="p-4 bg-[#2d2e32]/40 border border-gray-800 rounded-xl flex justify-between items-center">
             <p class="font-bold text-sm">Ethical Hacker</p>
             <span class="text-gray-500 text-[9px] font-black uppercase italic tracking-tighter">In_Progress</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 text-left">
          <div class="p-3 bg-[#2d2e32]/20 border border-gray-800 rounded-lg">
            <p class="text-[11px] font-bold text-gray-300 italic">IT Essentials</p>
            <p class="text-[9px] text-gray-600 font-mono uppercase">Certified</p>
          </div>
          <div class="p-3 bg-[#2d2e32]/20 border border-gray-800 rounded-lg">
            <p class="text-[11px] font-bold text-gray-300 italic">Intro to IoT</p>
            <p class="text-[9px] text-gray-600 font-mono uppercase">Certified</p>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-lg font-black italic uppercase tracking-tight text-white border-b border-[#d871f3]/30 pb-2">
          02. Specialized Training
        </h2>
        <div class="bg-[#2d2e32]/30 border border-gray-800 rounded-xl divide-y divide-gray-800 font-mono text-left">
          <div class="p-4 flex items-center gap-3">
            <div class="h-1.5 w-1.5 rounded-full bg-[#d871f3] shadow-[0_0_5px_#d871f3]"></div>
            <span class="text-xs text-gray-400">ING CRC - Cybersecurity technologies</span>
          </div>
          <div class="p-4 flex items-center gap-3">
            <div class="h-1.5 w-1.5 rounded-full bg-[#d871f3]"></div>
            <span class="text-xs text-gray-400">Capgemini CRC - Risk Management</span>
          </div>
          <div class="p-4 flex items-center gap-3">
            <div class="h-1.5 w-1.5 rounded-full bg-[#d871f3] animate-pulse"></div>
            <span class="text-xs text-gray-400">TryHackMe - SOC Level 1 (Blue Team)</span>
          </div>
        </div>
      </section>

      <footer class="pt-10 text-center">
        <NuxtLink to="/" class="text-gray-600 hover:text-white transition font-mono text-[10px] uppercase tracking-widest underline decoration-gray-800 hover:decoration-[#d871f3] underline-offset-8">
          cd .. / back_to_main
        </NuxtLink>
      </footer>

    </div>
  </div>
</template>