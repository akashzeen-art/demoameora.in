const stats = [
  { value: '40%', text: 'over 40% of women notice a decline in feminine part tightness after childbirth or with age.' },
  { value: '70%', text: 'large number of women avoid intimacy altogether due to a lack of confidence.' },
  { value: '55%', text: 'studies show that more than half of women feel reduced tightness affects their daily life.' },
  { value: '35%', text: 'many report that self-consciousness prevents them from enjoying fulfilling intimacy.' },
]

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-pink-50 px-3 sm:px-4 md:px-6 pt-10 sm:pt-20 md:pt-28 pb-10 text-center">
      <h2 className="mb-2 font-extrabold text-[#aa1824] md:text-[70px] text-2xl sm:text-3xl drop-shadow-sm">Crafted With Wisdom For Her</h2>
      <div className="mx-auto mt-3 w-20 h-1 bg-[#aa1824] rounded-full"></div>
      <h3 className="mt-6 sm:mt-8 md:mt-11 font-semibold text-[#b8424b] md:text-[50px] text-lg sm:text-xl">YOUR NATURAL INTIMATE CARE SOLUTION</h3>
      <p className="mt-3 sm:mt-4 md:mt-5 text-[#525252] md:text-[40px] text-lg sm:text-2xl">SO TAKE CONTROL OF YOUR FEMININE WELL-BEING</p>
      <p className="mx-auto mt-2 px-2 sm:px-4 max-w-3xl text-[#818282] md:text-[19px] text-sm sm:text-base leading-relaxed">
        Did you know that many women silently experience firmness in{' '}
        <span className="font-bold text-[#7e7e7e] md:text-[20px] text-sm sm:text-base">
          feminine parts, even though they still desire soothing moisturizers &amp; pH balance in daily life?
        </span>{' '}
        Research indicates the following:
      </p>
      <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-8 sm:my-10 md:my-12">
        {stats.map((s) => (
          <div key={s.value} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 px-4 py-6 border border-pink-100">
            <h1 className="text-[#aa1824] md:text-[55px] text-3xl sm:text-4xl font-extrabold">{s.value}</h1>
            <p className="mt-2 text-[#818282] md:text-[18px] text-sm sm:text-base">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
