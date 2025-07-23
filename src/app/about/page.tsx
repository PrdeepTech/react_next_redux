
const AboutPage = () => {
  return (
    <>
    <main className="bg-gray-50 min-h-screen px-4 py-12">
        <section className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
          <p className="text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
            At <span className="font-semibold text-blue-500">MyWebsite</span>, we are passionate about building innovative digital solutions. With a focus on simplicity, speed, and scalability, we help businesses bring their ideas to life on the web.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 shadow-md rounded-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
              <p className="text-gray-600">
                We aim to empower small businesses, startups, and creators with high-quality technology solutions that are easy to use, fast to deploy, and delightful to interact with.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Team</h2>
              <p className="text-gray-600">
                Our team is made up of developers, designers, and problem-solvers who care deeply about user experience and elegant code. We work closely with our clients to deliver great results.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutPage