import { Link } from 'react-router-dom'
import emailIcon from '../assets/email.png'
import callIcon from '../assets/call2.png'

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-8 sm:py-10 md:py-12 w-full text-white">
      <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-6 w-16 h-1 bg-[#aa1541] rounded-full"></div>
          <p className="mb-4 text-gray-400 lg:text-[16px] text-xs sm:text-sm leading-relaxed">
            Please note that the efficacy and safety of Amero have not been evaluated by the Food and Drug Administration (FDA). The FDA evaluates foods and drugs, not dietary supplements like these. These products are not intended to diagnose, prevent, treat, or cure any disease.
          </p>
          <p className="mb-4 text-gray-400 lg:text-[16px] text-xs sm:text-sm leading-relaxed">
            These products are formulated to complement a healthy lifestyle and regular wellness routine. Always consult with a qualified healthcare professional before starting any new supplement, topical gel, or diet plan to ensure it aligns with your personal health needs.
          </p>
          <p className="mb-6 text-gray-400 lg:text-[16px] text-xs sm:text-sm leading-relaxed">
            Marketed By: Zeen Mediconnect OPC Private Limited Address- Unit No. 417, Tower A1, Tech Park, Sohna Road, Sec 49, Gurgaon, Sadar Bazar, Gurugram, Haryana-122001 (India)
          </p>
          <div className="flex md:flex-row flex-col justify-center items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <img src={emailIcon} className="w-5 h-5" alt="email" />
              <span className="text-gray-300">Customer Care: +91 9217528957</span>
            </div>
            <span className="hidden md:block text-gray-600">|</span>
            <div className="flex items-center gap-2 text-sm">
              <img src={callIcon} className="w-5 h-5" alt="call" />
              <span className="text-gray-300">bd@zeenmediconnect.com</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 text-sm">
            <Link to="/disclaimer" className="text-gray-400 hover:text-white hover:underline transition-colors">Disclaimer</Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms" className="text-gray-400 hover:text-white hover:underline transition-colors">Terms &amp; Conditions</Link>
            <span className="text-gray-600">|</span>
            <Link to="/privacypolicy" className="text-gray-400 hover:text-white hover:underline transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">|</span>
            <Link to="/refund" className="text-gray-400 hover:text-white hover:underline transition-colors">Refund &amp; Cancellation Policy</Link>
          </div>
          <div className="mx-auto mb-4 w-full h-px bg-gray-800"></div>
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2026, Zeen Mediconnect OPC Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
