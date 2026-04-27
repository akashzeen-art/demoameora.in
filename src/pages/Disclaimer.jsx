import { Link } from 'react-router-dom'

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="text-[#aa1824] hover:underline text-sm mb-6 inline-block">← Back to Home</Link>
        <h1 className="text-3xl font-bold text-[#aa1824] mb-6">Disclaimer</h1>

        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            The information provided on this website is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>
          <p>
            The products offered by Ameora / Zeen Mediconnect OPC Private Limited are not intended to diagnose, treat, cure, or prevent any disease. The statements made about these products have not been evaluated by the Food and Drug Administration (FDA) or any other regulatory authority.
          </p>
          <p>
            Results may vary from person to person. Individual results are not guaranteed and depend on various factors including but not limited to age, health condition, lifestyle, and adherence to usage instructions.
          </p>
          <p>
            Always consult with a qualified healthcare professional before starting any new supplement, topical gel, or wellness routine, especially if you are pregnant, nursing, have a medical condition, or are taking any medications.
          </p>
          <p>
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
          </p>
          <p>
            This website may contain links to other websites. These links are provided for your convenience. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>Marketed By: Zeen Mediconnect OPC Private Limited, Unit No. 417, Tower A1, Tech Park, Sohna Road, Sec 49, Gurugram, Haryana-122001 (India)</p>
          <p className="mt-1">Contact: +91 9217528957 | bd@zeenmediconnect.com</p>
        </div>
      </div>
    </div>
  )
}
