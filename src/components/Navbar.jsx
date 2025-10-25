import React, { useState } from 'react'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Collections', href: '#collections' },
    { name: 'Craft', href: '#craft' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="font-serif text-xl tracking-tight md:text-2xl">
          Malika Rajani
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
              {l.name}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <button aria-label="Search" className="rounded-full p-2 hover:bg-neutral-100">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Bag" className="rounded-full p-2 hover:bg-neutral-100">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
        <button aria-label="Menu" className="rounded-md p-2 md:hidden hover:bg-neutral-100" onClick={() => setOpen((o) => !o)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <nav className="grid gap-3">
              {links.map((l) => (
                <a key={l.name} href={l.href} className="py-2 text-sm text-neutral-800">
                  {l.name}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-4">
                <button aria-label="Search" className="rounded-full p-2 hover:bg-neutral-100">
                  <Search className="h-5 w-5" />
                </button>
                <button aria-label="Bag" className="rounded-full p-2 hover:bg-neutral-100">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
