import React from 'react'
import { useGlobalContext } from './Context'
import cakeImg from './images/blue-velvet-cake.jpg'

const Hero = () => {
  const { closeSubMenu } = useGlobalContext()
  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Dessert Io for best cake service</h1>
          <p>
            Dessert Io is the best plattform to have your treats as you like it,
            throw in any specification, use reccomendations, select your
            quantity, and have it delvered right away!
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={cakeImg} className="cake-img" alt="phone" />
        </article>
      </div>
    </section>
  )
}

export default Hero
