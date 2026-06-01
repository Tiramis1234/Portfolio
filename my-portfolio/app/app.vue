<template>
  <div class="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-4 font-['JetBrains_Mono',monospace]">
    <div class="w-full max-w-5xl bg-[#0d0d0d] text-[#c9d1d9] rounded-[10px] overflow-hidden border border-[#21262d] shadow-[0_0_40px_rgba(0,255,70,0.05)]">
      <div class="bg-[#161b22] px-4 py-[10px] flex items-center gap-2 border-b border-[#21262d]">
        <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        <span class="text-[#8b949e] text-xs mx-auto">marek@kali-linux: ~/portfolio — bash</span>
      </div>

      <div class="p-5 md:p-6 flex gap-8 flex-wrap">
        <div class="flex flex-col gap-0">
        <pre class="text-[#00ff46] leading-[1.15] whitespace-pre flex-shrink-0 text-[7px] sm:text-[8px] md:text-[9px]">
 __  __                _     
|  \/  |              | |    
| \  / | __ _ _ __ ___| | __ 
| |\/| |/ _` | '__/ _ \ |/ / 
| |  | | (_| | | |  __/   <  
|_|  |_|\__,_|_|  \___|_|\_\ </pre>
        <pre class="text-[#00ff46] leading-[1.15] whitespace-pre flex-shrink-0 text-[7px] sm:text-[8px] md:text-[9px]">
          _                                         _    
  | |                                       | |   
  | |     ___ _ __   __ _ _ __ ___ _____   _| | __
  | |    / _ \ '_ \ / _` | '__/ __|_  / | | | |/ /
  | |___|  __/ | | | (_| | | | (__ / /| |_| |   < 
  |______\___|_| |_|\__,_|_|  \___/___|\__, |_|\_\
                                         __/ |     
                                        |___/       </pre>
        </div>
        <div class="flex-1 min-w-[260px] flex flex-col gap-0">
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">Imię i Nazwisko</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#56d364]">Marek Lenarczyk</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">Rola</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#79c0ff]">Cybersecurity Student</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">Kierunek</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#5ac8fa]">Informatyka</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">Uczelnia</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#c9d1d9]">Politechnika Opolska</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">Specjalizacja</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#ff6b6b]">Red Team / Pen Testing</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">Status</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#ffd866]">Student (aktywny)</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">OS</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#c9d1d9]">Kali Linux 2024.3</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">Shell</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#c9d1d9]">zsh + oh-my-zsh</span>
          </div>
          <hr class="border-t border-[#21262d] my-[10px]" />

          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">GitHub</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <a href="https://github.com/Tiramis1234" target="_blank" class="text-[#56d364] no-underline border-b border-[rgba(86,211,100,0.3)] hover:text-[#a5d6ff]">github.com/Tiramis1234</a>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">TryHackMe</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <a href="https://tryhackme.com/p/Tiramis" target="_blank" class="text-[#ff6b6b] no-underline border-b border-[rgba(255,107,107,0.3)] hover:text-[#a5d6ff]">tryhackme.com/p/Tiramis</a>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">Certyfikaty</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <a href="https://www.credly.com" target="_blank" class="text-[#ffd866] no-underline border-b border-[rgba(255,216,102,0.3)] hover:text-[#a5d6ff]">credly.com/marek-lenarczyk</a>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">LinkedIn</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <a href="https://www.linkedin.com/feed/" target="_blank" class="text-[#79c0ff] no-underline border-b border-[rgba(121,192,255,0.3)] hover:text-[#a5d6ff]">linkedin.com/in/marek-lenarczyk</a>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#00ff46] font-medium min-w-[124px] shrink-0">Download CV</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <a href="/MarekLenarczykCV.pdf" target="_blank" class="text-[#56d364] no-underline border-b border-[rgba(86,211,100,0.3)] hover:text-[#a5d6ff]">cv.pdf</a>
          </div>

          <hr class="border-t border-[#21262d] my-[10px]" />

          <div class="text-[#00ff46] text-sm font-bold my-3 mb-1 tracking-wider">$ ./skills --list</div>
          <SkillBar label="Penetration Test: Learning" />
          <SkillBar label="Network Recon: Learning" />
          <SkillBar label="Python: Learning" />
          <SkillBar label="Web Exploit: Learning" />
          <SkillBar label="OSINT: Learning" />
          <SkillBar label="CTF Challenges: Beginner" />

          <hr class="border-t border-[#21262d] my-[10px]" />

          <div class="text-[#00ff46] text-sm font-bold my-3 mb-1 tracking-wider">$ cat tools.txt</div>
          <div class="flex flex-wrap gap-1.5">
            <Tag text="Metasploit" color="red" />
            <Tag text="Burp Suite" color="red" />
            <Tag text="Nmap" color="red" />
            <Tag text="SQLMap" color="red" />
            <Tag text="BloodHound" color="red" />
            <Tag text="Hydra" color="red" />
            <Tag text="Python 3" color="yellow" />
            <Tag text="Wireshark" />
            <Tag text="Ghidra" />
            <Tag text="Hashcat" />
            <Tag text="John the Ripper" />
          </div>
        </div>
      </div>

      <div class="px-6 text-sm text-[#8b949e] flex items-center gap-1 mb-1">
        <span class="text-[#00ff46]">┌──(</span><span class="text-[#56d364]">marek㉿kali</span><span class="text-[#00ff46]">)-[</span><span class="text-[#c9d1d9]">~/portfolio</span><span class="text-[#00ff46]">]</span>
      </div>
      <div class="px-6 text-sm text-[#8b949e] flex items-center gap-1 mb-4">
        <span class="text-[#00ff46]">└─$</span>&nbsp;<span class="text-[#c9d1d9]">./run_portfolio.sh</span><span class="inline-block w-[9px] h-3.5 bg-[#00ff46] align-middle ml-0.5 animate-pulse"></span>
      </div>

      <div class="bg-[#161b22] px-4 py-1.5 border-t border-[#21262d] flex gap-4 text-xs text-[#8b949e] flex-wrap">
        <div class="flex items-center gap-1"><div class="w-[7px] h-[7px] rounded-full bg-[#00ff46]"></div>online</div>
        <div class="flex items-center gap-1"><div class="w-[7px] h-[7px] rounded-full bg-[#ffd866]"></div>CTF: aktywne</div>
        <div class="flex items-center gap-1"><span style="color:#ff6b6b">●</span>&nbsp;Red Team</div>
        <div class="flex items-center gap-1">Politechnika Opolska © 2025</div>
        <span class="ml-auto">nuxt@3.x</span>
      </div>
    </div>
  </div>
</template>
