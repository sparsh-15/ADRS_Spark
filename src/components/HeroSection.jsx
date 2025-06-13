

// "use client"

// import { useState } from "react"
// import { ChevronDown, ChevronUp } from "lucide-react"

// const HeroSection = () => {
//   const [showMoreCourses, setShowMoreCourses] = useState(false)

//   const initialCourses = [
//     { id: 1, title: "Data Science Fundamentals", description: "Learn the basics of data analysis and visualization", image: "/placeholder.svg?height=200&width=300", duration: "8 weeks" },
//     { id: 2, title: "Advanced Machine Learning", description: "Master machine learning algorithms and applications", image: "/placeholder.svg?height=200&width=300", duration: "12 weeks" },
//     { id: 3, title: "Business Intelligence", description: "Transform data into actionable business insights", image: "/placeholder.svg?height=200&width=300", duration: "10 weeks" },
//   ]

//   const additionalCourses = [
//     { id: 4, title: "Deep Learning Specialization", description: "Neural networks, computer vision, and NLP applications", image: "/placeholder.svg?height=200&width=300", duration: "16 weeks" },
//     { id: 5, title: "Data Engineering Pipeline", description: "Build robust data pipelines and infrastructure", image: "/placeholder.svg?height=200&width=300", duration: "14 weeks" },
//     { id: 6, title: "AI for Business Leaders", description: "Strategic implementation of AI in business contexts", image: "/placeholder.svg?height=200&width=300", duration: "6 weeks" },
//   ]

//   const displayedCourses = showMoreCourses ? [...initialCourses, ...additionalCourses] : initialCourses

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-[#B2CD9C] to-[#A0C49D] text-[#1B3B2F]">
//         <div className="container mx-auto px-4 py-20 md:py-32">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-10 md:mb-0">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Transform Your Career with ADRS Spark</h1>
//               <p className="text-xl mb-8">Industry-leading training programs to accelerate your professional growth</p>
//               <button className="bg-white text-[#4A705A] px-8 py-3 rounded-lg font-semibold hover:bg-[#f0f9ea] transition duration-300">
//                 Explore Programs
//               </button>
//             </div>
//             <div className="md:w-1/2 grid grid-cols-2 gap-4">
//               <img src="/src/assets/training1.jpg?height=300&width=300" 
//                    alt="Training Session" 
//                    className="rounded-lg shadow-lg" 
//               />
//               <img src="/src/assets/training2.jpg?height=300&width=300" 
//                    alt="Workshop" 
//                    className="rounded-lg shadow-lg mt-10" 
//               />
//               <img src="/src/assets/training3.jpg?height=300&width=300" 
//                    alt="Certification" 
//                    className="rounded-lg shadow-lg" 
//               />
//               <img src="/src/assets/training4.jpg?height=300&width=300" 
//                    alt="Online Learning" 
//                   className="rounded-lg shadow-lg mt-10" 
//               />
//             </div>
//           </div>
//         </div>
//         <div
//           className="absolute bottom-0 left-0 right-0 h-16 bg-white"
//           style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
//         ></div>
//       </div>

//       {/* Courses Section */}
//       <div className="bg-[#EAF3E2]">
//         <div className="container mx-auto px-4 py-20">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B3B2F]">Our Featured Courses</h2>
//             <p className="text-[#4A705A] max-w-2xl mx-auto">
//               Designed by industry experts to help you master the skills that employers need most
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {displayedCourses.map((course) => (
//               <div
//                 key={course.id}
//                 className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
//               >
//                 <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 text-[#1B3B2F]">{course.title}</h3>
//                   <p className="text-gray-600 mb-4">{course.description}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-[#4A705A] font-semibold">{course.duration}</span>
//                     <button className="text-sm bg-[#B2CD9C] text-[#1B3B2F] px-3 py-1 rounded-full hover:bg-[#A0C49D] transition duration-300">
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <button
//               onClick={() => setShowMoreCourses(!showMoreCourses)}
//               className="flex items-center justify-center mx-auto bg-[#4A705A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3c5c4d] transition duration-300"
//             >
//               {showMoreCourses ? (
//                 <>
//                   <span>Show Less</span>
//                   <ChevronUp className="ml-2 h-5 w-5" />
//                 </>
//               ) : (
//                 <>
//                   <span>More Courses</span>
//                   <ChevronDown className="ml-2 h-5 w-5" />
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroSection




"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// ✅ All Courses (with image and duration control)
const allCourses = [
  {
    id: 1,
    title: "Data Science Fundamentals",
    description: "Learn the basics of data analysis and visualization",
    image: "/src/assets/datascience.jpg",
    duration: "8 weeks"
  },
  {
    id: 2,
    title: "Advanced Machine Learning",
    description: "Master machine learning algorithms and applications",
    image: "/src/assets/ML.jpg",
    duration: "12 weeks"
  },
  {
    id: 3,
    title: "Business Intelligence",
    description: "Transform data into actionable business insights",
    image: "/src/assets/BI.jpg",
    duration: "10 weeks"
  },
  {
    id: 4,
    title: "Deep Learning Specialization",
    description: "Neural networks, computer vision, and NLP applications",
    image: "/src/assets/DeepLearning.jpg",
    duration: "16 weeks"
  },
  {
    id: 5,
    title: "Data Engineering Pipeline",
    description: "Build robust data pipelines and infrastructure",
    image: "/src/assets/Dataengg.jpg",
    duration: "14 weeks"
  },
  {
    id: 6,
    title: "AI for Business Leaders",
    description: "Strategic implementation of AI in business contexts",
    image: "/src/assets/AIforB.jpg",
    duration: "6 weeks"
  }
]

const HeroSection = () => {
  const [showMoreCourses, setShowMoreCourses] = useState(false)
  const displayedCourses = showMoreCourses ? allCourses : allCourses.slice(0, 3)

  return (
    <div className="w-full">

      {/* ✅ Hero Section */}
      <div className="relative bg-gradient-to-r from-[#B2CD9C] to-[#A0C49D] text-[#1B3B2F]">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Transform Your Career with ADRS Spark</h1>
              <p className="text-xl mb-8">Industry-leading training programs to accelerate your professional growth</p>
              <button className="bg-white text-[#4A705A] px-8 py-3 rounded-lg font-semibold hover:bg-[#f0f9ea] transition duration-300">
                Explore Programs
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img src="/src/assets/training1.jpg" 
                   alt="Training Session" 
                   className="rounded-lg shadow-lg" 
              />
              <img src="/src/assets/training2.jpg" 
                   alt="Workshop"
                   className="rounded-lg shadow-lg mt-10" 
              />
              <img src="/src/assets/training3.jpg" 
                   alt="Certification" 
                   className="rounded-lg shadow-lg" 
              />
              <img src="/src/assets/training4.jpg" 
                   alt="Online Learning" 
                   className="rounded-lg shadow-lg mt-10" 
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
      </div>

      {/* ✅ Courses Section */}
      <div className="bg-[#EAF3E2]">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B3B2F]">Our Featured Courses</h2>
            <p className="text-[#4A705A] max-w-2xl mx-auto">
              Designed by industry experts to help you master the skills that employers need most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1B3B2F]">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#4A705A] font-semibold">{course.duration}</span>
                    <button className="text-sm bg-[#B2CD9C] text-[#1B3B2F] px-3 py-1 rounded-full hover:bg-[#A0C49D] transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowMoreCourses(!showMoreCourses)}
              className="flex items-center justify-center mx-auto bg-[#4A705A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3c5c4d] transition duration-300"
            >
              {showMoreCourses ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="ml-2 h-5 w-5" />
                </>
              ) : (
                <>
                  <span>More Courses</span>
                  <ChevronDown className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
