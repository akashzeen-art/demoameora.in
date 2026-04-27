import { useState } from 'react'
import { Link } from 'react-router-dom'
import WomenCapsules from '../assets/WomenCapsules.png'

const PRICE = 1099

export default function Cart() {
  const [qty, setQty] = useState(1)
  const [shipping, setShipping] = useState('free')
  const [discount, setDiscount] = useState('')
  const [form, setForm] = useState({
    phone: '', email: '', firstName: '', lastName: '',
    address: '', apartment: '', city: '', postcode: '', state: '', country: '',
  })
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const shippingCost = shipping === 'express' ? 9 : 0
  const total = PRICE * qty + shippingCost

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!agreed) {
      alert('Please agree to the Terms & Conditions and Privacy Policy.')
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-[#aa1824] mb-2">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-2">Thank you, <strong>{form.firstName}</strong>! Your order has been received.</p>
          <p className="text-gray-500 text-sm mb-6">Our team will contact you at <strong>{form.phone}</strong> to confirm your order.</p>
          <Link to="/" className="bg-[#aa1541] text-white px-8 py-3 rounded-full font-bold hover:bg-[#8e1136] transition">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Top bar */}
      <div className="border-b border-gray-200 px-4 py-3 flex items-center">
        <Link to="/" className="text-gray-500 hover:text-gray-800 text-sm absolute">← Back</Link>
        <p className="text-base text-gray-500 mx-auto">Healthy Clitoris | Rejuvenate You</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row flex-1 max-w-6xl mx-auto w-full px-4 py-8 gap-10">

        {/* LEFT – Shipping Address + Shipping Method */}
        <div className="flex-1 space-y-8">

          {/* Shipping Address */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Shipping Address</h2>
            <div className="space-y-3">
              <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number*"
                className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#aa1541]" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email*"
                className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#aa1541]" />
              <div className="grid grid-cols-2 gap-3">
                <input required name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name*"
                  className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#aa1541]" />
                <input required name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name*"
                  className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#aa1541]" />
              </div>
              <input required name="address" value={form.address} onChange={handleChange} placeholder="House number and street name"
                className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#aa1541]" />
              <input name="apartment" value={form.apartment} onChange={handleChange} placeholder="Apartment, suite, unit, etc. (optional)"
                className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#aa1541]" />
              <input required name="city" value={form.city} onChange={handleChange} placeholder="City name*"
                className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#aa1541]" />
              <div className="grid grid-cols-2 gap-3">
                <input required name="postcode" value={form.postcode} onChange={handleChange} placeholder="Postcode*"
                  className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#aa1541]" />
                <input required name="state" value={form.state} onChange={handleChange} placeholder="State*"
                  className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#aa1541]" />
              </div>
              <input required name="country" value={form.country} onChange={handleChange} placeholder="Country*"
                className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#aa1541]" />
            </div>
          </div>

          {/* Shipping Method */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Shipping Method</h2>
            <div className="space-y-3">
              <label className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition ${shipping === 'free' ? 'border-[#aa1541] bg-pink-50' : 'border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" name="shippingMethod" checked={shipping === 'free'} onChange={() => setShipping('free')} className="accent-[#aa1541]" />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Free Shipping</p>
                    <p className="text-xs text-gray-500">7–20 Days</p>
                  </div>
                </div>
                <span className="font-semibold text-gray-800">₹0</span>
              </label>
              <label className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition ${shipping === 'express' ? 'border-[#aa1541] bg-pink-50' : 'border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" name="shippingMethod" checked={shipping === 'express'} onChange={() => setShipping('express')} className="accent-[#aa1541]" />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Express Shipping</p>
                    <p className="text-xs text-gray-500">1–3 Days</p>
                  </div>
                </div>
                <span className="font-semibold text-gray-800">₹9</span>
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT – Cart Summary */}
        <div className="w-full lg:w-[400px] space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Cart</h2>
            <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4">
              <img src={WomenCapsules} alt="Ameora" className="w-16 h-16 object-contain" />
              <div className="flex-1">
                <p className="font-medium text-gray-800 text-sm">Ameora</p>
                <div className="flex items-center gap-2 mt-2">
                  <button type="button" onClick={() => setQty(q => Math.max(1, q - 1))}
                    className="w-7 h-7 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg leading-none">−</button>
                  <span className="text-sm font-semibold w-6 text-center">{qty}</span>
                  <button type="button" onClick={() => setQty(q => q + 1)}
                    className="w-7 h-7 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg leading-none">+</button>
                </div>
              </div>
              <p className="font-semibold text-gray-800">₹{(PRICE * qty).toFixed(2)}</p>
            </div>
          </div>

          {/* Discount Code */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Discount code</p>
            <div className="flex gap-2">
              <input value={discount} onChange={e => setDiscount(e.target.value)} placeholder="Enter code"
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#aa1541]" />
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition">Apply</button>
            </div>
          </div>

          {/* Price Summary */}
          <div className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Price (inclusive of taxes)</span>
              <span>₹{(PRICE * qty).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 text-base border-t border-gray-200 pt-2">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Agree checkbox */}
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-0.5 accent-[#aa1541]" />
            <span className="text-xs text-gray-600">
              I have read and agree to the{' '}
              <Link to="/terms" className="text-[#aa1541] hover:underline">Terms &amp; Conditions</Link>
              {' '}and{' '}
              <Link to="/privacypolicy" className="text-[#aa1541] hover:underline">Privacy Policy</Link>.
            </span>
          </label>

          {/* Place Order */}
          <button type="submit"
            className="w-full bg-[#aa1541] hover:bg-[#8e1136] text-white font-bold py-3 rounded text-base transition">
            Place Order
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        Zeen Mediconnect OPC Pvt Ltd. &nbsp;|&nbsp; All Rights Reserved © 2026.
      </div>
    </div>
  )
}
