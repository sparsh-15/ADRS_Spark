// import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       {/* Main Footer Content */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div>
//             <h3 className="text-2xl font-bold mb-6">ADRS Spark</h3>
//             <p className="text-gray-400 mb-6">
//               Empowering professionals through cutting-edge training and education since 2015.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 <Facebook className="h-6 w-6" />
//                 <span className="sr-only">Facebook</span>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 <Twitter className="h-6 w-6" />
//                 <span className="sr-only">Twitter</span>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 <Instagram className="h-6 w-6" />
//                 <span className="sr-only">Instagram</span>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 <Linkedin className="h-6 w-6" />
//                 <span className="sr-only">LinkedIn</span>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 <Youtube className="h-6 w-6" />
//                 <span className="sr-only">YouTube</span>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 relative">
//               Quick Links
//               <span className="absolute bottom-0 left-0 w-12 h-1 bg-purple-600 -mb-2"></span>
//             </h4>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Courses
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Events
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Programs */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 relative">
//               Our Programs
//               <span className="absolute bottom-0 left-0 w-12 h-1 bg-purple-600 -mb-2"></span>
//             </h4>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Data Science
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Machine Learning
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Business Intelligence
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Deep Learning
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Data Engineering
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   AI for Business
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 relative">
//               Contact Us
//               <span className="absolute bottom-0 left-0 w-12 h-1 bg-purple-600 -mb-2"></span>
//             </h4>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <MapPin className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0" />
//                 <span className="text-gray-400">
//                   123 Dadda Nagar, Near Katangi
//                   <br />
//                   Highway, Jabalpur
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <Phone className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0" />
//                 <span className="text-gray-400">9876543210</span>
//               </li>
//               <li className="flex items-center">
//                 <Mail className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0" />
//                 <a
//                   href="mailto:info@adrsspark.com"
//                   className="text-gray-400 hover:text-white transition-colors duration-300"
//                 >
//                   support@adrstechno.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Newsletter */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-6 md:mb-0">
//               <h4 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h4>
//               <p className="text-gray-400">Stay updated with our latest courses and events</p>
//             </div>
//             <div className="w-full md:w-auto">
//               <form className="flex flex-col sm:flex-row gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email address"
//                   className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
//                 />
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="bg-gray-950 py-6">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-500 text-sm mb-4 md:mb-0">
//               &copy; {new Date().getFullYear()} ADRS Spark. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#111111] text-[#CCCCCC]">
//       {/* Main Footer */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-6">ADRS Spark</h3>
//             <p className="text-[#bbbbbb] mb-6">
//               Empowering professionals through cutting-edge training and education since 2015.
//             </p>
//             <div className="flex space-x-4">
//               {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="text-[#888888] hover:text-[#B2CD9C] transition-colors duration-300"
//                 >
//                   <Icon className="h-5 w-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-6 relative">
//               Quick Links
//               <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#B2CD9C] -mb-2"></span>
//             </h4>
//             <ul className="space-y-3">
//               {["About Us", "Courses", "Events", "Blog", "Careers", "Contact"].map((item, i) => (
//                 <li key={i}>
//                   <a
//                     href="#"
//                     className="text-[#aaaaaa] hover:text-[#B2CD9C] transition-colors duration-300"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Programs */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-6 relative">
//               Our Programs
//               <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#B2CD9C] -mb-2"></span>
//             </h4>
//             <ul className="space-y-3">
//               {[
//                 "Data Science",
//                 "Machine Learning",
//                 "Business Intelligence",
//                 "Deep Learning",
//                 "Data Engineering",
//                 "AI for Business",
//               ].map((item, i) => (
//                 <li key={i}>
//                   <a
//                     href="#"
//                     className="text-[#aaaaaa] hover:text-[#B2CD9C] transition-colors duration-300"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-6 relative">
//               Contact Us
//               <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#B2CD9C] -mb-2"></span>
//             </h4>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <MapPin className="h-5 w-5 text-[#B2CD9C] mr-3" />
//                 <span>123 Dadda Nagar, Near Katangi<br />Highway, Jabalpur</span>
//               </li>
//               <li className="flex items-center">
//                 <Phone className="h-5 w-5 text-[#B2CD9C] mr-3" />
//                 <span>9876543210</span>
//               </li>
//               <li className="flex items-center">
//                 <Mail className="h-5 w-5 text-[#B2CD9C] mr-3" />
//                 <a
//                   href="mailto:support@adrstechno.com"
//                   className="hover:text-[#B2CD9C] transition"
//                 >
//                   support@adrstechno.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Newsletter */}
//       <div className="border-t border-[#222222]">
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-6 md:mb-0">
//               <h4 className="text-lg font-semibold text-white mb-2">
//                 Subscribe to our newsletter
//               </h4>
//               <p className="text-[#999999]">Stay updated with our latest courses and events</p>
//             </div>
//             <form className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="px-4 py-2 bg-[#1a1a1a] text-white border border-[#333333] rounded-lg focus:outline-none focus:border-[#B2CD9C]"
//               />
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-[#B2CD9C] text-[#111111] rounded-lg hover:bg-[#a3b98a] transition"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="bg-[#0D0D0D] py-6">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm text-[#777777] mb-4 md:mb-0">
//             &copy; {new Date().getFullYear()} ADRS Spark. All rights reserved.
//           </p>
//           <div className="flex space-x-6">
//             {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="text-sm text-[#777777] hover:text-[#B2CD9C] transition"
//               >
//                 {text}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
    <footer className="bg-gradient-to-tr from-[#0d0d0d] via-[#1a1a1a] to-[#0f0f0f] text-[#e0e0e0]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold text-[#B2CD9C] mb-6">ADRS Spark</h3>
            <p className="text-[#cccccc] mb-6">
              Empowering professionals through cutting-edge training and education since 2015.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#B2CD9C] hover:text-[#111] transition duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 border-b-2 border-[#B2CD9C] inline-block">
              Quick Links
            </h4>
            <ul className="space-y-4 mt-4">
              {[
                "About Us",
                "Courses",
                "Events",
                "Blog",
                "Careers",
                "Contact",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#B2CD9C] text-[#bbbbbb] hover:pl-2 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 border-b-2 border-[#B2CD9C] inline-block">
              Our Programs
            </h4>
            <ul className="space-y-4 mt-4">
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
                    className="hover:text-[#B2CD9C] text-[#bbbbbb] hover:pl-2 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 border-b-2 border-[#B2CD9C] inline-block">
              Contact Us
            </h4>
            <ul className="space-y-6 mt-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-[#B2CD9C] mr-3" />
                <span>123 Dadda Nagar, Near Katangi<br />Highway, Jabalpur</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-[#B2CD9C] mr-3" />
                <span>9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-[#B2CD9C] mr-3" />
                <a
                  href="mailto:support@adrstechno.com"
                  className="hover:text-[#B2CD9C]"
                >
                  support@adrstechno.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[#0a0a0a] border-t border-[#1f1f1f]">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-semibold text-white mb-2">Subscribe to our newsletter</h4>
              <p className="text-[#aaaaaa]">Stay updated with our latest courses and events</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-[#1a1a1a] text-white border border-[#333333] rounded-md focus:outline-none focus:border-[#B2CD9C]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#B2CD9C] text-[#111] rounded-md hover:bg-[#a3b98a] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#050505] py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#666666] mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ADRS Spark. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
            ].map((text, i) => (
              <a
                key={i}
                href="#"
                className="text-sm text-[#666666] hover:text-[#B2CD9C]"
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
