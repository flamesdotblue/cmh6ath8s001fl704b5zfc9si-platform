import React from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Aarya Basket-Weave Moto',
    color: 'Onyx',
    price: '$1,280',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Sera Hand-Woven Biker',
    color: 'Charcoal',
    price: '$1,190',
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Inara Weave Trench',
    color: 'Cognac',
    price: '$1,560',
    image:
      'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Noura Basket Bomber',
    color: 'Espresso',
    price: '$1,090',
    image:
      'https://images.unsplash.com/photo-1551022370-0e2f2e6a12f5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Kaia Panel Weave Blazer',
    color: 'Umber',
    price: '$1,340',
    image:
      'https://images.unsplash.com/photo-1580656448817-5e6a55f629aa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Zara Hand-Laced Rider',
    color: 'Raven',
    price: '$1,220',
    image:
      'https://images.unsplash.com/photo-1614252369475-c1fef1f0d5c4?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function ProductGrid() {
  return (
    <section id="collections" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">Signature Jackets</h2>
            <p className="mt-2 max-w-2xl text-neutral-600">
              Limited-run silhouettes featuring our hallmark basket-weave panels and buttery-soft leather.
            </p>
          </div>
          <a href="#" className="hidden text-sm text-neutral-900 underline-offset-4 hover:underline md:inline">
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.a
              key={p.id}
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} in ${p.color}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute right-3 top-3 rounded-full bg-white/80 px-2 py-1 text-[11px] font-medium tracking-wide text-neutral-800 ring-1 ring-neutral-200 backdrop-blur">
                  Hand‑woven
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-4">
                <div>
                  <h3 className="text-sm font-medium text-neutral-900">{p.name}</h3>
                  <p className="mt-1 text-xs text-neutral-500">{p.color}</p>
                </div>
                <p className="text-sm font-semibold text-neutral-900">{p.price}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <a href="#" className="text-sm text-neutral-900 underline-offset-4 hover:underline">
            View all
          </a>
        </div>
      </div>
    </section>
  )
}
