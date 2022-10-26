import React, { useState } from 'react'
import * as icons from 'carbon-motion'

const IconTile = ({ iconName, size, title }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const IconComponent = icons[iconName]
  console.log(IconComponent)
  return (
    <>
      <li
        className='icon-tile'
        onMouseEnter={() => setIsAnimating(true)}
        onMouseLeave={() => setIsAnimating(false)}
      >
        <h3>{title}</h3>
        {IconComponent && <IconComponent isAnimating={isAnimating} size={size} />}
      </li>
    </>
  )
}
export default IconTile