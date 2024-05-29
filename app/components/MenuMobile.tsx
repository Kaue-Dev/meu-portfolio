import { Menu } from "lucide-react"
import Link from "next/link"

interface MenuMobileProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export const MenuMobile = (props: MenuMobileProps) => {
  return (
    <>
      {props.isMenuOpen && (
        <div className="flex justify-end w-full h-screen fixed z-50 lg:hidden">
          <nav className="flex flex-col items-center bg-dark">
            <Link href="#" className="px-12 py-6" onClick={props.toggleMenu}>
              Resumo
            </Link>

            <Separator />
            
            <Link href="#" className="px-12 py-6" onClick={props.toggleMenu}>
              Habilidades
            </Link>

            <Separator />

            <Link href="#" className="px-12 py-6" onClick={props.toggleMenu}>
              Projetos
            </Link>

            <Separator />

            <Link href="#" className="px-12 py-6" onClick={props.toggleMenu}>
              Contato
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}

const Separator = () => {
  return <div className="border-solid border border-darkDetails w-4/5"></div>
}