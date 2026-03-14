import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet } from "@/components/ui/sheet"
import { Menu, Search, X } from "lucide-react"
import { useState } from "react"

const items = [
  { key: "1", label: "Home" },
  { key: "2", label: "About Us" },
  { key: "3", label: "Services" },
  { key: "4", label: "Pages" },
  { key: "5", label: "Blog" },
  { key: "6", label: "Contact Us" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("1")

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-5 h-16">

        {/* Logo + Desktop Menu grouped at start */}
        <div className="flex items-center h-16">
          <span className="font-bold text-lg text-black whitespace-nowrap mr-4">Discover Nashik</span>

          <nav className="hidden md:flex h-16 items-end">
            {items.map((item) => (
              <button
                key={item.key}
                onClick={() => setSelected(item.key)}
                className={`px-4 h-full flex items-center text-sm cursor-pointer transition-colors border-b-2 ${
                  selected === item.key
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-800 border-transparent hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center relative">
          <Input placeholder="Search..." className="pr-8 w-48" />
          <Search className="absolute right-2 text-gray-400" size={16} />
        </div>

        {/* Mobile Hamburger */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={20} />
        </Button>
      </div>

      {/* Mobile Sheet */}
      <Sheet open={open} onClose={() => setOpen(false)}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="font-bold text-base">Menu</span>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X size={18} />
          </Button>
        </div>
        <nav className="flex flex-col">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => { setSelected(item.key); setOpen(false) }}
              className={`px-4 py-3 text-sm text-left transition-colors ${
                selected === item.key
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </Sheet>
    </header>
  )
}

export default Navbar
