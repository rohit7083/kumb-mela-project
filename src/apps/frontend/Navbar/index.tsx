import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet } from "@/components/ui/sheet";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  { key: "1", label: "Home", path: "/" },
  { key: "3", label: "Hotels", path: "/hotels" },
  { key: "4", label: "Tourism", path: "/tourism" },
  { key: "5", label: "Near By Place", path: "/nearby-place" },
  { key: "6", label: "Kumbha-Mela", path: "/kumbh-mela" },
  { key: "7", label: "About Us", path: "/about" },
  { key: "8", label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-5 h-16">
        {/* Logo + Desktop Menu grouped at start */}
        <div className="flex items-center h-16">
          <span className="font-bold text-lg text-black whitespace-nowrap mr-4">
            Discover Nashik
          </span>

          <nav className="hidden md:flex h-16 items-end">
            {items.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
                className={`px-4 h-full flex items-center text-sm cursor-pointer transition-colors border-b-2 ${
                  location.pathname === item.path
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
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
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
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
              className={`px-4 py-3 text-sm text-left transition-colors ${
                location.pathname === item.path
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
  );
};

export default Navbar;
