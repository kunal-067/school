"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap, User, CreditCard } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Admissions", href: "#admissions" },
    { name: "Faculty", href: "#faculty" },
    { name: "Gallery", href: "#gallery" },
    { name: "Notices", href: "#notices" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-3 pl-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Your School Name</h1>
              <p className="text-xs text-muted-foreground">Sitamarhi, Bihar</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/student-portal">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                <User className="w-4 h-4" />
                <span>Student Login</span>
              </Button>
            </Link>
            <Link href="/student-portal">
              <Button size="sm" className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span>Pay Fees</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-full h-full" /> : <Menu className="w-full h-full" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link href="/student-portal">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center justify-center space-x-2 bg-transparent"
                  >
                    <User className="w-4 h-4" />
                    <span>Student Login</span>
                  </Button>
                </Link>
                <Link href="/student-portal">
                  <Button size="sm" className="w-full flex items-center justify-center space-x-2">
                    <CreditCard className="w-4 h-4" />
                    <span>Pay Fees</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
