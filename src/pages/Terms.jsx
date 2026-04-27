import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="text-[#aa1824] hover:underline text-sm mb-6 inline-block">← Back to Home</Link>
        <h1 className="text-3xl font-bold text-[#aa1824] mb-6">Terms &amp; Conditions</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Products & Orders</h2>
            <p>All orders placed through this website are subject to availability and confirmation. We reserve the right to refuse or cancel any order at our discretion. Prices are subject to change without notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not misuse this website by introducing viruses or other malicious material.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Intellectual Property</h2>
            <p>All content on this website including text, graphics, logos, images, and software is the property of Zeen Mediconnect OPC Private Limited and is protected by applicable intellectual property laws. Unauthorized use is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Zeen Mediconnect OPC Private Limited shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our products.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Contact Us</h2>
            <p>For any questions regarding these Terms &amp; Conditions, please contact us at bd@zeenmediconnect.com or call +91 9217528957.</p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>Marketed By: Zeen Mediconnect OPC Private Limited, Unit No. 417, Tower A1, Tech Park, Sohna Road, Sec 49, Gurugram, Haryana-122001 (India)</p>
          <p className="mt-1">Contact: +91 9217528957 | bd@zeenmediconnect.com</p>
        </div>
      </div>
    </div>
  )
}
