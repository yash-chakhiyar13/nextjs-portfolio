// import Head from 'next/head'

// export default function Contact() {
//   return (
//     <>
//       <Head>
//         <title>Contact - Yash Chakhiyar</title>
//       </Head>
//       <main className="min-h-screen relative flex flex-col items-center justify-center p-6 max-w-3xl mx-auto text-center">
//         {/* Watermark covering entire page */}
//         <div
//           className="watermark select-none"
//           style={{
//             fontSize: 'clamp(24px, 8vw, 120px)',
//             letterSpacing: '8px',
//             userSelect: 'none',
//             zIndex: 0,
//           }}
//         >
//           reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp;
//         </div>
//         <section className="relative z-10 bg-white bg-opacity-90 rounded-xl p-8 shadow-lg w-full space-y-6">
//           <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
//           <p className="text-lg">
//             <strong>Phone:</strong>{' '}
//             <a href="tel:+918457935813" className="text-accent hover:underline">
//               +91-8457935813
//             </a>
//           </p>
//           <p className="text-lg">
//             <strong>Email:</strong>{' '}
//             <a href="mailto:yash.chakhiyar@gmail.com" className="text-accent hover:underline">
//               yash.chakhiyar@gmail.com
//             </a>
//           </p>
//           <p className="text-lg">
//             <strong>LinkedIn:</strong>{' '}
//             <a
//               href="https://www.linkedin.com/in/yash-chakhiyar"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-accent hover:underline"
//             >
//               linkedin.com/in/yash-chakhiyar
//             </a>
//           </p>
//         </section>
//       </main>
//     </>
//   )
// }

//v2
// import Head from 'next/head'

// export default function Contact() {
//   return (
//     <>
//       <Head>
//         <title>Contact - Yash Chakhiyar</title>
//       </Head>

//       {/* 
//         Layout notes:
//         - We use min-h = calc(100vh - var(--header-height)) so the page fits the viewport
//           under the fixed header and won't force scrolling when content is small.
//         - If content grows beyond the viewport height, the page will naturally scroll.
//         - The contact card uses a translucent background (bg-white/5) + backdrop-blur so the
//           watermark remains visible through it rather than being fully blocked.
//       */}
//       <main className="min-h-[calc(100vh - var(--header-height))] relative flex flex-col items-center justify-center p-6 max-w-3xl mx-auto text-center">
//         {/* Watermark covering entire page (kept behind the content) */}
//         <div
//           className="watermark select-none"
//           style={{
//             fontSize: 'clamp(24px, 8vw, 120px)',
//             letterSpacing: '8px',
//             userSelect: 'none',
//             zIndex: 0,
//           }}
//           aria-hidden="true"
//         >
//           reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp;
//         </div>

//         {/* Translucent card so watermark shows through */}
//         <section
//           className="relative z-10 w-full space-y-6 rounded-xl p-8 shadow-lg
//                      bg-white/5 backdrop-blur-md border border-white/10"
//           aria-labelledby="contact-heading"
//         >
//           <h1 id="contact-heading" className="text-4xl font-bold mb-6 text-primary">
//             Contact Me
//           </h1>

//           <p className="text-lg">
//             <strong>Phone:</strong>{' '}
//             <a href="tel:+918457935813" className="text-accent hover:underline">
//               +91-8457935813
//             </a>
//           </p>

//           <p className="text-lg">
//             <strong>Email:</strong>{' '}
//             <a href="mailto:yash.chakhiyar@gmail.com" className="text-accent hover:underline">
//               yash.chakhiyar@gmail.com
//             </a>
//           </p>

//           <p className="text-lg">
//             <strong>LinkedIn:</strong>{' '}
//             <a
//               href="https://www.linkedin.com/in/yash-chakhiyar"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-accent hover:underline"
//             >
//               linkedin.com/in/yash-chakhiyar
//             </a>
//           </p>
//         </section>
//       </main>
//     </>
//   )
// }


//v3
// import Head from 'next/head'
// import Image from 'next/image'
// import { FaPhoneAlt, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
// import { MdEmail } from 'react-icons/md'

// export default function Contact() {
//   return (
//     <>
//       <Head>
//         <title>Contact - Yash Chakhiyar</title>
//       </Head>

//       <main className="min-h-[calc(100vh-var(--header-height))] relative p-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left side - Contact Information */}
//           <div className="space-y-8">
//             <h1 className="text-5xl font-bold text-primary mb-12">
//               Let's Connect
//             </h1>

//             {/* Contact Cards */}
//             <div className="space-y-6">
//               {/* Phone */}
//               <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-accent/50 transition-colors">
//                 <div className="bg-accent/10 p-4 rounded-full">
//                   <FaPhoneAlt className="w-6 h-6 text-accent" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-500">Phone</h3>
//                   <a href="tel:+918457935813" className="text-lg font-semibold text-primary hover:text-accent">
//                     +91-8457935813
//                   </a>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-accent/50 transition-colors">
//                 <div className="bg-accent/10 p-4 rounded-full">
//                   <MdEmail className="w-6 h-6 text-accent" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-500">Email</h3>
//                   <a href="mailto:yash.chakhiyar@gmail.com" className="text-lg font-semibold text-primary hover:text-accent">
//                     yash.chakhiyar@gmail.com
//                   </a>
//                 </div>
//               </div>

//               {/* LinkedIn */}
//               <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-accent/50 transition-colors">
//                 <div className="bg-accent/10 p-4 rounded-full">
//                   <FaLinkedin className="w-6 h-6 text-accent" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-500">LinkedIn</h3>
//                   <a 
//                     href="https://www.linkedin.com/in/yash-chakhiyar" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-lg font-semibold text-primary hover:text-accent"
//                   >
//                     linkedin.com/in/yash-chakhiyar
//                   </a>
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-accent/50 transition-colors">
//                 <div className="bg-accent/10 p-4 rounded-full">
//                   <FaMapMarkerAlt className="w-6 h-6 text-accent" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-500">Location</h3>
//                   <p className="text-lg font-semibold text-primary">Bhubaneswar, Odisha</p>
//                 </div>
//               </div>
//             </div>

//             {/* Map */}
//             <div className="w-full h-[300px] rounded-xl overflow-hidden border border-white/20">
//               <iframe
//                 src="https://maps.app.goo.gl/WmaxNS8jGk5UqT5h7"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>
//           </div>

//           {/* Right side - Image */}
//           <div className="hidden lg:block relative">
//             <Image
//               src="/images/guy-onCall.png"
//               alt="Guy on call"
//               width={600}
//               height={800}
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }






import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaPhoneAlt, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Contact() {
  // Keep the UI text identical; default location remains the same so SSR output doesn't change.
  const defaultLocation = 'Naya Raipur, Chhattisgarh'
  const mapSrc = 'https://maps.app.goo.gl/1si52KYLphN7hFj9A' // the iframe link you provide

  const [placeName, setPlaceName] = useState(defaultLocation)

  useEffect(() => {
    // Try to heuristically extract a place name from common Google Maps link patterns.
    // This does not attempt any cross-origin fetches (those are often blocked by CORS).
    // It aims to handle links like:
    //  - https://www.google.com/maps/place/Place+Name/...
    //  - https://www.google.com/maps?q=Place+Name
    //  - https://www.google.com/maps/search/Place+Name
    //  - https://maps.app.goo.gl/... (may not contain the name directly; will fall back)
    function cleanName(raw) {
      if (!raw) return null
      try {
        let s = decodeURIComponent(raw)
        s = s.replace(/\+/g, ' ')
        // remove trailing slashes, query fragments and common noise
        s = s.replace(/[#?].*$/, '')
        // replace multiple separators with space
        s = s.replace(/[_\-]+/g, ' ')
        s = s.replace(/\s{2,}/g, ' ')
        s = s.trim()
        // remove coordinate-like tokens (simple heuristic)
        s = s.replace(/@?[-+]?\d+(\.\d+)?[, ]+[-+]?\d+(\.\d+)?/g, '').trim()
        return s || null
      } catch (e) {
        return null
      }
    }

    function extractPlaceNameFromGoogleMapsUrl(url) {
      if (!url) return null
      try {
        const decoded = decodeURIComponent(url)
        let m = null

        // /place/Place+Name/...
        m = decoded.match(/\/place\/([^\/?]+)/i)
        if (m && m[1]) return cleanName(m[1])

        // ?q=Place+Name
        try {
          const u = new URL(url)
          const q = u.searchParams.get('q')
          if (q) return cleanName(q)
        } catch (e) {
          // ignore
        }

        // /search/Place+Name
        m = decoded.match(/\/search\/([^\/?]+)/i)
        if (m && m[1]) return cleanName(m[1])

        // /maps/search/Place+Name
        m = decoded.match(/\/maps\/search\/([^\/?]+)/i)
        if (m && m[1]) return cleanName(m[1])

        // /maps/place/Place+Name/@lat,lng,...
        m = decoded.match(/\/maps\/place\/([^\/@]+)/i)
        if (m && m[1]) return cleanName(m[1])

        // If there's a readable last path segment, use that
        try {
          const u2 = new URL(url, window.location.origin)
          const segs = u2.pathname.split('/').filter(Boolean)
          if (segs.length) {
            const last = segs[segs.length - 1]
            // ignore if last looks like coordinates or purely numeric
            if (!/^[\d\.\-_,]+$/.test(last)) return cleanName(last)
          }
        } catch (e) {
          // ignore
        }

        // As a very last-ditch, look for a 'place name' token before an @ (common pattern)
        m = decoded.split('/@')[0] // take part before @
        const parts = m.split('/').filter(Boolean)
        if (parts.length) {
          const last = parts[parts.length - 1]
          if (last && !/^[\d\.\-_,]+$/.test(last)) return cleanName(last)
        }
      } catch (e) {
        // ignore
      }
      return null
    }

    const extracted = extractPlaceNameFromGoogleMapsUrl(mapSrc)
    if (extracted) {
      setPlaceName(extracted)
    } else {
      // keep defaultLocation
      setPlaceName(defaultLocation)
    }
  }, [mapSrc])

  // Compute a friendly display label. Some Google short-links like maps.app.goo.gl/WmaxNS8...
  // don't contain a human-readable place name. Detect opaque tokens and replace them
  // with a readable label while still linking to the map URL.
  const isOpaqueToken = (s) => {
    if (!s) return true
    // If it looks like a compact token (no spaces, mostly alphanumeric, length > 6),
    // treat as opaque.
    const compact = /^[A-Za-z0-9_-]{6,}$/.test(s)
    // Also consider very short strings opaque.
    if (compact && !/\s/.test(s)) return true
    return false
  }

  const displayLabel = (() => {
    if (!placeName) return 'Open in Google Maps'
    if (placeName === defaultLocation) return placeName
    // If extracted name is an opaque short token (like WmaxNS8jGk5UqT5h7), show a friendly label.
    if (isOpaqueToken(placeName)) return 'Open in Google Maps'
    return placeName
  })()

  return (
    <>
      <Head>
        <title>Contact - Yash Chakhiyar</title>
      </Head>

      <main className="min-h-[calc(100vh-var(--header-height))] relative p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Contact Information */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-primary mb-12">
              Let's Connect
            </h1>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-accent/50 transition-colors">
                <div className="bg-accent/10 p-4 rounded-full">
                  <FaPhoneAlt className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                  <a href="tel:+918457935813" className="text-lg font-semibold text-primary hover:text-accent">
                    +91-8457935813
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-accent/50 transition-colors">
                <div className="bg-accent/10 p-4 rounded-full">
                  <MdEmail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <a href="mailto:yash.chakhiyar@gmail.com" className="text-lg font-semibold text-primary hover:text-accent">
                    yash.chakhiyar@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-accent/50 transition-colors">
                <div className="bg-accent/10 p-4 rounded-full">
                  <FaLinkedin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/yash-chakhiyar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-primary hover:text-accent"
                  >
                    linkedin.com/in/yash-chakhiyar
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-accent/50 transition-colors">
                <div className="bg-accent/10 p-4 rounded-full">
                  <FaMapMarkerAlt className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Location</h3>
                  {/* Clicking the location should open the map link.
                      Display a friendly label when the extracted name is opaque. */}
                  <p className="text-lg font-semibold text-primary">
                    <a
                      href={mapSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      title={placeName && placeName !== displayLabel ? placeName : 'Open map in Google Maps'}
                    >
                      {displayLabel}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-[300px] rounded-xl overflow-hidden border border-white/20">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="hidden lg:block relative">
            <Image
              src="/images/guy-onCall.png"
              alt="Guy on call"
              width={600}
              height={800}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>
    </>
  )
}