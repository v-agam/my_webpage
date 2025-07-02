'use client'

import { Code, Database, Globe, BarChart, Cloud, Star } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const skills = [
    { name: 'Frameworks', icon: Globe, items: ['PyTorch', 'LangChain', 'Streamlit', 'Scikit-Learn'] },
    { name: 'Programming Languages', icon: Code, items: ['Python', 'R'] },
    { name: 'Backend & Data', icon: Database, items: [ 'PostgreSQL', 'MongoDB', 'PySpark', 'Postman for RestAPI' ] },
    { name: 'Visualization', icon: BarChart, items: ['PowerBI', 'Tableau'] },
    { name: 'Cloud Platforms', icon: Cloud, items: ['Azure', 'Google Colab', 'Databricks'] },
    { name: 'Areas of Expertise', icon: Star , items: ['Machine Learning', 'Deep Learning', 'Gen AI', 'Data Analytics', 'Data Modelling'] }
  ]

  return (
    <section id="about" className="py-20 section-padding bg-white dark:bg-gray-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I am Agam Vuppulury, A passionate Data, ML & AI Scientist with over 10 years of experience building scalable Machine Learning applications and industrial solutions. I am also currently doing research in AI safety.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Professional Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-justify">
              <p>
                I started my journey in Data Analytics and Machine Learning with the MS in Analytics from Georgia Institute of Technology and have since worked with startups and established companies, helping them bring their digital visions to life.
              </p>
              <p>
                My expertise spans across Data Analytics - Predictive Analytics, Descriptive Analytics, Diagnostic Analytics and Prescriptive Analytics, Machine Learning, Generative AI and its applications like ChatGPT, RAG, finetuning LLMs and Custom LLM model training. I have used PowerBI dashboards to communicate my results effectively to management stakeholders.
              </p>
              <p>
                My work experience includes MNCs like TCS, Pratt & Whitney and Ernst & Young, where I have led teams to deliver impactful solutions in various domains like avionics, financial services, oil & gas, commercial foodservice equipment manufacturing. I also mentor aspiring data scientists to help them realize professional excellence in the domain.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-600 dark:text-gray-300 text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* My Education subsection */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              My Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Tile 1: Masters Program */}
              <div className="flex flex-col items-center">
                <a
                  href="https://pe.gatech.edu/degrees/analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-full"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src="/education/masters-program.jpg"
                      alt="MS in Analytics - Georgia Tech"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white text-lg font-semibold">
                      Georgia Institute of Technology, Atlanta, USA
                    </h4>
                    <p className="text-gray-300 text-sm">
                      
                    </p>
                  </div>
                </a>
                <div className="mt-4">
                  <span className="block text-xl font-bold text-primary-700 dark:text-primary-300 tracking-wide font-serif">
                    Master of Science in Analytics
                  </span>
                </div>
              </div>

              {/* Tile 2: Institution */}
              <div className="flex flex-col items-center">
                <a
                  href="https://www.dei.ac.in/dei/engineering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-full"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src="/education/bachelors.jpg"
                      alt="Dayalbagh Educational Institute"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white text-lg font-semibold">
                      Dayalbagh Educational Institute, Agra, India
                    </h4>
                    <p className="text-gray-300 text-sm">
                      
                    </p>
                  </div>
                </a>
                <div className="mt-4">
                  <span className="block text-xl font-bold text-primary-700 dark:text-primary-300 tracking-wide font-serif">
                    Bachelor of Technology in Electrical Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}
