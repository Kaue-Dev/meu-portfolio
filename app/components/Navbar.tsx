"use client"

import { Mail, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { MenuMobile } from "./MenuMobile"

export const Navbar = () => {

  const emailLink: string = "mailto:kaueandradepadilha@gmail.com?subject=Contato%20via%20Portfólio"

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <div className="flex justify-between p-6 bg-dark md:px-12 lg:hidden">
        <Link href={emailLink} target="_blank">
          <button className="flex items-center gap-1.5 py-1 px-4 rounded-sm border-solid border-2 border-red text-red">
            <Mail size={18} />
            Contato
          </button>
        </Link>
        <Menu size={32} onClick={toggleMenu} />
      </div>
      {isMenuOpen && <MenuMobile isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}

      <nav className="hidden lg:flex items-center justify-between h-24 px-24 bg-dark">
        <Link href={emailLink} target="_blank" className="flex items-center gap-2 duration-200 hover:text-red">
          <Mail />
          kaueandradepadilha@gmail.com
        </Link>
        
        <div className="flex gap-4">
          <Link href="#" className="duration-200 hover:text-red">
            Resumo
          </Link>
          <Link href="#" className="duration-200 hover:text-red">
            Habilidades
          </Link>
          <Link href="#" className="duration-200 hover:text-red">
            Projetos
          </Link>
          <Link href="#" className="duration-200 hover:text-red">
            Contato
          </Link>
        </div>
      </nav>
    </>
  )
}
