import { Link } from 'react-router-dom'
import WomenCapsules from '../assets/WomenCapsules.png'

export default function UnlockSection() {
  return (
    <section className="relative w-full">
      <div className="relative mt-8 w-full bg-gradient-to-r from-[#aa1541] to-[#7a0e2e]">
        <div className="bg-black/10 py-10 sm:py-14 md:py-16 h-full">
          <div className="mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 max-w-7xl h-full">
            <div className="text-white max-w-2xl">
              <h2 className="mt-3 sm:mt-4 md:mt-5 font-extrabold text-xl sm:text-3xl md:text-4xl leading-tight">
                UNLOCK YOUR TRUE LIFE 2.0 TODAY WITH AMEORA!
              </h2>
              <div className="mt-3 w-16 h-1 bg-[#ffd86a] rounded-full"></div>
              <p className="mt-4 pl-1 text-[#ffd86a] text-sm sm:text-base md:text-lg lg:text-xl">
                Relive your passion, comfort, freshness &amp; confidence with our trusted solutions.
              </p>
              <ul className="space-y-2 sm:space-y-3 mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-[#ffd86a] mt-1">✦</span>
                  <span>
                    Enriched with 100% Ayurvedic gentle natural extracts, soothing moisturizers, and pH-balancing ingredients, this gel helps maintain feminine health while reducing dryness, irritation, and discomfort.
                  </span>
                </li>
              </ul>
              <p className="mt-5 sm:mt-6 text-[#ffd86a] lg:text-[22px] text-sm sm:text-base md:text-lg font-semibold">
                WE HELP YOU TO REJUVENATE &amp; REDISCOVER YOUR YOUTH WITH THE MOST FULFILLING EXPERIENCE EVER.
              </p>
              <div className="flex justify-center md:justify-start mt-6 sm:mt-7">
                <Link to="/cart">
                  <button className="inline-flex z-10 relative items-center gap-2 bg-white hover:bg-[#ffd86a] shadow-lg px-10 sm:px-14 md:px-16 py-3 sm:py-4 rounded-full font-bold text-[#aa1541] text-sm sm:text-base md:text-lg transition-colors duration-300">
                    <span>▶</span>
                    <span>ORDER NOW</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src={WomenCapsules}
          alt="Order Visual"
          className="hidden lg:block top-[80px] right-10 absolute w-[clamp(300px,25vw,500px)] max-h-[350px] object-cover drop-shadow-2xl"
        />
      </div>
      <div className="bg-gradient-to-r from-[#aa1541] to-[#7a0e2e] w-full h-5"></div>
    </section>
  )
}
