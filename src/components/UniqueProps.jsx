const props = [
  '100% Herbal & Safe – Enriched with trusted Ayurvedic herbs for intimate care.',
  'Hydration & Moisture Balance – Aloe vera and Amla help relieve dryness naturally.',
  'Tightening & Toning Effect – Oak, Ashoka, and Alum provide natural firming benefits.',
  'Soothing & Cooling Relief – Reduces itching, irritation, and discomfort.',
  "Maintains Healthy pH – Helps in balancing the intimate area's natural environment.",
  'Antioxidant Protection – Herbal extracts protect delicate tissues from oxidative stress.',
  'Non-sticky, Gentle Gel – Easy-to-use, smooth-textured, and comfortable for daily application.',
]

export default function UniqueProps() {
  return (
    <section className="bg-gradient-to-b from-white to-pink-50 pt-2 pb-16">
      <div className="mx-auto px-4 sm:container">
        <h2 className="mb-2 font-semibold text-[#aa1824] text-3xl">Ameora – The Unique Propositions</h2>
        <div className="w-12 h-1 bg-[#aa1824] rounded-full mb-6"></div>
        <ul className="space-y-3">
          {props.map((p, i) => (
            <li key={p} className="flex items-start gap-3 bg-white hover:bg-pink-50 p-4 border border-pink-100 rounded-xl text-gray-700 shadow-sm hover:shadow-md transition-all duration-200">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#aa1541] text-white text-xs flex items-center justify-center font-bold mt-0.5">{i + 1}</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
