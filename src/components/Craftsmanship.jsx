import React from 'react'
import { motion } from 'framer-motion'

export default function Craftsmanship() {
  const features = [
    {
      title: 'Hand-cut strips',
      desc: 'Every leather strip is measured and cut by hand to ensure uniformity without losing natural character.',
      image:
        'https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Basket-weave technique',
      desc: 'The signature lattice is woven one strip at a time, creating a resilient, breathable surface.',
      image:
        'https://images.unsplash.com/photo-1620331311529-007d1d1a5109?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Artisan finishing',
      desc: 'Edges are skived, hand-burnished, and conditioned for a soft touch and lasting wear.',
      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop',
    },
  ]

  return (
    <section id="craft" className="relative overflow-hidden bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 grid items-end gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">The Craft of Weave</h2>
            <p className="mt-3 max-w-xl text-neutral-600">
              Our atelier in small batches creates intricate basket-weave panels using ethical hides and time-honored techniques. Each jacket takes dozens of hours to weave and assemble.
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-4 text-center md:justify-self-end">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4">
              <dt className="text-[11px] uppercase tracking-wider text-neutral-500">Weaving time</dt>
              <dd className="font-serif text-2xl text-neutral-900">24–40h</dd>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-4">
              <dt className="text-[11px] uppercase tracking-wider text-neutral-500">Artisans</dt>
              <dd className="font-serif text-2xl text-neutral-900">3–5</dd>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-4">
              <dt className="text-[11px] uppercase tracking-wider text-neutral-500">Editions</dt>
              <dd className="font-serif text-2xl text-neutral-900">Limited</dd>
            </div>
          </dl>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <div className="relative aspect-[4/3]">
                <img src={f.image} alt={f.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="px-5 py-4">
                <h3 className="text-base font-semibold text-neutral-900">{f.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 text-center">
          <p className="text-neutral-700">
            We source premium leather from responsible tanneries and craft every jacket in limited quantities to reduce waste and ensure exceptional quality.
          </p>
        </div>
      </div>
    </section>
  )
}
