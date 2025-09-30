import Link from "next/link"
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Your School Name</h3>
                <p className="text-sm text-blue-200">Sitamarhi, Bihar</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm">
              Committed to excellence in education and nurturing future leaders through quality learning and holistic
              development.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#academics" className="text-blue-200 hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="#admissions" className="text-blue-200 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="#faculty" className="text-blue-200 hover:text-white transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-blue-200 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Student Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Online Fee Payment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Download Results
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Timetables
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Syllabus
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-200 mt-0.5 flex-shrink-0" />
                <div className="text-blue-200">
                  Main Road, Sitamarhi
                  <br />
                  Bihar - 843302, India
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-200 flex-shrink-0" />
                <span className="text-blue-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-200 flex-shrink-0" />
                <span className="text-blue-200">info@yourschool.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-600 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <div>© 2025 Your School Name. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
