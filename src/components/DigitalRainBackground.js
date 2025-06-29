'use client'

import { useEffect, useRef } from 'react'

const RAIN_STRINGS = [
  // Mathematical formulas
  'E=mc²', '∇·E=ρ/ε₀', 'F=ma', 'y=mx+b', 'Σ', 'λ', 'π', 
  '∫f(x)dx', 'ΔV=IR', 'sin(θ)', 'cos(θ)', '∂/∂x',
  
  // Bayes' Theorem
  'P(A|B)=[P(B|A)P(A)]/P(B)',
  
  // Gradient Descent
  'θ := θ - η∇J(θ)',
  'Gradient Descent: w -= η∂L/∂w',
  
  // Standard Deviation
  'σ=√[Σ(xᵢ-μ)²/N]',
  'StdDev = √Variance',
  
  // Mean
  'μ = Σxᵢ/N',
  'x̄ = Σxᵢ/n',
  'Mean = Σx/n',
  
  // Code snippets
  'def f(x):', 'for i in range(n):'
]

export default function DigitalRainBackground() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const fontSize = 28
    const columns = Math.floor(width / fontSize)
    // Assign a fixed formula to each column
    const fixedFormulas = Array.from({ length: columns }, () =>
      RAIN_STRINGS[Math.floor(Math.random() * RAIN_STRINGS.length)]
    )
    // Each column has its own vertical position, start randomly
    let drops = Array.from({ length: columns }, () =>
      Math.floor(Math.random() * (height / fontSize))
    )

    let frameCount = 0

    function draw() {
      frameCount++
      ctx.fillStyle = 'rgba(30,41,59,0.15)'
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${fontSize}px 'Fira Mono', 'Menlo', 'Consolas', monospace`
      ctx.textAlign = 'center'
      ctx.shadowColor = '#38bdf8'
      ctx.shadowBlur = 8

      for (let i = 0; i < columns; i++) {
        const text = fixedFormulas[i]
        ctx.fillStyle = `hsl(${180 + (i % 60)}, 90%, 70%)`
        ctx.fillText(text, i * fontSize + fontSize / 2, drops[i] * fontSize)

        // Only update drops every 6 frames for very slow drop
        if (frameCount % 50 === 0) {
          if (drops[i] * fontSize > height) {
            drops[i] = 0
          }
          drops[i]++
        }
      }
      ctx.shadowBlur = 0
      animationRef.current = requestAnimationFrame(draw)
    }

    draw()

    function handleResize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      // Recalculate columns and assign formulas again
      const newColumns = Math.floor(width / fontSize)
      // If the number of columns changes, reassign formulas and positions
      if (newColumns !== columns) {
        for (let i = columns; i < newColumns; i++) {
          fixedFormulas[i] = RAIN_STRINGS[Math.floor(Math.random() * RAIN_STRINGS.length)]
          drops[i] = Math.floor(Math.random() * (height / fontSize))
        }
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      style={{ background: 'transparent' }}
      aria-hidden="true"
    />
  )
}
