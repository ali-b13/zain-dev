"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { navLinks } from "@/app/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-gradient-to-b from-amber-900 to-amber-950 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          <Logo className="text-amber-50" />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group font-medium text-amber-100/90 hover:text-amber-50 transition-all"
              >
                <span className="relative">
                  {link.name}
                  {pathname === link.href && (
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      className="absolute -bottom-1 left-0 h-[2px] bg-amber-600"
                    />
                  )}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex">
              <CallUsButton />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 z-50 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-7 w-7 text-amber-700" />
              ) : (
                <Menu className="h-7 w-7 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed inset-0 bg-white z-10 pt-24 px-4"
            >
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 text-lg rounded-xl ${
                      pathname === link.href
                        ? "bg-amber-100 text-amber-800 font-bold"
                        : "hover:bg-slate-100 text-amber-800"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <CallUsButton mobile />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

const CallUsButton = ({ mobile }: { mobile?: boolean }) => {
  return (
    <Link
      href={"tel:800 123 4567"}
      className={`flex items-center justify-center gap-2 p-2.5 rounded-xl ${
        mobile
          ? "bg-amber-800 text-white hover:bg-amber-600"
          : "bg-amber-800 text-white hover:bg-amber-600"
      } transition-colors`}
    >
      <PhoneCall className="h-5 w-5" />
      <span className="font-medium">800 123 4567</span>
    </Link>
  );
};
