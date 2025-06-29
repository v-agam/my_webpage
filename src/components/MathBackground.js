'use client'

import React, { useEffect, useState } from 'react'
import 'katex/dist/katex.min.css'
import { InlineMath } from 'react-katex'

const equations = [
  '\\int_a^b f(x) \\,dx = F(b) - F(a)',
  'e^{i\\pi} + 1 = 0',
  '\\frac{d}{dx}e^x = e^x',
  '\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}',
  'F = ma',
  '\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}',
  '\\frac{\\partial y}{\\partial x} = 2x',
  'y = mx + b',
  'P(A|B) = \\frac{P(B|A)P(A)}{P(B)}',
  '\\sigma = \\sqrt{\\frac{\\sum (x_i-\\mu)^2}{N}}',
  '\\mu = \\frac{\\sum x_i}{N}',
  '\\theta := \\theta - \\eta \\nabla J(\\theta)',
  'a^2 + b^2 = c^2'
]

function FloatingEquation({ latex, style }) {
  return (
    <div style={{
      position: 'absolute',
      color: 'rgba(80, 180, 255, 0.40)', // faint blue
      fontSize: '1.8rem',
      userSelect: 'none',
      pointerEvents: 'none',
      fontWeight: 600,
      ...style,
    }}>
      <InlineMath math={latex} />
    </div>
  )
}

export default function MathBackground() {
  const [positions, setPositions] = useState([])

  useEffect(() => {
    // Initialize random positions and animation parameters
    const initialPositions = equations.map(() => ({
      x: Math.random() * 100, // vw
      y: Math.random() * 100, // vh
      directionX: Math.random() < 0.5 ? -1 : 1,
      directionY: Math.random() < 0.5 ? -1 : 1,
      speedX: 0.01 + Math.random() * 0.015,
      speedY: 0.008 + Math.random() * 0.012,
    }))
    setPositions(initialPositions)

    let animationFrameId

    function animate() {
      setPositions((prev) =>
        prev.map((pos) => {
          let newX = pos.x + pos.speedX * pos.directionX
          let newY = pos.y + pos.speedY * pos.directionY
          // Bounce off edges
          let newDirX = pos.directionX
          let newDirY = pos.directionY
          if (newX < 0 || newX > 100) newDirX *= -1
          if (newY < 0 || newY > 100) newDirY *= -1
          return { ...pos, x: newX, y: newY, directionX: newDirX, directionY: newDirY }
        })
      )
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      userSelect: 'none',
      zIndex: 0,
      backgroundColor: 'transparent',
    }}>
      {equations.map((eq, idx) => (
        <FloatingEquation
          key={idx}
          latex={eq}
          style={{
            top: `${positions[idx]?.y ?? 0}vh`,
            left: `${positions[idx]?.x ?? 0}vw`,
            transition: 'top 0.13s linear, left 0.13s linear',
          }}
        />
      ))}
      {/* Example SVG floating diagram */}
      <svg
        width="110"
        height="60"
        style={{
          position: 'absolute',
          top: '60vh',
          left: '70vw',
          opacity: 0.11,
          pointerEvents: 'none',
        }}
      >
        <ellipse cx="55" cy="30" rx="45" ry="18" fill="#38bdf8" />
        <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" strokeWidth="2" />
        <circle cx="55" cy="30" r="7" fill="#fff" />
      </svg>
    </div>
  )
}
