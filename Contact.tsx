import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-purple-700 dark:bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Let's discuss your project and see how I can help bring your ideas
            to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fadeInLeft">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out if you have a project in mind, want to
                collaborate, or simply have a question about UI/UX design or web
                development.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Jakarta, ID
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Email
                    </h4>
                    <a
                      href="mailto:contact@example.com"
                      className="text-purple-700 dark:text-purple-400 hover:underline"
                    >
                      aldonicolaus61@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Phone
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      +62 (851) 5505-6716
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fadeInRight">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send Me a Message
              </h3>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
                  Your message has been sent successfully! I'll get back to you
                  soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 
                            bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 
                            bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 
                            bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 
                            bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 flex items-center justify-center bg-purple-700 hover:bg-purple-800 
                          text-white rounded-full font-medium transition-colors duration-300 w-full
                          ${
                            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                          }`}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      Send Message <Send size={16} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
