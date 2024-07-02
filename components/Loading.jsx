import React from 'react'

export default function Loading() {
    return (
        <div className="relative w-36 h-36 rounded-full outline outline-1 outline-yellow-500">
        <svg height="150" width="150" className="absolute top-0 left-0 transform -rotate-90">
          <circle
            cx="75"
            cy="75"
            r="65"
            className="stroke-yellow-500 stroke-20 fill-none animate-bar-fill"
          />
        </svg>
      </div>
    )
}
