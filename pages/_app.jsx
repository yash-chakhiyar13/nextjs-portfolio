import '../styles/globals.css'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let lenis = new Lenis({ duration: 1.2, smooth: true })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <Component {...pageProps} />
    </motion.div>
  )
}
export default MyApp