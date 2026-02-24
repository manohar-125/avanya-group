import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-24">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-12">

        {/* Company Info */}
        <div>
          <Image
            src="/logo.jpeg"
            alt="Avanya Group"
            width={140}
            height={60}
            className="mb-6"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            Avanya Pratap Service and Construction is a registered
            government contractor delivering infrastructure,
            civil, and technical services across multiple departments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6">
            Contact Information
          </h3>

          <div className="space-y-4 text-gray-300 text-sm">

            <div className="flex items-start gap-3">
              <Phone size={18} className="text-primary mt-1" />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="text-primary mt-1" />
              <span>info@avanyagroup.in</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-1" />
              <span>
                Khajuriya, Ghazipur,
                Uttar Pradesh, India
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-600 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Avanya Group. All Rights Reserved.
      </div>

    </footer>
  );
}