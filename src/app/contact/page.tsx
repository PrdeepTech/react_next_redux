
const contact = () => {
  return (
    <>
    <main className="bg-gray-50 min-h-screen px-4 py-12">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-10">
            We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form className="bg-white shadow-md rounded-2xl p-8 text-left space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  )
}

export default contact