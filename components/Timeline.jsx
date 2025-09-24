// import {
//   BriefcaseIcon,
//   AcademicCapIcon,
//   BadgeCheckIcon,
//   StarIcon,
// } from '@heroicons/react/24/outline'
// import { motion } from 'framer-motion'

// const timelineData = [
//   {
//     id: 1,
//     type: 'work',
//     title: 'Associate Developer @ Wipro',
//     period: 'May 2021 – Present',
//     details: [
//       'Event-driven payment workflow (Kafka/Spring Boot)',
//       '2FA API (Auth-lite)',
//       'E-commerce onboarding',
//       'Production support',
//       'Internal Banking Portal project.',
//     ],
//   },
//   {
//     id: 2,
//     type: 'certification',
//     title: 'Certifications',
//     period: '',
//     details: [
//       'GCP Associate Cloud Engineer',
//       'GCP Professional Cloud Architect',
//       'GCP Professional Data Engineer',
//       'Gen-AI L1–L3',
//     ],
//   },
//   {
//     id: 3,
//     type: 'award',
//     title: 'Achievements',
//     period: '',
//     details: [
//       'Unit Award Top 100 Google Cloud Challenge (2025)',
//       'Victory League Awards (2021, 2022, 2024)',
//     ],
//   },
//   {
//     id: 4,
//     type: 'education',
//     title: 'Education',
//     period: '',
//     details: [
//       'B.Tech Computer Science (Silicon Institute of Technology, 2020)',
//       'DAV Public School Burla (2016, 2014)',
//     ],
//   },
// ]

// function Icon({ type }) {
//   switch (type) {
//     case 'work':
//       return <BriefcaseIcon className="w-7 h-7 text-accent" />
//     case 'certification':
//       return <BadgeCheckIcon className="w-7 h-7 text-accent" />
//     case 'award':
//       return <StarIcon className="w-7 h-7 text-accent" />
//     case 'education':
//       return <AcademicCapIcon className="w-7 h-7 text-accent" />
//     default:
//       return null
//   }
// }

// const cardVariants = {
//   hiddenLeft: { opacity: 0, x: -60 },
//   hiddenRight: { opacity: 0, x: 60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// }

// export default function Timeline() {
//   return (
//     <div className="relative max-w-4xl mx-auto before:absolute before:top-4 before:bottom-4 before:left-1/2 before:w-1 before:-translate-x-1/2 before:bg-accent/30">
//       {timelineData.map((item, index) => {
//         const isLeft = index % 2 === 0
//         return (
//           <motion.div
//             key={item.id}
//             className={`relative w-full mb-12 flex flex-col md:flex-row md:items-start md:justify-between ${
//               isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
//             }`}
//             initial={isLeft ? 'hiddenLeft' : 'hiddenRight'}
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={cardVariants}
//             custom={isLeft}
//           >
//             <div className="md:w-1/2 relative px-4">
//               <div className="absolute top-4 left-[calc(50%_-_14px)] md:left-auto md:right-[-14px] w-7 h-7 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-md">
//                 <Icon type={item.type} />
//               </div>
//               <div className="bg-slate-100 rounded-xl p-6 shadow-lg">
//                 <h3 className="text-xl font-semibold text-primary mb-1">{item.title}</h3>
//                 {item.period && <p className="text-sm text-gray-600 mb-3">{item.period}</p>}
//                 <ul className="list-disc list-inside space-y-1 text-gray-700">
//                   {item.details.map((line, idx) => (
//                     <li key={idx}>{line}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="flex-1" />
//           </motion.div>
//         )
//       })}
//     </div>
//   )
// }




//v2
// import {
//   BriefcaseIcon,
//   AcademicCapIcon,
//   BadgeCheckIcon,
//   StarIcon,
// } from '@heroicons/react/24/outline'
// console.log({ BriefcaseIcon, AcademicCapIcon, BadgeCheckIcon, StarIcon });
// import { motion } from 'framer-motion'

// const timelineData = [
//   {
//     id: 1,
//     type: 'work',
//     title: 'Associate Developer @ Wipro',
//     period: 'May 2021 – Present',
//     details: [
//       'Event-driven payment workflow (Kafka/Spring Boot)',
//       '2FA API (Auth-lite)',
//       'E-commerce onboarding',
//       'Production support',
//       'Internal Banking Portal project.',
//     ],
//   },
//   {
//     id: 2,
//     type: 'certification',
//     title: 'Certifications',
//     period: '',
//     details: [
//       'GCP Associate Cloud Engineer',
//       'GCP Professional Cloud Architect',
//       'GCP Professional Data Engineer',
//       'Gen-AI L1–L3',
//     ],
//   },
//   {
//     id: 3,
//     type: 'award',
//     title: 'Achievements',
//     period: '',
//     details: [
//       'Unit Award Top 100 Google Cloud Challenge (2025)',
//       'Victory League Awards (2021, 2022, 2024)',
//     ],
//   },
//   {
//     id: 4,
//     type: 'education',
//     title: 'Education',
//     period: '',
//     details: [
//       'B.Tech Computer Science (Silicon Institute of Technology, 2020)',
//       'DAV Public School Burla (2016, 2014)',
//     ],
//   },
// ]

// function Icon({ type }) {
//   switch (type) {
//     case 'work':
//       return <BriefcaseIcon className="w-7 h-7 text-accent" />
//     case 'certification':
//       return <BadgeCheckIcon className="w-7 h-7 text-accent" />
//     case 'award':
//       return <StarIcon className="w-7 h-7 text-accent" />
//     case 'education':
//       return <AcademicCapIcon className="w-7 h-7 text-accent" />
//     default:
//       return null
//   }
// }

// const cardVariants = {
//   hiddenLeft: { opacity: 0, x: -60 },
//   hiddenRight: { opacity: 0, x: 60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// }

// export default function Timeline() {
//   return (
//     <div className="relative max-w-4xl mx-auto before:absolute before:top-4 before:bottom-4 before:left-1/2 before:w-1 before:-translate-x-1/2 before:bg-accent/30">
//       {timelineData.map((item, index) => {
//         const isLeft = index % 2 === 0
//         return (
//           <motion.div
//             key={item.id}
//             className={`relative w-full mb-12 flex flex-col md:flex-row md:items-start md:justify-between ${
//               isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
//             }`}
//             initial={isLeft ? 'hiddenLeft' : 'hiddenRight'}
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={cardVariants}
//             custom={isLeft}
//           >
//             <div className="md:w-1/2 relative px-4">
//               <div className="absolute top-4 left-[calc(50%_-_14px)] md:left-auto md:right-[-14px] w-7 h-7 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-md">
//                 <Icon type={item.type} />
//               </div>
//               <div className="bg-slate-100 rounded-xl p-6 shadow-lg">
//                 <h3 className="text-xl font-semibold text-primary mb-1">{item.title}</h3>
//                 {item.period && <p className="text-sm text-gray-600 mb-3">{item.period}</p>}
//                 <ul className="list-disc list-inside space-y-1 text-gray-700">
//                   {item.details.map((line, idx) => (
//                     <li key={idx}>{line}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="flex-1" />
//           </motion.div>
//         )
//       })}
//     </div>
//   )
// }




//v3
import { motion } from 'framer-motion'
import {
  BriefcaseIcon,
  AcademicCapIcon,
  BadgeCheckIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

// Timeline data (you can update as needed)
const timelineData = [
  {
    id: 1,
    type: 'work',
    title: 'Associate Developer @ Wipro',
    period: 'May 2021 – Present',
    details: [
      'Event-driven payment workflow (Kafka/Spring Boot)',
      '2FA API (Auth-lite)',
      'E-commerce onboarding',
      'Production support',
      'Internal Banking Portal project.',
    ],
  },
  {
    id: 2,
    type: 'certification',
    title: 'Certifications',
    period: '',
    details: [
      'GCP Associate Cloud Engineer',
      'GCP Professional Cloud Architect',
      'GCP Professional Data Engineer',
      'Gen-AI L1–L3',
    ],
  },
  {
    id: 3,
    type: 'award',
    title: 'Achievements',
    period: '',
    details: [
      'Unit Award Top 100 Google Cloud Challenge (2025)',
      'Victory League Awards (2021, 2022, 2024)',
    ],
  },
  {
    id: 4,
    type: 'education',
    title: 'Education',
    period: '',
    details: [
      'B.Tech Computer Science (Silicon Institute of Technology, 2020)',
      'DAV Public School Burla (2016, 2014)',
    ],
  },
]

// Card animation variants
const cardVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Small fallback icon (SVG) used when a Heroicon is undefined
function FallbackIcon({ className = 'w-7 h-7 text-accent' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// Map timeline types to icon components (these are named imports)
const ICON_MAP = {
  work: BriefcaseIcon,
  certification: BadgeCheckIcon,
  award: StarIcon,
  education: AcademicCapIcon,
}

// Debug log to help catch undefined imports during development
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-console
  console.log('Timeline icons:', {
    BriefcaseIcon,
    AcademicCapIcon,
    BadgeCheckIcon,
    StarIcon,
  })
}

function Icon({ type }) {
  const IconComponent = ICON_MAP[type]
  if (typeof IconComponent === 'function' || (IconComponent && IconComponent.render)) {
    // valid heroicon component
    return <IconComponent className="w-7 h-7 text-accent" aria-hidden />
  }
  // fallback if undefined or invalid
  return <FallbackIcon />
}

export default function Timeline() {
  return (
    <div className="relative max-w-4xl mx-auto before:absolute before:top-4 before:bottom-4 before:left-1/2 before:w-1 before:-translate-x-1/2 before:bg-accent/30">
      {timelineData.map((item, index) => {
        const isLeft = index % 2 === 0
        return (
          <motion.div
            key={item.id}
            className={`relative w-full mb-12 flex flex-col md:flex-row md:items-start md:justify-between ${
              isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={isLeft ? 'hiddenLeft' : 'hiddenRight'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            custom={isLeft}
          >
            <div className="md:w-1/2 relative px-4">
              <div className="absolute top-4 left-[calc(50%_-_14px)] md:left-auto md:right-[-14px] w-7 h-7 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-md">
                <Icon type={item.type} />
              </div>
              <div className="bg-slate-100 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-1">{item.title}</h3>
                {item.period && <p className="text-sm text-gray-600 mb-3">{item.period}</p>}
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {item.details.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1" />
          </motion.div>
        )
      })}
    </div>
  )
}