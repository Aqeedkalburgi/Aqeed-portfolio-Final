'use client'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Static 3D spheres - no animation */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`sphere-${i}`}
          className="absolute rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 dark:from-blue-600/30 dark:to-purple-800/30 blur-xl"
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Static gradient - no mouse interaction */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-600/20 blur-3xl"
        style={{
          left: '20%',
          top: '30%',
        }}
      />

      {/* Static grid pattern - no mouse interaction */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Static particles - no animation */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-0.5 h-0.5 bg-blue-300/30 dark:bg-blue-200/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}