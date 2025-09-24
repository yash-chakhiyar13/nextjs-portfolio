// import Head from 'next/head'
// import Header from '../components/Header'
// import Hero from '../components/Hero'

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Yash Chakhiyar — Portfolio</title>
//         <meta name="description" content="Yash Chakhiyar — Full-stack dev, AI/ML enthusiast, and athlete." />
//       </Head>
//       <Header />
//       <main>
//         <Hero />
//       </main>
//     </>
//   )
// }


//v2
// import Head from 'next/head'
// import Header from '../components/Header'
// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// const guyImages = [
//   {
//     id: 'laptop',
//     src: '/images/guy-laptop.png', // You must add this image or a suitable placeholder
//     alt: 'Guy with laptop in formal attire',
//     detailTitle: 'Full Stack Developer',
//     detailText:
//       'I am a passionate full-stack developer building modern web applications, bringing creativity and efficiency to every project.',
//   },
//   {
//     id: 'golf',
//     src: '/images/guy-golf.png',
//     alt: 'Guy in golf attire',
//     detailTitle: 'Self-taught Golf Player',
//     detailText: `My golf journey began influenced by my father, who worked at Mahanadi CoalFields Limited and was a national level award-winning player. Inspired, I learned golf myself with his guidance.`,
//   },
//   {
//     id: 'football',
//     src: '/images/guy-football.png',
//     alt: 'Guy in football attire',
//     detailTitle: 'Football Enthusiast',
//     detailText: `Started playing football in 11th standard, was part of college team from the 1st year. We had an unbeaten season in my 3rd year. Favorite player: Lionel Messi.`,
//   },
//   {
//     id: 'badminton',
//     src: '/images/guy-badminton.png',
//     alt: 'Guy in badminton attire',
//     detailTitle: 'Competitive Badminton Player',
//     detailText: `I have represented in state level badminton competitions and continuously strive to improve my game.`,
//   },
// ]

// export default function Home() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   // Change image/details every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % guyImages.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <>
//       <Head>
//         <title>Yash Chakhiyar — Portfolio</title>
//         <meta
//           name="description"
//           content="Yash Chakhiyar — Full-stack dev, AI/ML enthusiast, and athlete."
//         />
//       </Head>
//       <Header />
//       <main className="pt-24 min-h-screen bg-white flex flex-col items-center justify-center px-6 max-w-6xl mx-auto">
//         {/* Warm welcome with waving animated guy */}
//         <section className="w-full max-w-4xl text-center mb-20">
//           <div className="inline-block mb-6">
//             {/* Simple waving animation using emoji or an SVG */}
//             <span
//               role="img"
//               aria-label="Waving Hand"
//               className="text-7xl animate-wave inline-block"
//               style={{ transformOrigin: '70% 70%' }}
//             >
//               👋
//             </span>
//           </div>
//           <h1 className="text-5xl font-bold">
//             Hi — I’m <span className="text-accent">Yash Chakhiyar</span>
//           </h1>
//           <p className="mt-4 text-xl text-slate-600 max-w-xl mx-auto">
//             A passionate software developer fascinated by AI, ML, and agentic AI, and an avid athlete.
//           </p>
//         </section>

//         {/* Animated guy image and details switching every 3 seconds */}
//         <section className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-20">
//           <div className="w-64 h-64 relative flex-shrink-0">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={guyImages[currentIndex].id}
//                 src={guyImages[currentIndex].src}
//                 alt={guyImages[currentIndex].alt}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.8 }}
//                 className="object-contain w-full h-full rounded-xl shadow-lg select-none"
//                 draggable={false}
//               />
//             </AnimatePresence>
//           </div>
//           <div className="max-w-xl text-center md:text-left">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={guyImages[currentIndex].id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <h2 className="text-3xl font-semibold text-primary mb-4">
//                   {guyImages[currentIndex].detailTitle}
//                 </h2>
//                 <p className="text-lg text-gray-700 whitespace-pre-line">{guyImages[currentIndex].detailText}</p>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </section>
//       </main>

//       <style jsx>{`
//         @keyframes wave {
//           0% {
//             transform: rotate(0deg);
//           }
//           15% {
//             transform: rotate(15deg);
//           }
//           30% {
//             transform: rotate(-10deg);
//           }
//           45% {
//             transform: rotate(15deg);
//           }
//           60% {
//             transform: rotate(-10deg);
//           }
//           75% {
//             transform: rotate(15deg);
//           }
//           100% {
//             transform: rotate(0deg);
//           }
//         }
//         .animate-wave {
//           animation: wave 2.5s infinite;
//           display: inline-block;
//         }
//       `}</style>
//     </>
//   )
// }

//v3
import Head from 'next/head'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const guyImages = [
  {
    id: 'laptop',
    src: '/images/guy-laptop.png',
    alt: 'Guy with laptop in formal attire',
    detailTitle: 'Full Stack Developer',
    detailText:
      'I am a passionate full-stack developer building modern web applications, bringing creativity and efficiency to every project.',
  },
  {
    id: 'golf',
    src: '/images/guy-golf.png',
    alt: 'Guy in golf attire',
    detailTitle: 'Self-taught Golf Player',
    detailText: `My golf journey began influenced by my father, who worked at Mahanadi CoalFields Limited and was a national level award-winning player. Inspired, I learned golf myself with his guidance.`,
  },
  {
    id: 'football',
    src: '/images/guy-football.png',
    alt: 'Guy in football attire',
    detailTitle: 'Football Enthusiast',
    detailText: `Started playing football in 11th standard, was part of college team from the 1st year. We had an unbeaten season in my 3rd year. Favorite player: Lionel Messi.`,
  },
  {
    id: 'badminton',
    src: '/images/guy-badminton.png',
    alt: 'Guy in badminton attire',
    detailTitle: 'Competitive Badminton Player',
    detailText: `I have represented in state level badminton competitions and continuously strive to improve my game.`,
  },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isCycleComplete, setIsCycleComplete] = useState(false)

  // Change image/details every 5 seconds only if cycle is not complete
  useEffect(() => {
    if (isCycleComplete) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev + 1 >= guyImages.length) {
          setIsCycleComplete(true)
          return prev
        }
        return prev + 1
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [isCycleComplete])

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    setIsCycleComplete(true)
  }

  return (
    <>
      <Head>
        <title>Yash Chakhiyar — Portfolio</title>
        <meta
          name="description"
          content="Yash Chakhiyar — Full-stack dev, AI/ML enthusiast, and athlete."
        />
      </Head>
      <Header />
      <main className="pt-24 min-h-screen bg-white flex flex-col items-center justify-center px-6 max-w-6xl mx-auto">
        {/* Warm welcome with waving animated guy */}
        <section className="w-full max-w-4xl text-center mb-14">
          <div className="inline-block mb-6">
            <span
              role="img"
              aria-label="Waving Hand"
              className="text-7xl animate-wave inline-block"
              style={{ transformOrigin: '70% 70%' }}
            >
              👋
            </span>
          </div>
          <h1 className="text-5xl font-bold">
            Hi — I’m <span className="text-accent">Yash Chakhiyar</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-xl mx-auto">
            A passionate software developer fascinated by AI, ML, and agentic AI, and an avid athlete.
          </p>
        </section>

        {/* Animated guy image and details switching with controls */}
        <section className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-20 relative">
          <div className="w-64 h-64 relative flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={guyImages[currentIndex].id}
                src={guyImages[currentIndex].src}
                alt={guyImages[currentIndex].alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="object-contain w-full h-full select-none pointer-events-none"
                draggable={false}
                style={{ backgroundColor: 'transparent' }}
              />
            </AnimatePresence>
            {/* No box or background - transparent PNG so no border or shadow */}
          </div>
          <div className="max-w-xl text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={guyImages[currentIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-semibold text-primary mb-4">
                  {guyImages[currentIndex].detailTitle}
                </h2>
                <p className="text-lg text-gray-700 whitespace-pre-line">{guyImages[currentIndex].detailText}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots navigation below the image/details */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3 mt-8">
            {guyImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Select image ${i + 1}`}
                onClick={() => handleDotClick(i)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  currentIndex === i ? 'bg-accent' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(15deg);
          }
          30% {
            transform: rotate(-10deg);
          }
          45% {
            transform: rotate(15deg);
          }
          60% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(15deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-wave {
          animation: wave 2.5s infinite;
          display: inline-block;
        }
      `}</style>
    </>
  )
}