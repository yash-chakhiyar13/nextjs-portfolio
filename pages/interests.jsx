// import Head from 'next/head'
// import { useEffect, useRef, useState } from 'react'

// const professionalItems = [
//   {
//     id: 1,
//     title: 'Agentic AI Basics',
//     mediaType: 'article',
//     thumbnail: '/images/agentic-ai-thumb1.jpg',
//     link: 'https://example.com/agentic-ai-basics',
//   },
//   {
//     id: 2,
//     title: 'How to build a good Agent',
//     mediaType: 'video',
//     thumbnail: '/images/agentic-ai-thumb2.jpg',
//     link: 'https://example.com/build-agent-video',
//   },
//   {
//     id: 3,
//     title: 'Generative AI & You',
//     mediaType: 'blog',
//     thumbnail: '/images/agentic-ai-thumb3.jpg',
//     link: 'https://example.com/gen-ai-blog',
//   },
// ]

// const golfItems = [
//   {
//     id: 1,
//     title: 'Learning Golf Basics',
//     mediaType: 'article',
//     thumbnail: '/images/golf1.jpg',
//     link: 'https://example.com/golf-basics',
//   },
//   {
//     id: 2,
//     title: 'How to Putt Effectively',
//     mediaType: 'video',
//     thumbnail: '/images/golf2.jpg',
//     link: 'https://example.com/golf-putt-video',
//   },
//   {
//     id: 3,
//     title: 'Using Drivers and Irons',
//     mediaType: 'article',
//     thumbnail: '/images/golf3.jpg',
//     link: 'https://example.com/golf-clubs-guide',
//   },
// ]

// const footballItems = [
//   {
//     id: 1,
//     title: 'Football Training Drill',
//     mediaType: 'video',
//     thumbnail: '/images/football1.jpg',
//     link: 'https://example.com/football-drill-video',
//   },
//   {
//     id: 2,
//     title: 'Tactics like Messi',
//     mediaType: 'blog',
//     thumbnail: '/images/football2.jpg',
//     link: 'https://example.com/messi-tactics',
//   },
//   {
//     id: 3,
//     title: 'Football Gear Guide',
//     mediaType: 'article',
//     thumbnail: '/images/football3.jpg',
//     link: 'https://example.com/football-gear',
//   },
// ]

// const badmintonItems = [
//   {
//     id: 1,
//     title: 'Advanced Badminton Techniques',
//     mediaType: 'article',
//     thumbnail: '/images/badminton1.jpg',
//     link: 'https://example.com/badminton-techniques',
//   },
//   {
//     id: 2,
//     title: 'State Level Competition Highlights',
//     mediaType: 'video',
//     thumbnail: '/images/badminton2.jpg',
//     link: 'https://example.com/badminton-highlights',
//   },
//   {
//     id: 3,
//     title: 'Choosing the Right Racket',
//     mediaType: 'article',
//     thumbnail: '/images/badminton3.jpg',
//     link: 'https://example.com/badminton-racket',
//   },
// ]

// function ScrollingRow({ title, items }) {
//   const containerRef = useRef(null)
//   const [translatedX, setTranslatedX] = useState(0)
//   const [itemWidth, setItemWidth] = useState(0)

//   useEffect(() => {
//     if (!containerRef.current) return

//     const container = containerRef.current

//     // Calculate width of single item - assume all equal width
//     const firstItem = container.querySelector('.scroll-item')
//     if (firstItem) {
//       setItemWidth(firstItem.offsetWidth)
//     }
//   }, [items])

//   // Animation by scrolling left and cycling items
//   useEffect(() => {
//     if (itemWidth === 0) return

//     let animationFrameId
//     let lastTimestamp = null
//     const speed = 0.5 // px per millisecond

//     const animate = (timestamp) => {
//       if (!lastTimestamp) lastTimestamp = timestamp
//       const elapsed = timestamp - lastTimestamp
//       lastTimestamp = timestamp

//       setTranslatedX((prev) => {
//         let next = prev - speed * elapsed
//         // Reset to 0 to loop infinitely
//         if (containerRef.current) {
//           const maxScroll = itemWidth * items.length
//           if (-next >= maxScroll) {
//             next = 0
//           }
//         }
//         return next
//       })
//       animationFrameId = requestAnimationFrame(animate)
//     }

//     animationFrameId = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(animationFrameId)
//   }, [itemWidth, items.length])

//   return (
//     <section className="mb-12">
//       <h2 className="text-3xl font-semibold mb-4 text-primary">{title}</h2>
//       <div
//         ref={containerRef}
//         className="relative flex gap-6 overflow-hidden cursor-grab select-none"
//         style={{ userSelect: 'none' }}
//         onMouseDown={(e) => {
//           containerRef.current.style.cursor = 'grabbing'
//           containerRef.current.isDown = true
//           containerRef.current.startX = e.pageX - containerRef.current.offsetLeft
//           containerRef.current.scrollLeftStart = translatedX
//         }}
//         onMouseUp={() => {
//           containerRef.current.style.cursor = 'grab'
//           containerRef.current.isDown = false
//         }}
//         onMouseLeave={() => {
//           containerRef.current.style.cursor = 'grab'
//           containerRef.current.isDown = false
//         }}
//         onMouseMove={(e) => {
//           if (!containerRef.current.isDown) return
//           e.preventDefault()
//           const x = e.pageX - containerRef.current.offsetLeft
//           const walk = x - containerRef.current.startX
//           let nextTranslate = containerRef.current.scrollLeftStart + walk
//           // limit boundaries
//           if (nextTranslate > 0) nextTranslate = 0
//           if (containerRef.current) {
//             const maxTranslate = -itemWidth * items.length
//             if (nextTranslate < maxTranslate) nextTranslate = maxTranslate
//           }
//           setTranslatedX(nextTranslate)
//         }}
//       >
//         {/* Duplicate the items on both sides for infinite scroll illusion */}
//         {[...items, ...items].map((item, i) => (
//           <a
//             href={item.link}
//             key={`${item.id}-${i}`}
//             target="_blank"
//             rel="noreferrer"
//             className="scroll-item flex-shrink-0 w-56 rounded-lg shadow-lg overflow-hidden bg-white hover:scale-105 transform transition-transform"
//           >
//             <img
//               src={item.thumbnail}
//               alt={item.title}
//               className="w-full h-36 object-cover"
//               draggable={false}
//             />
//             <div className="p-3">
//               <h3 className="text-lg font-semibold">{item.title}</h3>
//               <p className="text-sm text-gray-600">{item.mediaType}</p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default function Interests() {
//   return (
//     <>
//       <Head>
//         <title>Interests - Yash Chakhiyar</title>
//       </Head>
//       <main className="min-h-screen p-8 max-w-7xl mx-auto bg-white">
//         <h1 className="text-5xl font-bold mb-12 text-center text-primary">
//           My Interests
//         </h1>

//         <ScrollingRow title="Professional (AI, ML, Agentic AI)" items={professionalItems} />
//         <ScrollingRow title="Golf" items={golfItems} />
//         <ScrollingRow title="Football" items={footballItems} />
//         <ScrollingRow title="Badminton" items={badmintonItems} />
//       </main>
//     </>
//   )
// }


//v2
// import Head from 'next/head'
// import { useEffect, useRef, useState } from 'react'

// const professionalItems = [
//   {
//     id: 1,
//     title: 'Agentic AI Basics',
//     mediaType: 'article',
//     thumbnail: '/images/agentic-ai-thumb1.jpg',
//     link: 'https://example.com/agentic-ai-basics',
//   },
//   {
//     id: 2,
//     title: 'How to build a good Agent',
//     mediaType: 'video',
//     youtubeId: 'dQw4w9WgXcQ', // Example YouTube video ID
//     link: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
//   },
//   {
//     id: 3,
//     title: 'Generative AI & You',
//     mediaType: 'blog',
//     thumbnail: '/images/agentic-ai-thumb3.jpg',
//     link: 'https://example.com/gen-ai-blog',
//   },
// ]

// const golfItems = [
//   {
//     id: 1,
//     title: 'Learning Golf Basics',
//     mediaType: 'article',
//     thumbnail: '/images/golf1.jpg',
//     link: 'https://example.com/golf-basics',
//   },
//   {
//     id: 2,
//     title: 'How to Putt Effectively',
//     mediaType: 'video',
//     youtubeId: 'hY7m5jjJ9mM', // Example YouTube video ID
//     link: 'https://youtube.com/watch?v=hY7m5jjJ9mM',
//   },
//   {
//     id: 3,
//     title: 'Using Drivers and Irons',
//     mediaType: 'article',
//     thumbnail: '/images/golf3.jpg',
//     link: 'https://example.com/golf-clubs-guide',
//   },
// ]

// const footballItems = [
//   {
//     id: 1,
//     title: 'Football Training Drill',
//     mediaType: 'video',
//     youtubeId: 'VbNF9X1waSc', // Example YouTube video ID
//     link: 'https://youtube.com/watch?v=VbNF9X1waSc',
//   },
//   {
//     id: 2,
//     title: 'Tactics like Messi',
//     mediaType: 'blog',
//     thumbnail: '/images/football2.jpg',
//     link: 'https://example.com/messi-tactics',
//   },
//   {
//     id: 3,
//     title: 'Football Gear Guide',
//     mediaType: 'article',
//     thumbnail: '/images/football3.jpg',
//     link: 'https://example.com/football-gear',
//   },
// ]

// const badmintonItems = [
//   {
//     id: 1,
//     title: 'Advanced Badminton Techniques',
//     mediaType: 'article',
//     thumbnail: '/images/badminton1.jpg',
//     link: 'https://example.com/badminton-techniques',
//   },
//   {
//     id: 2,
//     title: 'State Level Competition Highlights',
//     mediaType: 'video',
//     youtubeId: 'bTqVqk7FSmY', // Example YouTube video ID
//     link: 'https://youtube.com/watch?v=bTqVqk7FSmY',
//   },
//   {
//     id: 3,
//     title: 'Choosing the Right Racket',
//     mediaType: 'article',
//     thumbnail: '/images/badminton3.jpg',
//     link: 'https://example.com/badminton-racket',
//   },
// ]

// function ScrollingRow({ title, items }) {
//   const containerRef = useRef(null)
//   const [translatedX, setTranslatedX] = useState(0)
//   const [itemWidth, setItemWidth] = useState(0)

//   useEffect(() => {
//     if (!containerRef.current) return

//     const container = containerRef.current

//     // Calculate width of single item - assume all equal width
//     const firstItem = container.querySelector('.scroll-item')
//     if (firstItem) {
//       setItemWidth(firstItem.offsetWidth + 24) // include gap (6*4)
//     }
//   }, [items])

//   useEffect(() => {
//     if (itemWidth === 0) return

//     let animationFrameId
//     let lastTimestamp = null
//     const speed = 0.4 // px per millisecond

//     const animate = (timestamp) => {
//       if (!lastTimestamp) lastTimestamp = timestamp
//       const elapsed = timestamp - lastTimestamp
//       lastTimestamp = timestamp

//       setTranslatedX((prev) => {
//         let next = prev - speed * elapsed
//         if (containerRef.current) {
//           const maxScroll = itemWidth * items.length
//           if (-next >= maxScroll) {
//             next = 0
//           }
//         }
//         return next
//       })

//       animationFrameId = requestAnimationFrame(animate)
//     }

//     animationFrameId = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(animationFrameId)
//   }, [itemWidth, items.length])

//   return (
//     <section className="mb-12">
//       <h2 className="text-3xl font-semibold mb-4 text-primary">{title}</h2>
//       <div
//         ref={containerRef}
//         className="relative flex gap-6 overflow-hidden cursor-grab select-none"
//         style={{
//           userSelect: 'none',
//           transform: `translateX(${translatedX}px)`,
//           willChange: 'transform',
//         }}
//         onMouseDown={(e) => {
//           if (!containerRef.current) return
//           containerRef.current.style.cursor = 'grabbing'
//           containerRef.current.isDown = true
//           containerRef.current.startX = e.pageX - containerRef.current.offsetLeft
//           containerRef.current.scrollLeftStart = translatedX
//         }}
//         onMouseUp={() => {
//           if (!containerRef.current) return
//           containerRef.current.style.cursor = 'grab'
//           containerRef.current.isDown = false
//         }}
//         onMouseLeave={() => {
//           if (!containerRef.current) return
//           containerRef.current.style.cursor = 'grab'
//           containerRef.current.isDown = false
//         }}
//         onMouseMove={(e) => {
//           if (!containerRef.current || !containerRef.current.isDown) return
//           e.preventDefault()
//           const x = e.pageX - containerRef.current.offsetLeft
//           const walk = x - containerRef.current.startX
//           let nextTranslate = containerRef.current.scrollLeftStart + walk
//           if (nextTranslate > 0) nextTranslate = 0
//           if (containerRef.current) {
//             const maxTranslate = -itemWidth * items.length
//             if (nextTranslate < maxTranslate) nextTranslate = maxTranslate
//           }
//           setTranslatedX(nextTranslate)
//         }}
//       >
//         {[...items, ...items].map((item, i) => (
//           <a
//             href={item.link}
//             key={`${item.id}-${i}`}
//             target="_blank"
//             rel="noreferrer"
//             className="scroll-item flex-shrink-0 w-80 rounded-lg shadow-lg overflow-hidden bg-white hover:scale-105 transform transition-transform"
//             onClick={(e) => {
//               // Prevent link navigation on iframe/video clicks if needed
//               if (item.mediaType === 'video') e.preventDefault()
//             }}
//           >
//             {item.mediaType === 'video' && item.youtubeId ? (
//               <div className="w-full h-48 relative">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src={`https://www.youtube.com/embed/${item.youtubeId}`}
//                   title={item.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="object-cover w-full h-full pointer-events-auto"
//                 />
//               </div>
//             ) : (
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="w-full h-36 object-cover"
//                 draggable={false}
//               />
//             )}
//             <div className="p-3">
//               <h3 className="text-lg font-semibold">{item.title}</h3>
//               <p className="text-sm text-gray-600">{item.mediaType}</p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default function Interests() {
//   return (
//     <>
//       <Head>
//         <title>Interests - Yash Chakhiyar</title>
//       </Head>
//       <main className="min-h-screen p-8 max-w-7xl mx-auto bg-white">
//         <h1 className="text-5xl font-bold mb-12 text-center text-primary">
//           My Interests
//         </h1>

//         <ScrollingRow title="Professional (AI, ML, Agentic AI)" items={professionalItems} />
//         <ScrollingRow title="Golf" items={golfItems} />
//         <ScrollingRow title="Football" items={footballItems} />
//         <ScrollingRow title="Badminton" items={badmintonItems} />
//       </main>
//     </>
//   )
// }



// part of v5
// import Head from 'next/head'
// import { useEffect, useRef, useState } from 'react'
// import Header from '../components/Header'

// const professionalItems = [
//   {
//     id: 1,
//     title: 'Agentic AI Basics',
//     mediaType: 'article',
//     thumbnail: '/images/agentic-ai-thumb1.jpg',
//     link: 'https://example.com/agentic-ai-basics',
//   },
//   {
//     id: 2,
//     title: 'How to build a good Agent',
//     mediaType: 'video',
//     youtubeId: 'dQw4w9WgXcQ',
//     link: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
//   },
//   {
//     id: 3,
//     title: 'Generative AI & You',
//     mediaType: 'blog',
//     thumbnail: '/images/agentic-ai-thumb3.jpg',
//     link: 'https://example.com/gen-ai-blog',
//   },
// ]

// const golfItems = [
//   {
//     id: 1,
//     title: 'Learning Golf Basics',
//     mediaType: 'article',
//     thumbnail: '/images/golf1.jpg',
//     link: 'https://example.com/golf-basics',
//   },
//   {
//     id: 2,
//     title: 'How to Putt Effectively',
//     mediaType: 'video',
//     youtubeId: 'hY7m5jjJ9mM',
//     link: 'https://youtube.com/watch?v=hY7m5jjJ9mM',
//   },
//   {
//     id: 3,
//     title: 'Using Drivers and Irons',
//     mediaType: 'article',
//     thumbnail: '/images/golf3.jpg',
//     link: 'https://example.com/golf-clubs-guide',
//   },
// ]

// const footballItems = [
//   {
//     id: 1,
//     title: 'Football Training Drill',
//     mediaType: 'video',
//     youtubeId: 'VbNF9X1waSc',
//     link: 'https://youtube.com/watch?v=VbNF9X1waSc',
//   },
//   {
//     id: 2,
//     title: 'Tactics like Messi',
//     mediaType: 'blog',
//     thumbnail: '/images/football2.jpg',
//     link: 'https://example.com/messi-tactics',
//   },
//   {
//     id: 3,
//     title: 'Football Gear Guide',
//     mediaType: 'article',
//     thumbnail: '/images/football3.jpg',
//     link: 'https://example.com/football-gear',
//   },
// ]

// const badmintonItems = [
//   {
//     id: 1,
//     title: 'Advanced Badminton Techniques',
//     mediaType: 'article',
//     thumbnail: '/images/badminton1.jpg',
//     link: 'https://example.com/badminton-techniques',
//   },
//   {
//     id: 2,
//     title: 'State Level Competition Highlights',
//     mediaType: 'video',
//     youtubeId: 'bTqVqk7FSmY',
//     link: 'https://youtube.com/watch?v=bTqVqk7FSmY',
//   },
//   {
//     id: 3,
//     title: 'Choosing the Right Racket',
//     mediaType: 'article',
//     thumbnail: '/images/badminton3.jpg',
//     link: 'https://example.com/badminton-racket',
//   },
// ]

// function ScrollingRow({ title, items }) {
//   const containerRef = useRef(null)
//   const [itemWidth, setItemWidth] = useState(0)

//   useEffect(() => {
//     if (!containerRef.current) return
//     const container = containerRef.current
//     const firstItem = container.querySelector('.scroll-item')
//     if (firstItem) {
//       setItemWidth(firstItem.offsetWidth + 24) // accounting for gap between items
//     }
//   }, [items])

//   const scrollLeft = () => {
//     if (!containerRef.current) return
//     containerRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' })
//   }
//   const scrollRight = () => {
//     if (!containerRef.current) return
//     containerRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' })
//   }

//   return (
//     <section className="mb-12 relative">
//       <h2 className="text-3xl font-semibold mb-4 text-primary">{title}</h2>

//       {/* Left arrow */}
//       <button
//         aria-label="Scroll left"
//         onClick={scrollLeft}
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-20 bg-black bg-opacity-30 text-white rounded-r-md flex items-center justify-center hover:bg-opacity-50 transition"
//         style={{ backdropFilter: 'blur(6px)' }}
//       >
//         ‹
//       </button>

//       {/* Right arrow */}
//       <button
//         aria-label="Scroll right"
//         onClick={scrollRight}
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-20 bg-black bg-opacity-30 text-white rounded-l-md flex items-center justify-center hover:bg-opacity-50 transition"
//         style={{ backdropFilter: 'blur(6px)' }}
//       >
//         ›
//       </button>

//       <div
//         ref={containerRef}
//         className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth no-scrollbar px-14"
//         style={{ scrollBehavior: 'smooth' }}
//       >
//         {items.map((item) => (
//           <a
//             href={item.link}
//             key={item.id}
//             target="_blank"
//             rel="noreferrer"
//             className="scroll-item flex-shrink-0 w-80 rounded-lg shadow-lg overflow-hidden bg-white hover:scale-105 transform transition-transform cursor-pointer"
//           >
//             {item.mediaType === 'video' && item.youtubeId ? (
//               <div className="w-full h-48 relative rounded-t-lg overflow-hidden">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src={`https://www.youtube.com/embed/${item.youtubeId}`}
//                   title={item.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="object-cover w-full h-full pointer-events-auto"
//                 />
//               </div>
//             ) : (
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="w-full h-36 object-cover rounded-t-lg"
//                 draggable={false}
//               />
//             )}
//             <div className="p-3">
//               <h3 className="text-lg font-semibold">{item.title}</h3>
//               <p className="text-sm text-gray-600">{item.mediaType}</p>
//             </div>
//           </a>
//         ))}
//       </div>

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   )
// }

// export default function Interests() {
//   return (
//     <>
//       <Head>
//         <title>Interests - Yash Chakhiyar</title>
//       </Head>
//       <Header />
//       <main className="min-h-screen p-8 max-w-7xl mx-auto bg-white">
//         <h1 className="text-5xl font-bold mb-12 text-center text-primary">
//           My Interests
//         </h1>

//         <ScrollingRow title="Professional (AI, ML, Agentic AI)" items={professionalItems} />
//         <ScrollingRow title="Golf" items={golfItems} />
//         <ScrollingRow title="Football" items={footballItems} />
//         <ScrollingRow title="Badminton" items={badmintonItems} />
//       </main>
//     </>
//   )
// }


//v6
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'

const professionalItems = [
  {
    id: 1,
    title: 'Agentic AI - Video 1',
    mediaType: 'video',
    youtubeId: 't1h5vHJ0mCQ',
    link: 'https://youtu.be/t1h5vHJ0mCQ',
  },
  {
    id: 2,
    title: 'Agentic AI - Video 2',
    mediaType: 'video',
    youtubeId: 'qzAHXO-cN5Q',
    link: 'https://youtu.be/qzAHXO-cN5Q',
  },
  {
    id: 3,
    title: 'Agentic AI - Video 3',
    mediaType: 'video',
    youtubeId: 'pSVk-5WemQ0',
    link: 'https://youtu.be/pSVk-5WemQ0',
  },
  {
    id: 4,
    title: 'Agentic AI - Playlist Video',
    mediaType: 'video',
    youtubeId: 'YbSC1OsLp20',
    link: 'https://www.youtube.com/watch?v=YbSC1OsLp20&list=PLGRDMO4rOGcOlnu6QhogZDNFFwiwKh5X9',
  },
  {
    id: 5,
    title: 'Agentic AI - Video 5',
    mediaType: 'video',
    youtubeId: 'xGwzuz8F9k0',
    link: 'https://youtu.be/xGwzuz8F9k0',
  },
  {
    id: 6,
    title: 'Agentic AI - Video 6',
    mediaType: 'video',
    youtubeId: 'lvZk_sc8u5I',
    link: 'https://youtu.be/lvZk_sc8u5I',
  },
]

const golfItems = [
  {
    id: 1,
    title: 'Golf Video 1',
    mediaType: 'video',
    youtubeId: '99nN7WWNF1Q',
    link: 'https://youtu.be/99nN7WWNF1Q',
  },
  {
    id: 2,
    title: 'Golf Video 2',
    mediaType: 'video',
    youtubeId: 'r5u52YuNVG8',
    link: 'https://youtu.be/r5u52YuNVG8',
  },
  {
    id: 3,
    title: 'Golf Video 3',
    mediaType: 'video',
    youtubeId: 'hL-Xh1TqHZA',
    link: 'https://youtu.be/hL-Xh1TqHZA',
  },
  {
    id: 4,
    title: 'Golf Video 4',
    mediaType: 'video',
    youtubeId: 'BNNBc8Igsck',
    link: 'https://youtu.be/BNNBc8Igsck',
  },
  {
    id: 5,
    title: 'Golf Video 5',
    mediaType: 'video',
    youtubeId: 'gq7XDJR_v5Q',
    link: 'https://youtu.be/gq7XDJR_v5Q',
  },
]

const footballItems = [
  {
    id: 1,
    title: 'Football Training Drill',
    mediaType: 'video',
    youtubeId: 'VbNF9X1waSc',
    link: 'https://youtube.com/watch?v=VbNF9X1waSc',
  },
  {
    id: 2,
    title: 'Tactics like Messi',
    mediaType: 'blog',
    thumbnail: '/images/football2.jpg',
    link: 'https://example.com/messi-tactics',
  },
  {
    id: 3,
    title: 'Football Gear Guide',
    mediaType: 'article',
    thumbnail: '/images/football3.jpg',
    link: 'https://example.com/football-gear',
  },
]

const badmintonItems = [
  {
    id: 1,
    title: 'Advanced Badminton Techniques',
    mediaType: 'article',
    thumbnail: '/images/badminton1.jpg',
    link: 'https://example.com/badminton-techniques',
  },
  {
    id: 2,
    title: 'State Level Competition Highlights',
    mediaType: 'video',
    youtubeId: 'bTqVqk7FSmY',
    link: 'https://youtube.com/watch?v=bTqVqk7FSmY',
  },
  {
    id: 3,
    title: 'Choosing the Right Racket',
    mediaType: 'article',
    thumbnail: '/images/badminton3.jpg',
    link: 'https://example.com/badminton-racket',
  },
]

function ScrollingRow({ title, items }) {
  const containerRef = useRef(null)
  const [itemWidth, setItemWidth] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    const firstItem = container.querySelector('.scroll-item')
    if (firstItem) {
      setItemWidth(firstItem.offsetWidth + 24) // accounting for gap between items
    }
  }, [items])

  const scrollLeft = () => {
    if (!containerRef.current) return
    containerRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' })
  }
  const scrollRight = () => {
    if (!containerRef.current) return
    containerRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' })
  }

  return (
    <section className="mb-12 relative">
      <h2 className="text-3xl font-semibold mb-4 text-primary">{title}</h2>

      {/* Left arrow */}
      <button
        aria-label="Scroll left"
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-20 bg-black bg-opacity-30 text-white rounded-r-md flex items-center justify-center hover:bg-opacity-50 transition"
        style={{ backdropFilter: 'blur(6px)' }}
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        aria-label="Scroll right"
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-20 bg-black bg-opacity-30 text-white rounded-l-md flex items-center justify-center hover:bg-opacity-50 transition"
        style={{ backdropFilter: 'blur(6px)' }}
      >
        ›
      </button>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth no-scrollbar px-14"
        style={{ scrollBehavior: 'smooth' }}
      >
        {items.map((item) => (
          <a
            href={item.link}
            key={item.id}
            target="_blank"
            rel="noreferrer"
            className="scroll-item flex-shrink-0 w-80 rounded-lg shadow-lg overflow-hidden bg-white hover:scale-105 transform transition-transform cursor-pointer"
          >
            {item.mediaType === 'video' && item.youtubeId ? (
              <div className="w-full h-48 relative rounded-t-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="object-cover w-full h-full pointer-events-auto"
                />
              </div>
            ) : (
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-36 object-cover rounded-t-lg"
                draggable={false}
              />
            )}
            <div className="p-3">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.mediaType}</p>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default function Interests() {
  return (
    <>
      <Head>
        <title>Interests - Yash Chakhiyar</title>
      </Head>
      <Header />
      <main className="min-h-screen p-8 max-w-7xl mx-auto bg-white">
        <h1 className="text-5xl font-bold mb-12 text-center text-primary">
          My Interests
        </h1>

        <ScrollingRow title="Professional (AI, ML, Agentic AI)" items={professionalItems} />
        <ScrollingRow title="Golf" items={golfItems} />
        <ScrollingRow title="Football" items={footballItems} />
        <ScrollingRow title="Badminton" items={badmintonItems} />
      </main>
    </>
  )
}