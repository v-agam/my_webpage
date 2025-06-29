'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Link } from 'react-scroll'
import { useTheme } from './ThemeProvider'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Volunteering', to: 'volunteering' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
      `}
    >
      <nav
        className={`
          container-width section-padding
          bg-white/80 dark:bg-gray-900/80
          backdrop-blur-md
          border-b border-gray-200 dark:border-gray-700
          shadow-md
          rounded-b-xl
          transition-all duration-300
          ${isScrolled ? 'shadow-lg' : ''}
        `}
        style={{
          WebkitBackdropFilter: 'blur(12px)'
        }}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white drop-shadow">
              V.Agam
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="
                    text-gray-900 dark:text-gray-100
                    hover:text-primary-600 dark:hover:text-primary-400
                    font-semibold
                    cursor-pointer
                    transition-colors duration-200
                    px-3 py-1 rounded
                    bg-white/60 dark:bg-gray-900/60
                    hover:bg-primary-100 dark:hover:bg-primary-900
                    shadow-sm
                  "
                  style={{
                    textShadow: '0 1px 4px rgba(0,0,0,0.10)'
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-900/90 rounded-lg mt-2 shadow-lg backdrop-blur-md">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="
                    block px-3 py-2
                    text-gray-900 dark:text-gray-100
                    hover:text-primary-600 dark:hover:text-primary-400
                    font-semibold
                    rounded
                    bg-white/60 dark:bg-gray-900/60
                    hover:bg-primary-100 dark:hover:bg-primary-900
                    shadow-sm
                  "
                  style={{
                    textShadow: '0 1px 4px rgba(0,0,0,0.10)'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
