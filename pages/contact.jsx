import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Yash Chakhiyar</title>
      </Head>
      <main className="min-h-screen relative flex flex-col items-center justify-center p-6 max-w-3xl mx-auto text-center">
        {/* Watermark covering entire page */}
        <div
          className="watermark select-none"
          style={{
            fontSize: 'clamp(24px, 8vw, 120px)',
            letterSpacing: '8px',
            userSelect: 'none',
            zIndex: 0,
          }}
        >
          reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp; reach out &nbsp;
        </div>
        <section className="relative z-10 bg-white bg-opacity-90 rounded-xl p-8 shadow-lg w-full space-y-6">
          <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
          <p className="text-lg">
            <strong>Phone:</strong>{' '}
            <a href="tel:+918457935813" className="text-accent hover:underline">
              +91-8457935813
            </a>
          </p>
          <p className="text-lg">
            <strong>Email:</strong>{' '}
            <a href="mailto:yash.chakhiyar@gmail.com" className="text-accent hover:underline">
              yash.chakhiyar@gmail.com
            </a>
          </p>
          <p className="text-lg">
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/yash-chakhiyar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              linkedin.com/in/yash-chakhiyar
            </a>
          </p>
        </section>
      </main>
    </>
  )
}