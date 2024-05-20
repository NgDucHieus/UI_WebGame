import React from 'react'
import FlipCard from '../FlipCard/FlipCard'
import '../FlipCard/FlipCard.css'
function FlipCardContainer() {
  return (
    <div className="flip-card-container">
        <FlipCard frontContent={<div>Front Content</div>} backContent={<div>Back Content</div>} />
        <FlipCard frontContent={<div>Front Content</div>} backContent={<div>Back Content</div>} />
    </div>

  )
}

export default FlipCardContainer
