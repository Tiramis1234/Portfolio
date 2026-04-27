<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center bg-[#1e1f22] text-white overflow-hidden">
    
    <header class="text-center mb-16 px-4">
      <h1 class="text-5xl font-extrabold tracking-tight">
        Marek <span class="text-[#d871f3]">Lenarczyk</span>
      </h1>
      <p class="mt-3 text-xl text-gray-400 font-mono">
        Learning Cybersecurity and Web Development
      </p>
    </header>

    <div class="flex flex-col sm:flex-row items-center gap-8 w-full max-w-4xl px-6">
      
      <NuxtLink to="/cyber" class="w-full sm:flex-1 group">
        <button class="w-full h-16 bg-transparent border-2 border-[#d871f3] hover:bg-[#d871f3]/10 text-[#d871f3] font-bold text-lg rounded-xl transition-all duration-200">
          Cybersecurity
        </button>
      </NuxtLink>

      <div class="w-full sm:flex-[1.2] flex flex-col items-center gap-6">
        <NuxtLink to="/about" class="w-full group">
          <button class="w-full h-24 bg-[#d871f3] hover:bg-[#e18cf7] text-[#1e1f22] font-black text-2xl rounded-xl transition-all duration-200 transform group-hover:scale-105 shadow-[0_0_30px_rgba(216,113,243,0.3)]">
            ABOUT ME
          </button>
        </NuxtLink>
        
        <a href="https://www.youtube.com/watch?v=KSPxHniCtmw&t=2s"class="group flex flex-col items-center gap-1 transition-all duration-300">
          <div class="flex items-center gap-3 text-gray-400 group-hover:text-white">
            <span class="text-lg font-mono font-medium tracking-tight">
              DOWNLOAD_RESUME.PDF
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 animate-bounce group-hover:animate-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
          <div class="w-0 h-[2px] bg-[#d871f3] group-hover:w-full transition-all duration-500 shadow-[0_0_8px_#d871f3]"></div>
        </a>
      </div>

      <NuxtLink to="/projects" class="w-full sm:flex-1 group">
        <button class="w-full h-16 bg-transparent border-2 border-[#d871f3] hover:bg-[#d871f3]/10 text-[#d871f3] font-bold text-lg rounded-xl transition-all duration-200">
          Projects
        </button>
      </NuxtLink>

    </div>

    <footer class="absolute bottom-6 text-sm text-gray-600 font-mono flex gap-4">
      <span>Opole, Poland 2026</span>

    </footer>

  </div>
</template>