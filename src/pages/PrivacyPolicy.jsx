import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="text-[#aa1824] hover:underline text-sm mb-6 inline-block">← Back to Home</Link>
        <h1 className="text-3xl font-bold text-[#aa1824] mb-6">Privacy Policy</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">

          <p>
            This Privacy Policy describes how Zeen Mediconnect OPC Pvt. Ltd. collects, uses, stores, and protects your personal information when you use{' '}
            <a href="https://ameora.in/" className="text-[#aa1824] hover:underline">https://ameora.in/</a> (the "Website"). By accessing or using our Website, you agree to the terms of this Privacy Policy.
          </p>
          <p>
            We are committed to safeguarding your privacy and ensuring your personal data is handled responsibly and transparently.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Personal Information:</strong> Name, email address, phone number, billing/shipping address, and payment details.</li>
              <li><strong>Non-Personal Information:</strong> Browser type, device details, IP address, cookies, and usage data.</li>
              <li><strong>Voluntary Submissions:</strong> Information you provide through forms, surveys, or direct communication.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Processing and fulfilling your orders.</li>
              <li>Providing customer support and responding to inquiries.</li>
              <li>Sending updates, promotions, or service-related communications (if you opt-in).</li>
              <li>Improving our Website's functionality, user experience, and services.</li>
              <li>Legal and security purposes, such as fraud prevention and compliance with applicable laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Sharing of Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Service Providers:</strong> Trusted third parties (e.g., payment processors, delivery partners) who assist in running our services.</li>
              <li><strong>Legal Requirements:</strong> Authorities, if required by law, regulation, or legal process.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or restructuring, your data may be transferred to the new entity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Cookies &amp; Tracking Technologies</h2>
            <p className="mb-2">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Enhance user experience.</li>
              <li>Track website traffic and performance.</li>
              <li>Store user preferences.</li>
            </ul>
            <p className="mt-2">You can adjust your browser settings to decline cookies, but some features of the Website may not function properly.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, misuse, loss, or alteration. However, no method of online transmission or storage is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Data Retention</h2>
            <p>We retain your personal information only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Rights</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access, update, or correct your personal information.</li>
              <li>Request deletion of your personal data.</li>
              <li>Withdraw consent for marketing communications.</li>
              <li>Restrict or object to certain data processing activities.</li>
            </ul>
            <p className="mt-2">To exercise these rights, contact us at <a href="mailto:bd@zeenmediconnect.com" className="text-[#aa1824] hover:underline">bd@zeenmediconnect.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Third-Party Links</h2>
            <p>Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Children's Privacy</h2>
            <p>Our Website and services are not intended for children under 18 years of age. We do not knowingly collect personal information from minors.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Changes to this Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. Continued use of our Website after changes indicates your acceptance of the revised policy.</p>
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
