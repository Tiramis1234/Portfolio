<template>
  <div class="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-4 font-['JetBrains_Mono',monospace]">
    <div class="w-full max-w-5xl bg-[#0d0d0d] text-[#c9d1d9] rounded-[10px] overflow-hidden border border-[#21262d] shadow-[0_0_40px_rgba(56,189,248,0.07)]">
      <div class="bg-[#161b22] px-4 py-[10px] flex items-center gap-2 border-b border-[#21262d]">
        <a href="https://patron.kasperkiewicz.tech/" target="_blank" class="block w-3 h-3 rounded-full bg-[#ff5f56]"></a>
        <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        <span class="text-[#8b949e] text-xs mx-auto">marek@debian: ~/portfolio — bash</span>
      </div>

      <div class="p-5 md:p-6 flex gap-8 flex-wrap">
        <div class="flex flex-col gap-0">
        <pre class="text-[#38bdf8] leading-[1.15] whitespace-pre flex-shrink-0 text-[7px] sm:text-[8px] md:text-[9px]">
 __  __                _     
|  \/  |              | |    
| \  / | __ _ _ __ ___| | __ 
| |\/| |/ _` | '__/ _ \ |/ / 
| |  | | (_| | | |  __/   <  
|_|  |_|\__,_|_|  \___|_|\_\ </pre>
        <pre class="text-[#38bdf8] leading-[1.15] whitespace-pre flex-shrink-0 text-[7px] sm:text-[8px] md:text-[9px]">
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
            <span class="text-[#38bdf8] font-medium min-w-[124px] shrink-0">Name</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#7dd3fc]">Marek Lenarczyk</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#38bdf8] font-medium min-w-[124px] shrink-0">Internship</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#5ac8fa]">BCF Software (2026)</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#38bdf8] font-medium min-w-[124px] shrink-0">University</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#c9d1d9]">Opole University of Technology</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#38bdf8] font-medium min-w-[124px] shrink-0">Focus</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#a78bfa]">DevOps / Cloud (Azure)</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#38bdf8] font-medium min-w-[124px] shrink-0">Status</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#fbbf24]">Junior DevOps Engineer</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#38bdf8] font-medium min-w-[124px] shrink-0">OS</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#c9d1d9]">Debian 12 (bookworm)</span>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#38bdf8] font-medium min-w-[124px] shrink-0">Shell</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <span class="text-[#c9d1d9]">bash</span>
          </div>
          <hr class="border-t border-[#21262d] my-[10px]" />

          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#38bdf8] font-medium min-w-[124px] shrink-0">GitHub</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <a href="https://github.com/Tiramis1234" target="_blank" class="text-[#7dd3fc] no-underline border-b border-[rgba(125,211,252,0.3)] hover:text-[#a5d6ff]">github.com/Tiramis1234</a>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#38bdf8] font-medium min-w-[124px] shrink-0">LinkedIn</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <a href="https://www.linkedin.com/in/marek-lenarczyk-38b19938b/" target="_blank" class="text-[#79c0ff] no-underline border-b border-[rgba(121,192,255,0.3)] hover:text-[#a5d6ff]">linkedin.com/in/marek-lenarczyk</a>
          </div>
          <div class="flex gap-0 text-sm leading-[1.9]">
            <span class="text-[#38bdf8] font-medium min-w-[124px] shrink-0">Download CV</span>
            <span class="text-[#8b949e] mx-1">~</span>
            <a href="/MarekLenarczykCV.pdf" target="_blank" class="text-[#7dd3fc] no-underline border-b border-[rgba(125,211,252,0.3)] hover:text-[#a5d6ff]">cv.pdf</a>
          </div>

          <hr class="border-t border-[#21262d] my-[10px]" />

          <div class="text-[#38bdf8] text-sm font-bold my-3 mb-1 tracking-wider">$ ./skills --list</div>
          <SkillBar label="Docker: Intermediate" />
          <SkillBar label="Kubernetes / Helm: Beginner" />
          <SkillBar label="Terraform / Ansible: Intermediate" />
          <SkillBar label="CI/CD (Git, SonarQube): Intermediate" />
          <SkillBar label="Linux / Bash / Python: Intermediate" />
          <SkillBar label="Azure: Beginner" />
          <SkillBar label="CKA: Beginner" />

          <hr class="border-t border-[#21262d] my-[10px]" />

          <div class="text-[#38bdf8] text-sm font-bold my-3 mb-1 tracking-wider">$ cat tools.txt</div>
          <div class="flex flex-wrap gap-1.5">
            <Tag text="Docker" color="blue" />
            <Tag text="Kubernetes" color="blue" />
            <Tag text="Helm" color="blue" />
            <Tag text="Terraform" color="red" />
            <Tag text="Ansible" color="red" />
            <Tag text="Azure" color="blue" />
            <Tag text="Cloudflare" color="yellow" />
            <Tag text="Git" />
            <Tag text="SonarQube" />
            <Tag text="Bash" />
            <Tag text="Python" color="yellow" />
            <Tag text="Linux" />
          </div>
        </div>
      </div>

      <div class="px-6 pb-3 text-sm cursor-text" ref="scroller" @click="focusInput">
        <div v-for="(entry, i) in history" :key="i" class="mb-2">
          <div v-if="entry.cmd !== null" class="flex flex-wrap gap-1">
            <span class="text-[#38bdf8]">marek@debian</span><span class="text-[#8b949e]">:</span><span class="text-[#7dd3fc]">~/portfolio</span><span class="text-[#8b949e]">$</span>
            <span class="text-[#c9d1d9]">{{ entry.cmd }}</span>
          </div>
          <pre v-if="entry.out" class="whitespace-pre-wrap break-words text-[#c9d1d9] font-['JetBrains_Mono',monospace] text-sm leading-[1.6]" :class="entry.err ? 'text-[#f87171]' : ''">{{ entry.out }}</pre>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-[#38bdf8]">marek@debian</span><span class="text-[#8b949e]">:</span><span class="text-[#7dd3fc]">~/portfolio</span><span class="text-[#8b949e]">$</span>
          <input
            ref="input"
            v-model="line"
            class="flex-1 min-w-0 bg-transparent outline-none text-[#c9d1d9] caret-[#38bdf8] font-['JetBrains_Mono',monospace] text-sm"
            autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="terminal"
            @keydown.enter.prevent="run"
            @keydown.up.prevent="browse(-1)"
            @keydown.down.prevent="browse(1)"
            @keydown.tab.prevent="complete"
            @keydown.ctrl.l.prevent="clear"
          />
        </div>
      </div>

      <div class="bg-[#161b22] px-4 py-1.5 border-t border-[#21262d] flex gap-4 text-xs text-[#8b949e] flex-wrap">
        <div class="flex items-center gap-1"><div class="w-[7px] h-[7px] rounded-full bg-[#38bdf8]"></div>online</div>
        <div class="flex items-center gap-1"><div class="w-[7px] h-[7px] rounded-full bg-[#fbbf24]"></div>CI: passing</div>
        <div class="flex items-center gap-1"><span style="color:#a78bfa">●</span>&nbsp;DevOps</div>
        <div class="flex items-center gap-1">Opole University of Technology © 2026</div>
        <span class="ml-auto">nuxt@4.x</span>
      </div>
    </div>
  </div>
</template>


<script setup>
const cvUrl = '/MarekLenarczykCV.pdf'
const line = ref('')
const history = ref([{ cmd: null, out: 'Type "help" for a list of commands.' }])
const past = ref([])
const pastIdx = ref(0)
const input = ref(null)
const scroller = ref(null)

const files = {
  'about.txt': () => `Marek Lenarczyk - Junior DevOps Engineer
Computer science student (Opole University of Technology) with
DevOps Engineer internship experience. Docker, Kubernetes, Helm,
Terraform, Ansible, CI/CD, Linux and Azure cloud. Preparing for
CKA and Azure Administrator certifications.`,
  'contact.txt': () => `email     marek.lenarczyk2004@gmail.com
phone     +48 880925564
github    github.com/Tiramis1234
linkedin  linkedin.com/in/marek-lenarczyk-38b19938b
website   mlenarczyk.pl`,
}

const commands = {
  help: () => `Available commands:
  help         this list
  about        who I am
  experience   work experience
  skills       technical skills and levels
  tools        tools I use
  education    education
  certs        certifications and courses
  languages    spoken languages
  contact      contact details
  cv           open my CV (PDF)
  github       open GitHub
  linkedin     open LinkedIn
  neofetch     system info
  clear        clear the terminal
  ls / cat     list files / print a file
  whoami, date, echo, history

Tab - autocomplete, Up/Down - history, Ctrl+L - clear`,
  about: () => files['about.txt'](),
  experience: () => `2026  DevOps Engineer      BCF Software   (internship)
2022  IT Specialist        PLEXCOM        (internship)
2021  PLC Programmer       KBA Automatic  (internship)`,
  skills: () => `Docker                      Intermediate
Kubernetes / Helm           Beginner
Terraform / Ansible         Intermediate
CI/CD, Git, SonarQube       Intermediate
Linux / Bash / Python       Intermediate
Cloudflare                  Basic
Azure                       Beginner
CKA                         Beginner`,
  tools: () => 'Docker, Kubernetes, Helm, Terraform, Ansible, Azure, Cloudflare,\nGit, SonarQube, Bash, Python, Linux, Windows, Claude Code, MS Teams, Outline',
  education: () => `2024 - present  Opole University of Technology, B.Sc. Computer Science
2019 - 2024    Tadeusz Kosciuszko Electrical School Complex in Opole
               Programming technician, IT technician`,
  certs: () => `[ ] Certified Kubernetes Administrator (in progress)
[ ] Azure Administrator (in progress)
[x] CCNA: Switching, Routing, and Wireless Essentials (Cisco)`,
  languages: () => 'English C1, German B1, Polish (native)',
  contact: () => files['contact.txt'](),
  whoami: () => 'marek',
  date: () => new Date().toString(),
  neofetch: () => `marek@debian
------------
OS:         Debian GNU/Linux 12 (bookworm)
Shell:      bash
Role:       Junior DevOps Engineer
University: Opole University of Technology
Stack:      Docker, K8s, Terraform, Ansible, Azure`,
  history: () => past.value.map((c, i) => String(i + 1).padStart(3) + '  ' + c).join('\n'),
  ls: () => Object.keys(files).join('  ') + '  MarekLenarczykCV.pdf',
  cv: () => { window.open(cvUrl, '_blank'); return 'Opening MarekLenarczykCV.pdf...' },
  github: () => { window.open('https://github.com/Tiramis1234', '_blank'); return 'Opening GitHub...' },
  linkedin: () => { window.open('https://www.linkedin.com/in/marek-lenarczyk-38b19938b/', '_blank'); return 'Opening LinkedIn...' },
  clear: () => { history.value = []; return null },
}

const names = [...Object.keys(commands), 'cat', 'echo', 'sudo', 'exit']

function exec(raw) {
  const [cmd, ...args] = raw.split(/\s+/)
  if (cmd === 'cat') {
    if (!args[0]) return { out: 'cat: missing operand', err: true }
    const f = files[args[0]]
    return f ? { out: f() } : { out: `cat: ${args[0]}: No such file or directory`, err: true }
  }
  if (cmd === 'echo') return { out: args.join(' ') }
  if (cmd === 'sudo') return { out: 'marek is not in the sudoers file. This incident will be reported.', err: true }
  if (cmd === 'exit') return { out: 'Nowhere to run :) Type "help".' }
  if (commands[cmd]) return { out: commands[cmd]() }
  return { out: `${cmd}: command not found. Type "help".`, err: true }
}

function run() {
  const raw = line.value.trim()
  line.value = ''
  if (!raw) return
  past.value.push(raw)
  pastIdx.value = past.value.length
  const res = exec(raw)
  if (raw === 'clear') return
  history.value.push({ cmd: raw, out: res.out, err: res.err })
  scrollDown()
}

function clear() { history.value = [] }

function browse(dir) {
  if (!past.value.length) return
  pastIdx.value = Math.min(Math.max(pastIdx.value + dir, 0), past.value.length)
  line.value = past.value[pastIdx.value] ?? ''
}

function complete() {
  const [first, second] = line.value.split(/\s+/)
  if (line.value.includes(' ')) {
    if (first !== 'cat') return
    const m = Object.keys(files).filter(f => f.startsWith(second || ''))
    if (m.length === 1) line.value = `cat ${m[0]}`
    return
  }
  const m = names.filter(n => n.startsWith(first))
  if (m.length === 1) line.value = m[0] + ' '
}

function focusInput() {
  if (!window.getSelection()?.toString()) input.value?.focus()
}

function scrollDown() {
  nextTick(() => input.value?.scrollIntoView({ block: 'nearest' }))
}

onMounted(() => {
  input.value?.focus({ preventScroll: true })
})
</script>
