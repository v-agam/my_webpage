'use client'

import { ChevronDown, Download, Mail } from 'lucide-react'
import { Link } from 'react-scroll'
import Image from 'next/image'
import MathBackground from './MathBackground'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding bg-white dark:bg-gray-900 overflow-hidden">
      {/* Math Background with floating equations and diagrams */}
      <MathBackground />

      <div className="container-width text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="mx-auto rounded-full shadow-2xl"
              priority
            />
          </div>
          
          <h1
            className="text-5xl md:text-5xl font-bold mb-6 relative z-20 text-primary-700 dark:text-primary-300"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
          >
            Greetings &amp; Welcome to my webpage!
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto relative z-20 text-primary-600 dark:text-gray-200"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.14)' }}
          >
            A Critical Thinker, Data Scientist, Seeker, Yoga Mentor, Travel Enthusiast, Budding Poet, Teacher, Volunteer &amp; ...
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 cursor-pointer flex items-center gap-2"
            >
              <Mail size={18} />
              Get In Touch
            </Link>
            
            <a
              href="/resume.pdf"
              download
              className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-all duration-200 flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-10">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-primary-600 hover:text-primary-700 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </Link>
        </div>
      </div>
    </section>
  )
}
