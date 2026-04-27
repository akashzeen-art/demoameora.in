const ingredients = [
  {
    name: 'Aloe barbadensis (1%)',
    benefits: ['Natural moisturizer with soothing and cooling properties.', 'Helps reduce irritation, itching, and dryness.', 'Supports tissue repair and hydration.'],
  },
  {
    name: 'Quercus infectoria (1%)',
    benefits: ['Rich in tannins with natural astringent properties.', 'Helps tighten and tone vaginal tissues.', 'Provides antimicrobial support.'],
  },
  {
    name: 'Korean Ginseng Extract (1%)',
    benefits: ['Improves local circulation and vitality.', 'Helps reduce fatigue and promote rejuvenation.', 'Known for antioxidant and adaptogenic effects.'],
  },
  {
    name: 'Phyllanthus emblica (1%)',
    benefits: ['Potent antioxidant and Vitamin C source.', 'Promotes collagen synthesis and tissue strength.', 'Helps reduce oxidative stress and support skin elasticity.'],
  },
  {
    name: 'Woodfordia floribunda (1%)',
    benefits: ["Classical Ayurvedic herb for women's health.", 'Supports natural mucosal secretions.', 'Provides mild antimicrobial and anti-inflammatory action.'],
  },
  {
    name: 'Saraca asoca (1%)',
    benefits: ['Traditionally used in gynecological wellness.', 'Helps in maintaining uterine and vaginal health.', 'Provides toning and strengthening action.'],
  },
  {
    name: 'Potassium Aluminium Sulphate (1%)',
    benefits: ['Natural astringent (alum).', 'Helps tighten tissues and reduce excess secretions.', 'Provides cleansing and protective benefits.'],
  },
  {
    name: 'Gel Base (Q.S.)',
    benefits: ['Smooth, non-sticky formulation.', 'Enhances ease of application and absorption.', 'Supports tissue repair and hydration.'],
  },
]

export default function IngredientsCards() {
  return (
    <section className="bg-white dark:bg-dark py-[30px]">
      <div className="mx-auto sm:container">
        <div className="border-stroke dark:border-dark-3 border-b">
          <h2 className="mb-2 px-4 sm:px-0 font-semibold text-[#aa1824] text-3xl">Key Ingredients &amp; Benefits</h2>
          <div className="mx-auto px-4 sm:px-0 py-8 max-w-7xl">
            <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
              {ingredients.map((ing) => (
                <article
                  key={ing.name}
                  className="bg-white hover:bg-pink-50 shadow-md hover:shadow-xl p-6 border border-gray-200 hover:border-pink-600 rounded-xl transition-all hover:-translate-y-1 duration-300 transform"
                >
                  <h3 className="font-bold text-pink-700 text-lg">{ing.name}</h3>
                  <ul className="space-y-2 mt-4">
                    {ing.benefits.map((b) => (
                      <li key={b}>
                        <strong className="font-medium text-gray-700">{b}</strong>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
