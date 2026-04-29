import { Link } from 'react-router-dom'

const benefits = [
  'Restored Tightness',
  'Increased Sensitivity',
  'Youthful Confidence',
  'Better Intimacy',
]

const ingredients = [
  'Quercus infectoria',
  'Phyllanthus emblica',
  'Saraca asoca',
  'Alum',
]

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <Link to="/" className="text-[#aa1824] hover:underline text-sm mb-6 inline-block">← Back to Home</Link>
        <h1 className="text-3xl font-bold text-[#aa1824] mb-2">About Us</h1>
        <div className="w-14 h-1 bg-[#aa1824] rounded-full mb-8" />

        {/* Brand story + image */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
          <div className="flex-1 space-y-4 text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold text-[#aa1824]">Améora</span> is a premium feminine wellness brand dedicated to supporting comfort, confidence, and intimate care for modern women.
            </p>
            <p>
              Our formulations are thoughtfully designed to promote firmness, elasticity, and overall well-being, helping women feel more balanced and self-assured in their daily lives.
            </p>
            <p>
              Rooted in centuries-old herbal wisdom and refined through modern scientific formulation, our products are crafted to deliver safe, effective, and elegant wellness solutions.
            </p>
            <p>
              At Améora, we believe feminine wellness is an essential part of self-care — and every woman deserves to feel confident, comfortable, and empowered.
            </p>
            <p className="font-semibold text-[#aa1824] italic">Améora — Confidence, Naturally Yours.</p>
          </div>

          <div className="flex-shrink-0">
            <img
              src="/logo/img/WomenCapsules.png"
              alt="Améora Feminine Wellness"
              className="w-64 h-64 sm:w-72 sm:h-72 object-contain"
            />
          </div>
        </div>

        {/* Product highlight card */}
        <div className="bg-pink-50 border border-pink-100 rounded-2xl shadow-sm p-6 sm:p-8 mb-10">
          <h2 className="text-2xl font-semibold text-[#aa1824] mb-1">Améora — Feminine Wellness Gel</h2>
          <p className="text-gray-600 mb-6">
            A premium feminine wellness formulation designed to support firmness, comfort, elasticity, and renewed confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 text-lg mb-3">Benefits</h3>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#aa1824] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 text-lg mb-3">Key Ingredients</h3>
              <ul className="space-y-2">
                {ingredients.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 italic">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#aa1824] flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>Marketed By: Zeen Mediconnect OPC Private Limited, Unit No. 417, Tower A1, Tech Park, Sohna Road, Sec 49, Gurugram, Haryana-122001 (India)</p>
          <p className="mt-1">Contact: +91 9217528957 | bd@zeenmediconnect.com</p>
        </div>
      </div>
    </div>
  )
}
