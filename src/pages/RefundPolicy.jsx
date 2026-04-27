import { Link } from 'react-router-dom'

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="text-[#aa1824] hover:underline text-sm mb-6 inline-block">← Back to Home</Link>
        <h1 className="text-3xl font-bold text-[#aa1824] mb-6">Refund &amp; Cancellation Policy</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Cancellation Policy</h2>
            <p>Orders can be cancelled within 24 hours of placement. Once an order has been dispatched, it cannot be cancelled. To cancel an order, please contact us immediately at bd@zeenmediconnect.com or call +91 9217528957.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Return Eligibility</h2>
            <p>We accept returns under the following conditions:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>The product is damaged or defective upon delivery</li>
              <li>The wrong product was delivered</li>
              <li>The product is unused, unopened, and in its original packaging</li>
              <li>Return request is raised within 7 days of delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Non-Returnable Items</h2>
            <p>For hygiene and safety reasons, opened or used products cannot be returned unless they are defective. Products damaged due to misuse or improper handling are not eligible for return.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Refund Process</h2>
            <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed within 7–10 business days to your original payment method.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Shipping Costs for Returns</h2>
            <p>If the return is due to a defective or wrong product, we will bear the return shipping cost. For other eligible returns, the customer is responsible for return shipping charges.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Exchange Policy</h2>
            <p>We currently do not offer direct exchanges. If you wish to exchange a product, please initiate a return and place a new order.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. How to Initiate a Return</h2>
            <p>To initiate a return, please email us at bd@zeenmediconnect.com with your order number, reason for return, and photos of the product (if damaged). Our team will guide you through the process.</p>
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
