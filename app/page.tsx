export default function IndieStudioWebsite() {
  const apps = [
    {
      name: 'ReplyFlow',
      description: 'AI-powered social and dating reply assistant for modern conversations.',
      status: 'Coming Soon',
    },
    {
      name: 'Slangy',
      description: 'Learn real American slang and daily English expressions with AI practice.',
      status: 'Available Soon',
    },
    {
      name: 'FocusFlow',
      description: 'Minimal productivity tools built for creators, students, and remote workers.',
      status: 'In Development',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Northstar Studio</h1>
          </div>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#apps" className="transition hover:opacity-60">
              Apps
            </a>
            <a href="#about" className="transition hover:opacity-60">
              About
            </a>
            <a href="#privacy" className="transition hover:opacity-60">
              Privacy
            </a>
            <a href="#contact" className="transition hover:opacity-60">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex rounded-full border border-neutral-300 px-4 py-1 text-sm text-neutral-600">
            Independent App Studio
          </div>

          <h2 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Simple apps.
            <br />
            Built for real life.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            We create lightweight AI-powered apps focused on productivity,
            communication, learning, and everyday digital tools.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#apps"
              className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore Apps
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Apps */}
      <section id="apps" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
              Apps
            </p>
            <h3 className="text-4xl font-semibold tracking-tight">
              Our Products
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {apps.map((app) => (
              <div
                key={app.name}
                className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 inline-flex rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-500">
                  {app.status}
                </div>

                <h4 className="text-2xl font-semibold tracking-tight">
                  {app.name}
                </h4>

                <p className="mt-4 leading-7 text-neutral-600">
                  {app.description}
                </p>

                <button className="mt-8 rounded-2xl border border-neutral-300 px-4 py-2 text-sm transition hover:bg-neutral-100">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
            About
          </p>

          <h3 className="text-4xl font-semibold tracking-tight">
            Built with simplicity in mind.
          </h3>

          <p className="mt-8 text-lg leading-9 text-neutral-600">
            Northstar Studio is an independent software studio focused on
            creating clean, useful, and privacy-conscious applications for
            everyday users.
          </p>

          <p className="mt-6 text-lg leading-9 text-neutral-600">
            Our apps are designed to be fast, lightweight, intuitive, and easy
            to use — without unnecessary complexity.
          </p>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
            Privacy Policy
          </p>

          <h3 className="text-4xl font-semibold tracking-tight">
            Your privacy matters.
          </h3>

          <div className="mt-10 space-y-8 text-neutral-700">
            <div>
              <h4 className="mb-2 text-xl font-semibold">Information We Collect</h4>
              <p className="leading-8">
                Our apps may collect limited technical information such as
                device type, app usage analytics, crash reports, and account
                information required for authentication.
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-xl font-semibold">AI Services</h4>
              <p className="leading-8">
                Some applications may use third-party AI providers to process
                user requests and generate responses. User content is processed
                only to provide app functionality.
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-xl font-semibold">Analytics</h4>
              <p className="leading-8">
                We may use analytics tools such as Firebase Analytics or Google
                Play services to improve app stability and user experience.
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-xl font-semibold">Data Security</h4>
              <p className="leading-8">
                We take reasonable measures to protect user information and do
                not sell personal data to advertisers.
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-xl font-semibold">Contact</h4>
              <p className="leading-8">
                For privacy-related questions, please contact:
                <br />
                support@northstarstudio.dev
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
            Contact
          </p>

          <h3 className="text-4xl font-semibold tracking-tight">
            Get in touch.
          </h3>

          <div className="mt-10 rounded-3xl border border-neutral-200 p-8">
            <p className="text-lg leading-8 text-neutral-700">
              Business inquiries, support requests, or partnership discussions:
            </p>

            <div className="mt-6 space-y-3 text-lg">
              <p>support@northstarstudio.dev</p>
              <p>Tokyo, Japan</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-neutral-500 md:flex-row md:items-center">
          <div>
            © 2026 Northstar Studio. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
