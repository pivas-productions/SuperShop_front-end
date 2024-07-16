import React from 'react'

export default function Loading() {
  return (
    <div className="relative w-full h-full max-w-[150px] max-h-[150px] aspect-square rounded-full outline outline-1 outline-yellow-500">
      <svg className="absolute inset-0 w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="calc(50% - 10px)"
          className="stroke-yellow-500 stroke-[10] fill-none animate-bar-fill"
        />
      </svg>
    </div>
  )
}
