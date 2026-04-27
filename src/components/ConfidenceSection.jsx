import WomenCapsules from '../assets/WomenCapsules.png'
import FemaleDoc from '../assets/FemaleDoc.png'

export default function ConfidenceSection() {
  return (
    <section className="py-14 w-full h-auto sm:h-[500px] md:h-[600px]" style={{ backgroundColor: 'rgb(239, 239, 240)' }}>
      <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-10 sm:py-15 md:py-20 max-w-7xl">
        <div>
          <div className="md:text-left text-center">
            <h2 className="font-extrabold text-[#424242] md:text-[40px] text-xl sm:text-2xl">
              EXPERIENCE RESTORED INTIMACY &amp;
              <br className="hidden sm:block" /> CONFIDENCE FOR GREATER
              <br className="hidden sm:block" /> SATISFACTION.
            </h2>
            <p className="mt-4 sm:mt-5 md:mt-6 text-[#828488] md:text-[30px] text-sm sm:text-lg">
              Thanks to advanced herbal formulation and rapid action,{' '}
              <br className="hidden sm:block" />
              Ameora Gel work together to relieve dryness, irritation and
              <br className="hidden sm:block" />
              enhances smoothness and reduces discomfort. Ameora is free{' '}
              <br className="hidden sm:block" />
              from parabens, harsh chemicals, and artificial fragrances.
            </p>
          </div>
          <div className="relative mt-8 md:mt-0 min-h-[200px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[520px]">
            <img
              src={FemaleDoc}
              alt="Doctor"
              className="hidden sm:block right-[16px] sm:right-[24px] md:right-[32px] bottom-[200px] sm:bottom-[280px] md:bottom-[300px] absolute w-32 sm:w-40 md:w-52 lg:w-72 xl:w-80 h-auto"
            />
            <div className="flex justify-center items-end gap-2 sm:gap-4 mt-4">
              <img src={WomenCapsules} alt="Product" className="drop-shadow w-[100px] sm:w-[240px] md:w-[340px] h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-3" style={{ boxShadow: 'rgba(0, 0, 0, 0.18) 0px 6px 14px inset' }}></div>
    </section>
  )
}
