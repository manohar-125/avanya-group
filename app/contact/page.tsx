"use client";

import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";

// NOTE: Per-page metadata is not supported in "use client" components.
// This route is covered by the root layout's metadata.

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

//   const sendEmail = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.current) return;

//     setLoading(true);

//     try {
//       await emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         form.current,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
//       );

//       form.current.reset();
//       setShowToast(true);

//       setTimeout(() => {
//         setShowToast(false);
//       }, 3000);
//     } catch (error) {
//       console.error("EmailJS error:", error);
//       alert("Failed to send message. Please try again later.");
//     }

//     setLoading(false);
//   };

    const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();

  // Prototype mode only
  alert("Prototype Mode: Email functionality will be enabled after deployment.");

  form.current?.reset();
};

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-white shadow-xl border rounded-lg px-6 py-4 flex items-center gap-3 animate-fade-in z-50">
          <CheckCircle className="text-green-500" />
          <span className="text-secondary font-medium">
            Message sent successfully!
          </span>
        </div>
      )}

      <main className="py-28 bg-gray-50 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary">Contact Us</h1>
            <p className="mt-4 text-gray-600">
              Reach out to discuss your project requirements or tender
              opportunities.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Phone</h3>
                  <p className="text-gray-600">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Email</h3>
                  <p className="text-gray-600">info@avanyagroup.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">
                    Office Address
                  </h3>
                  <p className="text-gray-600">
                    Khajuriya, Ghazipur, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full border rounded-md p-3 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full border rounded-md p-3 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="mt-2 w-full border rounded-md p-3 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full border rounded-md p-3 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                {/* Gradient Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-md font-medium text-white flex items-center justify-center gap-2 transition
                  bg-linear-to-r from-primary to-secondary hover:opacity-90 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              title="Avanya Group Office Location — Ghazipur, Uttar Pradesh"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1799.4036947666837!2d83.56401534999998!3d25.5780741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991ff0e5c6af5e7%3A0xdaf2422028ee693!2sRamlila%20Maidan%2C%20NH%2029%2C%20Kacheri%2C%20Ghazipur%2C%20Uttar%20Pradesh%20233001!5e0!3m2!1sen!2sin!4v1771961078746!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
