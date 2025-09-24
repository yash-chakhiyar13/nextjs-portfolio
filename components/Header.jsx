// import Link from 'next/link'
// import { useEffect, useState } from 'react'

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false)
//   useEffect(() => {
//     function onScroll() { setScrolled(window.scrollY > 120) }
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   return (
//     <header className={\`fixed top-0 left-0 right-0 z-50 transition-all \${scrolled ? 'bg-white/80 backdrop-blur-sm py-2 shadow' : 'py-6'}\`}>
//       <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">YC</div>
//           <div className={\`font-semibold transition-transform \${scrolled ? 'text-base' : 'text-xl'}\`}>Yash Chakhiyar</div>
//         </div>
//         <nav className="flex items-center gap-4">
//           <Link href="/contact" legacyBehavior><a>Contact</a></Link>
//           <Link href="/interests" legacyBehavior><a>Interests</a></Link>
//           <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
//         </nav>
//       </div>
//     </header>
//   )
// }



//v2
// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import Image from 'next/image'

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     function onScroll() {
//       setScrolled(window.scrollY > 120)
//     }
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all bg-white/80 backdrop-blur-sm shadow py-2 flex items-center justify-between px-6 max-w-6xl mx-auto ${
//         scrolled ? 'h-14' : 'h-20'
//       }`}
//     >
//       <div className="flex items-center gap-2">
//         {scrolled ? (
//           <>
//             <div className="w-10 h-10 relative">
//               {/* Luffy's head image */}
//               <Image
//                 src="/images/luffy-head.png"
//                 alt="Monkey D Luffy"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//             <span className="font-semibold text-lg select-none">Yash Chakhiyar</span>
//           </>
//         ) : (
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold select-none">
//               YC
//             </div>
//             <div className="font-semibold text-xl select-none">Yash Chakhiyar</div>
//           </div>
//         )}
//       </div>
//       <nav className="flex items-center gap-6">
//         <Link href="/contact" legacyBehavior>
//           <a className="relative group font-medium text-gray-700 hover:text-accent transition">
//             Contact
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
//           </a>
//         </Link>
//         <Link href="/interests" legacyBehavior>
//           <a className="relative group font-medium text-gray-700 hover:text-accent transition">
//             Interests
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
//           </a>
//         </Link>
//         <a
//           href="/resume.pdf"
//           target="_blank"
//           rel="noreferrer"
//           className="relative group font-medium text-gray-700 hover:text-accent transition"
//         >
//           Resume
//           <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
//         </a>
//       </nav>
//     </header>
//   )
// }


//v3
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 120)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all bg-white/80 backdrop-blur-sm shadow py-2 flex items-center justify-between px-6 max-w-6xl mx-auto ${
        scrolled ? 'h-14' : 'h-20'
      }`}
    >
      <div className="flex items-center gap-2">
        {scrolled ? (
          <>
            <div className="w-10 h-10 relative">
              {/* Luffy's head image */}
              <Image
                src="/images/luffy-head.png"
                alt="Monkey D Luffy"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-semibold text-lg select-none">Yash Chakhiyar</span>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold select-none">
              YC
            </div>
            <div className="font-semibold text-xl select-none">Yash Chakhiyar</div>
          </div>
        )}
      </div>
      <nav className="flex items-center gap-6">
        <Link href="/contact" legacyBehavior>
          <a className="relative group font-medium text-gray-700 hover:text-accent transition">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
        </Link>
        <Link href="/interests" legacyBehavior>
          <a className="relative group font-medium text-gray-700 hover:text-accent transition">
            Interests
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="relative group font-medium text-gray-700 hover:text-accent transition"
        >
          Resume
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
        </a>
      </nav>
    </header>
  )
}