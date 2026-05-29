# export default function IndieStudioWebsite() {

# &#x20; const apps = \[

# &#x20;   {

# &#x20;     name: 'ReplyFlow',

# &#x20;     description: 'AI-powered social and dating reply assistant for modern conversations.',

# &#x20;     status: 'Coming Soon',

# &#x20;   },

# &#x20;   {

# &#x20;     name: 'Slangy',

# &#x20;     description: 'Learn real American slang and daily English expressions with AI practice.',

# &#x20;     status: 'Available Soon',

# &#x20;   },

# &#x20;   {

# &#x20;     name: 'FocusFlow',

# &#x20;     description: 'Minimal productivity tools built for creators, students, and remote workers.',

# &#x20;     status: 'In Development',

# &#x20;   },

# &#x20; ];

# 

# &#x20; return (

# &#x20;   <div className="min-h-screen bg-white text-black">

# &#x20;     {/\* Navigation \*/}

# &#x20;     <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">

# &#x20;       <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

# &#x20;         <div>

# &#x20;           <h1 className="text-xl font-semibold tracking-tight">Northstar Studio</h1>

# &#x20;         </div>

# 

# &#x20;         <nav className="hidden gap-8 text-sm md:flex">

# &#x20;           <a href="#apps" className="transition hover:opacity-60">

# &#x20;             Apps

# &#x20;           </a>

# &#x20;           <a href="#about" className="transition hover:opacity-60">

# &#x20;             About

# &#x20;           </a>

# &#x20;           <a href="#privacy" className="transition hover:opacity-60">

# &#x20;             Privacy

# &#x20;           </a>

# &#x20;           <a href="#contact" className="transition hover:opacity-60">

# &#x20;             Contact

# &#x20;           </a>

# &#x20;         </nav>

# &#x20;       </div>

# &#x20;     </header>

# 

# &#x20;     {/\* Hero \*/}

# &#x20;     <section className="mx-auto max-w-6xl px-6 py-28">

# &#x20;       <div className="max-w-3xl">

# &#x20;         <div className="mb-6 inline-flex rounded-full border border-neutral-300 px-4 py-1 text-sm text-neutral-600">

# &#x20;           Independent App Studio

# &#x20;         </div>

# 

# &#x20;         <h2 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">

# &#x20;           Simple apps.

# &#x20;           <br />

# &#x20;           Built for real life.

# &#x20;         </h2>

# 

# &#x20;         <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">

# &#x20;           We create lightweight AI-powered apps focused on productivity,

# &#x20;           communication, learning, and everyday digital tools.

# &#x20;         </p>

# 

# &#x20;         <div className="mt-10 flex flex-wrap gap-4">

# &#x20;           <a

# &#x20;             href="#apps"

# &#x20;             className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"

# &#x20;           >

# &#x20;             Explore Apps

# &#x20;           </a>

# 

# &#x20;           <a

# &#x20;             href="#contact"

# &#x20;             className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100"

# &#x20;           >

# &#x20;             Contact

# &#x20;           </a>

# &#x20;         </div>

# &#x20;       </div>

# &#x20;     </section>

# 

# &#x20;     {/\* Apps \*/}

# &#x20;     <section id="apps" className="border-t border-neutral-200 bg-neutral-50">

# &#x20;       <div className="mx-auto max-w-6xl px-6 py-24">

# &#x20;         <div className="mb-14">

# &#x20;           <p className="mb-3 text-sm uppercase tracking-\[0.2em] text-neutral-500">

# &#x20;             Apps

# &#x20;           </p>

# &#x20;           <h3 className="text-4xl font-semibold tracking-tight">

# &#x20;             Our Products

# &#x20;           </h3>

# &#x20;         </div>

# 

# &#x20;         <div className="grid gap-6 md:grid-cols-3">

# &#x20;           {apps.map((app) => (

# &#x20;             <div

# &#x20;               key={app.name}

# &#x20;               className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"

# &#x20;             >

# &#x20;               <div className="mb-5 inline-flex rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-500">

# &#x20;                 {app.status}

# &#x20;               </div>

# 

# &#x20;               <h4 className="text-2xl font-semibold tracking-tight">

# &#x20;                 {app.name}

# &#x20;               </h4>

# 

# &#x20;               <p className="mt-4 leading-7 text-neutral-600">

# &#x20;                 {app.description}

# &#x20;               </p>

# 

# &#x20;               <button className="mt-8 rounded-2xl border border-neutral-300 px-4 py-2 text-sm transition hover:bg-neutral-100">

# &#x20;                 Learn More

# &#x20;               </button>

# &#x20;             </div>

# &#x20;           ))}

# &#x20;         </div>

# &#x20;       </div>

# &#x20;     </section>

# 

# &#x20;     {/\* About \*/}

# &#x20;     <section id="about">

# &#x20;       <div className="mx-auto max-w-4xl px-6 py-24">

# &#x20;         <p className="mb-3 text-sm uppercase tracking-\[0.2em] text-neutral-500">

# &#x20;           About

# &#x20;         </p>

# 

# &#x20;         <h3 className="text-4xl font-semibold tracking-tight">

# &#x20;           Built with simplicity in mind.

# &#x20;         </h3>

# 

# &#x20;         <p className="mt-8 text-lg leading-9 text-neutral-600">

# &#x20;           Northstar Studio is an independent software studio focused on

# &#x20;           creating clean, useful, and privacy-conscious applications for

# &#x20;           everyday users.

# &#x20;         </p>

# 

# &#x20;         <p className="mt-6 text-lg leading-9 text-neutral-600">

# &#x20;           Our apps are designed to be fast, lightweight, intuitive, and easy

# &#x20;           to use — without unnecessary complexity.

# &#x20;         </p>

# &#x20;       </div>

# &#x20;     </section>

# 

# &#x20;     {/\* Privacy Policy \*/}

# &#x20;     <section id="privacy" className="border-t border-neutral-200 bg-neutral-50">

# &#x20;       <div className="mx-auto max-w-4xl px-6 py-24">

# &#x20;         <p className="mb-3 text-sm uppercase tracking-\[0.2em] text-neutral-500">

# &#x20;           Privacy Policy

# &#x20;         </p>

# 

# &#x20;         <h3 className="text-4xl font-semibold tracking-tight">

# &#x20;           Your privacy matters.

# &#x20;         </h3>

# 

# &#x20;         <div className="mt-10 space-y-8 text-neutral-700">

# &#x20;           <div>

# &#x20;             <h4 className="mb-2 text-xl font-semibold">Information We Collect</h4>

# &#x20;             <p className="leading-8">

# &#x20;               Our apps may collect limited technical information such as

# &#x20;               device type, app usage analytics, crash reports, and account

# &#x20;               information required for authentication.

# &#x20;             </p>

# &#x20;           </div>

# 

# &#x20;           <div>

# &#x20;             <h4 className="mb-2 text-xl font-semibold">AI Services</h4>

# &#x20;             <p className="leading-8">

# &#x20;               Some applications may use third-party AI providers to process

# &#x20;               user requests and generate responses. User content is processed

# &#x20;               only to provide app functionality.

# &#x20;             </p>

# &#x20;           </div>

# 

# &#x20;           <div>

# &#x20;             <h4 className="mb-2 text-xl font-semibold">Analytics</h4>

# &#x20;             <p className="leading-8">

# &#x20;               We may use analytics tools such as Firebase Analytics or Google

# &#x20;               Play services to improve app stability and user experience.

# &#x20;             </p>

# &#x20;           </div>

# 

# &#x20;           <div>

# &#x20;             <h4 className="mb-2 text-xl font-semibold">Data Security</h4>

# &#x20;             <p className="leading-8">

# &#x20;               We take reasonable measures to protect user information and do

# &#x20;               not sell personal data to advertisers.

# &#x20;             </p>

# &#x20;           </div>

# 

# &#x20;           <div>

# &#x20;             <h4 className="mb-2 text-xl font-semibold">Contact</h4>

# &#x20;             <p className="leading-8">

# &#x20;               For privacy-related questions, please contact:

# &#x20;               <br />

# &#x20;               support@northstarstudio.dev

# &#x20;             </p>

# &#x20;           </div>

# &#x20;         </div>

# &#x20;       </div>

# &#x20;     </section>

# 

# &#x20;     {/\* Contact \*/}

# &#x20;     <section id="contact">

# &#x20;       <div className="mx-auto max-w-4xl px-6 py-24">

# &#x20;         <p className="mb-3 text-sm uppercase tracking-\[0.2em] text-neutral-500">

# &#x20;           Contact

# &#x20;         </p>

# 

# &#x20;         <h3 className="text-4xl font-semibold tracking-tight">

# &#x20;           Get in touch.

# &#x20;         </h3>

# 

# &#x20;         <div className="mt-10 rounded-3xl border border-neutral-200 p-8">

# &#x20;           <p className="text-lg leading-8 text-neutral-700">

# &#x20;             Business inquiries, support requests, or partnership discussions:

# &#x20;           </p>

# 

# &#x20;           <div className="mt-6 space-y-3 text-lg">

# &#x20;             <p>support@northstarstudio.dev</p>

# &#x20;             <p>Tokyo, Japan</p>

# &#x20;           </div>

# &#x20;         </div>

# &#x20;       </div>

# &#x20;     </section>

# 

# &#x20;     {/\* SEO Footer \*/}

# &#x20;     <footer className="border-t border-neutral-200">

# &#x20;       <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-neutral-500 md:flex-row md:items-center">

# &#x20;         <div>

# &#x20;           © 2026 Northstar Studio. All rights reserved.

# &#x20;         </div>

# 

# &#x20;         <div className="flex gap-6">

# &#x20;           <a href="#privacy" className="hover:text-black">

# &#x20;             Privacy Policy

# &#x20;           </a>

# &#x20;           <a href="#contact" className="hover:text-black">

# &#x20;             Contact

# &#x20;           </a>

# &#x20;         </div>

# &#x20;       </div>

# &#x20;     </footer>

# &#x20;   </div>

# &#x20; );

# }



