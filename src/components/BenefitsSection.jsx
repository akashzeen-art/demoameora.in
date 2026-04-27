import couple1 from '../assets/couple1.png'
import couple2 from '../assets/couple2.png'

const benefits = [
  'Helps maintains pH balance and acts a feminine natural protective barrier',
  'Enhances smoothness and reduces discomfort during intimacy',
  'Relieves dryness, irritation and provides a clean, soothing, and refreshed feeling',
]

export default function BenefitsSection() {
  return (
    <section className="bg-white mt-6 sm:mt-8 md:mt-10 py-2 md:py-4 w-full">
      <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="items-center gap-6 grid grid-cols-1 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-xl">
            <img
              src={couple1}
              alt="Couple Top"
              className="-mt-40 sm:-mt-60 md:-mt-80 mr-8 sm:mr-12 md:mr-16 pr-6 sm:pr-8 md:pr-12 w-[200px] sm:w-[280px] md:w-[350px] h-[250px] sm:h-[320px] md:h-[400px] rotate-[-14deg] pointer-events-none select-none"
            />
            <img
              src={couple2}
              alt="Couple Bottom"
              className="top-3 sm:top-4 md:top-5 left-10 sm:left-16 md:left-20 absolute shadow-2xl w-[100px] sm:w-[240px] md:w-[300px] h-auto rotate-[14deg] pointer-events-none select-none"
            />
          </div>
          <div className="space-y-3 sm:space-y-4 mt-12 sm:mt-16 md:mt-24 -ml-0 sm:-ml-20 md:-ml-36">
            {benefits.map((text, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4 md:gap-6">
                <div className="flex justify-center items-center bg-[#aa1541] rounded-full w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 font-extrabold text-white text-2xl sm:text-4xl md:text-6xl shrink-0">
                  {i + 1}
                </div>
                <p className="text-[#282828] text-sm sm:text-lg md:text-xl lg:text-2xl leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 sm:mt-30 md:mt-40 px-2 sm:px-4 text-center">
          <p className="font-semibold text-[#aa1541] md:text-[24px] text-sm sm:text-lg uppercase tracking-widest">
            STOP WORRYING ABOUT FEMININE HEALTH HAZARDS AND
          </p>
          <p className="font-semibold text-[#aa1541] md:text-[24px] text-sm sm:text-lg uppercase tracking-widest">
            START ENJOYING DAILY INTIMATE CARE AND HYGIENE SUPPORT
          </p>
        </div>
      </div>
    </section>
  )
}
