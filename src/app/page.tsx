import { Suspense } from 'react';
import AboutPage from "./about/page";
import Contact from "./contact/page";
import ServicePage from "./services/page";



export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <section className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to MyWebsite
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            This is a modern and minimal homepage built with Next.js.
          </p>
          <a
            href="/about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </section>
        <section>
          <AboutPage />
        </section>

        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <ServicePage />
          </section>
          <section>
            <Contact />
          </section>
        </Suspense>
      </main>
    </>
  );
}
