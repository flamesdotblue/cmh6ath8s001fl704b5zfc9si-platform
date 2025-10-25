import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative isolate" aria-label="Hero">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1620796374653-8a3d5b5c6cbf?q=80&w=2400&auto=format&fit=crop"
          alt="Hand-woven leather jacket on model"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs tracking-wide text-neutral-700 ring-1 ring-inset ring-neutral-200 backdrop-blur">
            Hand-woven • Limited • Ethical
          </p>
          <h1 className="font-serif text-4xl leading-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Exquisite hand‑woven leather jackets
          </h1>
          <p className="mt-4 max-w-xl text-base text-neutral-700 md:text-lg">
            Discover the signature basket‑weave patterns meticulously crafted by Malika Rajani. Every piece is woven by hand, one strip at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#collections"
              className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Shop Jackets
            </a>
            <a
              href="#craft"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-50"
            >
              Explore The Craft
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
