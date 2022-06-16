import React from 'react'

export default function MetascoreSquare({score}) {
  const color = parseInt(score) >= 80
    ? 'green'
    : parseInt(score) >= 50
    ? 'yellow-200'
    : 'red';
  return (
    <span title="Metascore"
      className={`p-1 font-sm w-2 h-2 border-1 border-${color}
      text-${color} radius-xs font-extra-bold cursor-default`}>
        {score}
      </span>
  )
}
