import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#e0e0e0] text-sm">
      {/* Newsletter */}
    <div className="bg-[#0a0a0a] border-t border-[#1f1f1f]">
  <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10 lg:py-12">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl">
        <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
          Stay Updated with <span className="text-[#B2CD9C]">ADRS Spark</span>
        </h4>
        <p className="text-[#bbbbbb] text-sm sm:text-base leading-relaxed">
          Subscribe to our newsletter and never miss out on our latest courses, events, and offers.
        </p>
      </div>

      {/* Form Section */}
      <form className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow w-full px-4 py-2.5 bg-[#1a1a1a] text-white border border-[#333] rounded-md placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-[#B2CD9C] transition duration-300 text-sm tracking-wide"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-[#B2CD9C] text-[#111] font-medium rounded-md hover:bg-[#a3b98a] transition duration-300 shadow-sm hover:shadow-md text-sm"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</div>



      {/* Main Footer */}
      <div className="border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold text-[#B2CD9C] mb-4">ADRS Spark</h3>
              <p className="text-[#cccccc] mb-4 leading-relaxed text-[14px]">
                Empowering professionals through cutting-edge training and education since 2015.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#B2CD9C] hover:text-[#111] transition duration-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 border-b border-[#B2CD9C] inline-block">
                Quick Links
              </h4>
              <ul className="space-y-3 mt-3">
                {["About Us", "Courses", "Events", "Blog", "Careers", "Contact"].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-[#B2CD9C] text-[#bbbbbb] hover:pl-1 transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Programs */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 border-b border-[#B2CD9C] inline-block">
                Our Programs
              </h4>
              <ul className="space-y-3 mt-3">
                {[
                  "Data Science",
                  "Machine Learning",
                  "Business Intelligence",
                  "Deep Learning",
                  "Data Engineering",
                  "AI for Business",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-[#B2CD9C] text-[#bbbbbb] hover:pl-1 transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4 border-b border-[#B2CD9C] inline-block">
                Contact Us
              </h4>
              <ul className="space-y-4 mt-3 text-[14px]">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#B2CD9C] mr-2 mt-1" />
                  <span>123 Dadda Nagar, Near Katangi<br />Highway, Jabalpur</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-[#B2CD9C] mr-2" />
                  <span>9876543210</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-[#B2CD9C] mr-2" />
                  <a href="mailto:support@adrstechno.com" className="hover:text-[#B2CD9C]">
                    support@adrstechno.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-[#666666]">
            &copy; {new Date().getFullYear()} ADRS Spark. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text, i) => (
              <a
                key={i}
                href="#"
                className="text-xs text-[#666666] hover:text-[#B2CD9C]"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;