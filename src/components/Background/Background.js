import React from 'react'
import { Stars, ShotingStars } from './Background.style'

function createStars(starNumber) {
  let stars = '726px 927px #fff'
  for (let i = 1; i < starNumber; i++) {
    stars += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(
      Math.random() * 1000
    )}px #fff`
  }
  return stars
}

const star1 = createStars('100')
const star2 = createStars('50')
const star3 = createStars('25')

export default function Background() {
  return (
    <>
      <Stars starSize="1px" starNumber={star1} />
      <Stars starSize="2px" starNumber={star2} />
      <Stars starSize="3px" starNumber={star3} />
      <ShotingStars />
    </>
  )
}
