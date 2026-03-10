export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mango-700">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Let’s deliver sweetness.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">
              Share your city and preferred delivery date. We’ll confirm availability and ripeness
              schedule.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/5 bg-white p-5">
                <div className="text-sm font-semibold text-neutral-900">WhatsApp</div>
                <div className="mt-2 text-sm text-neutral-600">+91 99400 61057</div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-5">
                <div className="text-sm font-semibold text-neutral-900">Email</div>
                <div className="mt-2 text-sm text-neutral-600">apefarmsakm@gmail.com</div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-5 sm:col-span-2">
                <div className="text-sm font-semibold text-neutral-900">Hours</div>
                <div className="mt-2 text-sm text-neutral-600">Mon–Sat, 9:00 AM – 7:00 PM</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
            <form className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-neutral-800">
                  Full name
                  <input
                    className="h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm text-neutral-900 outline-none ring-0 transition focus:border-mango-500"
                    placeholder="Your name"
                    type="text"
                    name="name"
                    autoComplete="name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-neutral-800">
                  Phone
                  <input
                    className="h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm text-neutral-900 outline-none transition focus:border-mango-500"
                    placeholder="+91"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-neutral-800">
                City
                <input
                  className="h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm text-neutral-900 outline-none transition focus:border-mango-500"
                  placeholder="Delivery city"
                  type="text"
                  name="city"
                  autoComplete="address-level2"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-neutral-800">
                Message
                <textarea
                  className="min-h-32 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-mango-500"
                  placeholder="Tell us the variety you want and preferred dates"
                  name="message"
                />
              </label>

              <button
                type="button"
                className="mt-2 h-12 rounded-2xl bg-mango-600 px-5 text-sm font-semibold text-white shadow-lg shadow-mango-900/20 transition hover:bg-mango-700"
              >
                Send message
              </button>

              <p className="text-xs text-neutral-500">
                By submitting, you agree to be contacted about your order.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
