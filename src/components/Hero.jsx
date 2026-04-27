import bg2 from '../assets/bg2.png'
import ee from '../assets/ee.png'
import ISO from '../assets/ISO.png'
import FDA from '../assets/FDA.png'
import GMP from '../assets/GMP.png'
import Ayurvedic from '../assets/Ayurvedic.png'
import Natural from '../assets/Natural.png'
import Specially from '../assets/Specially.png'
import Truck from '../assets/Truck.png'
import HeadPhone from '../assets/HeadPhone.png'
import Ok from '../assets/Ok.png'
import Clock from '../assets/Clock.png'

const badges = [
  { img: ISO, label1: 'ISO', label2: 'Certified' },
  { img: FDA, label1: 'FDA', label2: 'Approved' },
  { img: GMP, label1: 'GMP', label2: 'Certified' },
  { img: Ayurvedic, label1: '100%', label2: 'Ayurvedic' },
  { img: Natural, label1: 'Natural', label2: 'Pure Herbs' },
  { img: Specially, label1: 'Specially', label2: 'Formulated' },
]

const features = [
  { img: Truck, title: 'FREE SHIPPING', text: 'Get free shipping on all orders above $50. Shop Now.' },
  { img: HeadPhone, title: '24X7 SUPPORT', text: 'Our team is always ready to support 24x7.' },
  { img: Ok, title: '100% GENUINE', text: 'Our products are 100% genuine and ethically sourced.' },
  { img: Clock, title: 'EASY RETURN', text: "Easy return incase you don't like it or have issues" },
]

export default function Hero() {
  return (
    <div className="relative flex bg-[#aa1541] md:bg-[#c2c7c9] w-full h-[110vh] md:h-[calc(100vh-280px)] min-h-[600px]">
      {/* Desktop */}
      <img src={bg2} alt="Pink Bg" className="hidden md:block mx-auto w-full h-full" />
      <div className="hidden md:block">
        <div className="top-0 left-0 absolute mx-auto mt-3 p-6 w-full max-w-7xl">
          <h1 className="mt-4 ml-10 font-extrabold text-[70px] text-white uppercase leading-tight tracking-wide" style={{ fontFamily: 'Bebas Neue' }}>
            Rediscover. Rejuvenate.
          </h1>
          <p className="ml-10 text-[#f5c755] text-2xl tracking-wide">pure ayurvedic wellness for a confident life</p>
          <div className="gap-4 grid grid-cols-2 md:grid-cols-3 mt-8 ml-10 md:pr-[calc(100%-500px)]">
            {badges.map((b) => (
              <div key={b.label1} className="flex flex-col items-center gap-0 font-[300]">
                <div className="w-20 h-20">
                  <img src={b.img} alt={b.label1} className="w-full h-full object-contain" />
                </div>
                <div className="-mt-1 text-center leading-tight">
                  <p className="text-white text-lg leading-tight">{b.label1}</p>
                  <p className="text-white text-lg leading-tight">{b.label2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature bar */}
        <div className="bottom-[-65px] left-1/2 z-50 absolute flex md:flex-row flex-col justify-between items-center bg-[#aa1541] px-4 w-[1200px] max-w-[100%] h-[30%] -translate-x-1/2 transform">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col justify-between p-3 border-2 border-white w-[24%] h-[80%]">
              <h1 className="mb-2 font-bold text-white text-xl text-center">{f.title}</h1>
              <div className="flex justify-between items-center">
                <img src={f.img} alt={f.title} className="w-20 h-20 object-contain" />
                <p className="ml-2 font-[500] text-white text-sm">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <img src={ee} alt="Mobile Banner" className="mb-2 w-full h-auto object-cover" />
        <div className="top-0 left-0 absolute mt-8 p-4 w-full">
          <h1 className="mb-4 font-extrabold text-white text-3xl text-center uppercase leading-tight tracking-wide" style={{ fontFamily: 'Bebas Neue' }}>
            Rediscover. Rejuvenate.
          </h1>
          <p className="mb-8 text-[#f5c755] text-lg text-center tracking-wide">pure ayurvedic wellness for a confident life</p>
          <div className="flex gap-6 pb-4 overflow-x-auto">
            {badges.map((b) => (
              <div key={b.label1} className="flex flex-col flex-shrink-0 items-center gap-2 min-w-[80px]">
                <div className="w-16 h-16">
                  <img src={b.img} alt={b.label1} className="w-full h-full object-contain" />
                </div>
                <div className="text-center">
                  <p className="text-white text-xs leading-tight">{b.label1}</p>
                  <p className="text-white text-xs leading-tight">{b.label2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile feature bar */}
        <div className="bottom-[15%] left-0 absolute flex mt-8 p-4 w-full overflow-x-auto">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col justify-between p-3 border-2 border-white w-auto h-[80%]">
              <h1 className="mb-2 font-bold text-white text-xl text-center">{f.title}</h1>
              <div className="flex flex-col justify-between items-center">
                <img src={f.img} alt={f.title} className="w-12 h-12 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
