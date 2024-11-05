import { Element } from 'react-scroll';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <Element name="contact" className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
        
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-[#fff5e6] p-8 rounded-lg shadow-sm"
        >
          <div className="flex flex-col gap-2">
            <label 
              htmlFor="name" 
              className="text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#f39c12] transition-colors duration-300"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label 
              htmlFor="email" 
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#f39c12] transition-colors duration-300"
              placeholder="Your email address"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label 
              htmlFor="message" 
              className="text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#f39c12] transition-colors duration-300 resize-none"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className="hover:bg-orange-200 hover:transition duration-500 transition-ease border border-black rounded-lg px-8 py-2 font-semibold mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </Element>
  );
};

export default Contact;