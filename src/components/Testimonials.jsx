import review1 from '../assets/women-review1.jpeg'
import review2 from '../assets/women-review2.jpeg'
import review3 from '../assets/women-review3.jpeg'

const reviews = [
  {
    img: review1,
    name: 'Priya S.',
    text: 'Amero has completely boosted my confidence. After just a few weeks of use, I feel fresher, tighter, and more comfortable than ever. It\'s exactly what I needed to enjoy intimacy again.',
  },
  {
    img: review2,
    name: 'Neha R.',
    text: "I was hesitant at first, but Amero truly works. It restored my firmness and made intimacy so much more enjoyable. My partner noticed the difference, and it's brought us closer.",
  },
  {
    img: review3,
    name: 'Anjali M.',
    text: "After childbirth, I struggled with confidence. Amero gave me back that youthful feeling I thought I'd lost. I feel renewed, and it's improved not just intimacy but my overall self-esteem.",
  },
]

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-amber-400">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.972c.3.922-.755 1.688-1.538 1.118L10 13.347l-3.384 2.455c-.783.57-1.838-.196-1.539-1.118l1.287-3.972a1 1 0 00-.364-1.118L2.618 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.05 2.927z" />
  </svg>
)

export default function Testimonials() {
  return (
    <section className="w-full bg-gradient-to-b from-pink-50 to-white py-12 sm:py-16">
      <div className="mx-auto px-2 sm:px-4 max-w-7xl">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 className="mb-3 sm:mb-4 font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            What our customers say about us
          </h2>
          <div className="mx-auto mt-2 mb-4 w-16 h-1 bg-[#aa1824] rounded-full"></div>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg">
            Discover what users are saying about the benefits of our products:
          </p>
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8">
          <button aria-label="Previous" className="hidden sm:flex justify-center items-center hover:bg-pink-100 rounded-full w-14 h-14 font-bold text-[#aa1824] text-3xl transition-colors border border-pink-200">
            ‹
          </button>
          <div className="flex sm:flex-row flex-col justify-center items-stretch gap-4 sm:gap-6 md:gap-8 w-full">
            {reviews.map((r) => (
              <div key={r.name} className="flex justify-center w-full sm:w-auto">
                <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-5 md:p-6 border border-pink-100 rounded-2xl w-full max-w-sm">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <img src={r.img} alt={r.name} className="flex-shrink-0 rounded-full w-14 h-14 object-cover ring-2 ring-pink-200" />
                    <div className="flex-1">
                      <h4 className="mb-1 font-semibold text-gray-800 text-sm sm:text-base md:text-lg">{r.name}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-4 text-gray-600 text-xs sm:text-sm leading-relaxed italic">"{r.text}"</p>
                </div>
              </div>
            ))}
          </div>
          <button aria-label="Next" className="hidden sm:flex justify-center items-center hover:bg-pink-100 rounded-full w-14 h-14 font-bold text-[#aa1824] text-3xl transition-colors border border-pink-200">
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
