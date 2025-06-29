'use client'

import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'AI powered Organic Farming Consultant',
      description: 'An AI powered organic farming consultant chatbot which uses the innovative & cost-friendly concepts of Agro-Homeopathy to detect and cure plant diseases.',
      image: '/projects/project1.jpg',
      technologies: ['Python', 'Huggingface', 'Llama3.3', 'ChromaDB', 'Langchain', 'RAG'],
      liveUrl: 'https://huggingface.co/spaces/euracle/agro_homeopathy',
      githubUrl: 'https://github.com/v-agam/agro_homeopathy_app',
    },
    {
      id: 2,
      title: 'AI Safety Fellowship - Research Work',
      description: 'A 4 month long AI safety fellowship sponsored by AI safety global society.',
      image: '/projects/project2.jpg',
      technologies: ['Pytorch', 'Python', 'transformer-lens', 'LLM interpretability'],
      githubUrl: 'https://github.com/v-agam',
    },
    {
      id: 3,
      title: 'Senior Living Occupancy Forecasting',
      description: 'A complete solution from scratch for a start-up company for senior living customer relationship management platform. Occupancy is the biggest driver of profitability in the senior living industry, where margins can be very thin. Forecasting of occupancy percent, move-ins and move-outs at a community level is one solution which is implemented in this project work.',
      image: '/projects/project3.jpg',
      technologies: ['Python', 'Prophet package', 'Feature Engineering', 'ARIMA', 'VARMAX'],
      githubUrl: 'https://github.com/v-agam/Occupancy-Forecasting-Project',
    },
  ]

  return (
    <section id="portfolio" className="py-20 section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-yellow-400 text-xs rounded-full"
                  >
                    {tech}
                  </span>

                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
