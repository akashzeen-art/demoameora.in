import AmeroLogo from '../assets/AmeroLogo.png'
import WomenCapsules from '../assets/WomenCapsules.png'
import Infectoria from '../assets/Infectoria.png'
import Emblica from '../assets/Emblica.png'
import Asoca from '../assets/Asoca.png'
import Alum from '../assets/Alum.png'

const productFeatures = [
  { title: 'Restored Tightness', desc: 'Revitalizes firmness and elasticity.', align: 'right' },
  { title: 'Increased Sensitivity', desc: 'Enhances natural pleasure and arousal.', align: 'right' },
  { title: 'Youthful Confidence', desc: 'Makes you feel fresher and more assured.', align: 'left' },
  { title: 'Better Intimacy', desc: 'Strengthens connection with your partner.', align: 'left' },
]

const keyIngredients = [
  { img: Infectoria, label: 'Quercus infectoria' },
  { img: Emblica, label: 'Phyllanthus emblica' },
  { img: Asoca, label: 'Saraca asoca' },
  { img: Alum, label: 'Alum' },
]

export default function ProductBenefits() {
  return (
    <section className="w-full bg-white">
      {/* Logo + tagline */}
      <div className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <img src={AmeroLogo} alt="Amero Logo" className="w-40 h-32 sm:w-48 sm:h-36 md:w-56 md:h-44 object-contain" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold text-[#b01a24] leading-tight mb-2">
                A SMALL DOSE FOR LASTING INTIMATE CONFIDENCE
              </h2>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl">
                Specially crafted for women, Ameora gel helps restore natural tightness, freshness, and youthful confidence – enhancing pleasure and closeness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product features with capsule image */}
      <div className="w-full p-2 sm:p-4 md:p-6 lg:p-8 mb-16 sm:mb-18 md:mb-20">
        <div className="flex flex-col lg:flex-row items-center h-auto lg:h-[280px] gap-8 lg:gap-0">
          <div className="flex-1 w-full lg:w-auto">
            <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16">
              {productFeatures.filter(f => f.align === 'right').map(f => (
                <div key={f.title} className="text-center lg:text-right">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#b01a24]">{f.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-lg md:text-[24px]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 order-first lg:order-none">
            <img
              src={WomenCapsules}
              alt="Amero Product"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-full lg:h-[500px] object-contain mt-0 sm:mt-8 md:mt-[110px]"
            />
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16">
              {productFeatures.filter(f => f.align === 'left').map(f => (
                <div key={f.title} className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#b01a24] mb-2">{f.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-[17px]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Ingredients images */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#b01a24] mb-8 sm:mb-10 md:mb-12">KEY INGREDIENTS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {keyIngredients.map((ing) => (
              <div key={ing.label} className="flex flex-col items-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
                  <img src={ing.img} alt={ing.label} className="w-full h-full object-cover" />
                </div>
                <p className="text-[#7F7F7F] text-xs sm:text-sm md:text-lg lg:text-2xl text-center mt-2 sm:mt-3">{ing.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
