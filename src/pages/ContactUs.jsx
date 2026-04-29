import { Link } from 'react-router-dom'

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="text-[#aa1824] hover:underline text-sm mb-6 inline-block">← Back to Home</Link>
        <h1 className="text-3xl font-bold text-[#aa1824] mb-2">Contact Us</h1>
        <div className="w-14 h-1 bg-[#aa1824] rounded-full mb-8" />

        <p className="text-gray-700 leading-relaxed mb-8">
          We'd love to hear from you. Reach out to us for any queries, support, or feedback and our team will get back to you as soon as possible.
        </p>

        <div className="bg-pink-50 border border-pink-100 rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#aa1824] flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8a15.4 15.4 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1L6.6 10.8z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Phone</p>
              <a href="tel:+919217528957" className="text-lg font-semibold text-gray-800 hover:text-[#aa1824] transition-colors">
                +91 92175 28957
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#aa1824] flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Email</p>
              <a href="mailto:bd@zeenmediconnect.com" className="text-lg font-semibold text-gray-800 hover:text-[#aa1824] transition-colors">
                bd@zeenmediconnect.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>Marketed By: Zeen Mediconnect OPC Private Limited, Unit No. 417, Tower A1, Tech Park, Sohna Road, Sec 49, Gurugram, Haryana-122001 (India)</p>
        </div>
      </div>
    </div>
  )
}
