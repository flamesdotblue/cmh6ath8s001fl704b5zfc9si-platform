import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Craftsmanship from './components/Craftsmanship'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Craftsmanship />
      </main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Malika Rajani. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <a href="#" className="hover:text-neutral-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
