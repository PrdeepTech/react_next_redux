import Head from 'next/head'

const ServicePage = () => {
  return (
    <>
    <Head>
        <title>Services | MyWebsite</title>
        <meta name="description" content="Explore the services we offer" />
      </Head>

      <main className="bg-gray-50 min-h-screen px-4 py-12">
        <section className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            Our Services
          </h1>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide a wide range of digital solutions to help your business grow and thrive.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Web Development</h2>
              <p className="text-gray-600">
                Custom websites and web apps using the latest technologies like React, Next.js, and Node.js.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">UI/UX Design</h2>
              <p className="text-gray-600">
                Clean, user-focused design to create beautiful and intuitive digital experiences.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">SEO & Marketing</h2>
              <p className="text-gray-600">
                Improve visibility, traffic, and sales with targeted SEO and digital marketing strategies.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ServicePage