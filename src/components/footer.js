'use client'

import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

export default function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 section-padding">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {year} Agam Vuppulury. All rights reserved.
            </p>
          </div>
          <div className="flex items-center text-gray-400">
            <span>Made with</span>
            <Heart className="mx-2 text-red-500" size={16} fill="currentColor" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
