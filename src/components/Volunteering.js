'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FaChalkboardTeacher, FaHeartbeat, FaChild, FaLeaf } from 'react-icons/fa'

const volunteeringActivities = [
  {
    title: 'Srijanshala - EduFun Sunday Camp for Students',
    image: '/volunteering/srijanshala1.jpg',
    link: 'https://sites.google.com/view/srijanshala',
    icon: FaChild,
    role: 'Founder Volunteer',
    border: 'border-purple-600 dark:border-purple-400',
    dash: 'before:border-purple-300 dark:before:border-purple-700',
  },
  {
    title: 'Technical Mentoring for Young Minds',
    image: '/volunteering/mentor.jpg',
    link: 'https://www.dei.ac.in/dei/distanceEducation/index.php/study-centres',
    icon: FaChalkboardTeacher,
    role: 'Volunteer',
    border: 'border-pink-600 dark:border-pink-400',
    dash: 'before:border-pink-300 dark:before:border-pink-700',
  },
  {
    title: 'Teaching Underprivileged Girls',
    image: '/volunteering/teaching.png',
    link: '/certificates/roundglass.pdf',
    icon: FaChalkboardTeacher,
    role: 'Volunteer',
    border: 'border-yellow-500 dark:border-yellow-400',
    dash: 'before:border-yellow-300 dark:before:border-yellow-600',
  },
  {
    title: 'Organic & Natural Farming Volunteer',
    image: '/volunteering/ahobhag.png',
    link: 'https://sites.google.com/view/ahobhag',
    icon: FaLeaf,
    role: 'Volunteer',
    border: 'border-green-600 dark:border-green-400',
    dash: 'before:border-green-300 dark:before:border-green-700',
  },
  {
    title: 'Health Awareness Champion',
    image: '/volunteering/health.png',
    link: '/certificates/first_aid.png',
    icon: FaHeartbeat,
    role: 'Volunteer',
    border: 'border-blue-600 dark:border-blue-400',
    dash: 'before:border-blue-300 dark:before:border-blue-700',
  },
]

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-20 section-padding bg-gradient-to-br from-amber-50 to-emerald-100 dark:from-gray-800 dark:to-emerald-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-800 dark:text-emerald-200 mb-4 tracking-tight drop-shadow-lg">
            Volunteering
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto font-medium">
            Giving back to the community has always been at the heart of my journey. Here are some of the causes and initiatives I&apos;ve been privileged to be part of — each experience has shaped me and brought immense joy and meaning to my life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {volunteeringActivities.map((activity) => (
            <div key={activity.title} className="flex flex-col items-center">
              <a
                href={activity.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  relative group w-full rounded-3xl border-4 border-transparent bg-gradient-to-br from-white/90 to-emerald-100 dark:from-gray-900/80 dark:to-emerald-900 shadow-xl transition-all duration-300 overflow-hidden cursor-pointer
                  before:absolute before:inset-0 before:rounded-2xl before:border-4 before:border-dashed before:border-transparent before:pointer-events-none
                  after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-tr after:from-emerald-100/10 after:to-transparent after:pointer-events-none
                  hover:scale-105 hover:shadow-2xl hover:border-primary-600 hover:before:border-primary-400
                `}
                style={{ minHeight: 260 }}
              >
                {/* Decorative Icon */}
                <div className="absolute top-4 right-4 z-10 bg-white/80 dark:bg-gray-900/80 p-2 rounded-full shadow-lg border-2 border-emerald-500 dark:border-emerald-400">
                  {typeof activity.icon === 'function' ? (
                    <activity.icon className="text-emerald-700 dark:text-emerald-300" size={26} />
                  ) : null}
                </div>
                {/* Image fills tile, left-aligned */}
                <div className="absolute inset-0">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover object-left w-full h-full transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold drop-shadow-lg flex items-center gap-2">
                      Click to View
                      <ArrowRight size={22} className="text-white drop-shadow" />
                    </span>
                  </div>
                </div>
                {/* Role overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <h4 className="text-white text-lg font-bold drop-shadow-lg tracking-wide text-center">
                    {activity.role}
                  </h4>
                </div>
              </a>
              <div className="mt-5">
                <span className="block text-lg font-extrabold text-emerald-700 dark:text-emerald-200 tracking-wide font-serif drop-shadow-sm text-center">
                  {activity.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
