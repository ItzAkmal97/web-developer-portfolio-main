import {Element} from 'react-scroll';
const About = () => {
    return (
        <Element name="about">
            <section className="container mx-auto px-4 py-16 md:py-24 bg-[#ffe6d5]">
        {/* About Me Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">About Me</h2>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
            A passionate Frontend Developer creating modern, responsive web applications by leveraging knowledge in React.js and its ecosystem for beautiful design that combines with solid functionality to create a seamless user experience.
            </p>
            
            <p className="text-lg leading-relaxed">
            Skills range from server-side rendering and static site generation in Next.js to type-safe development using TypeScript and designing with TailwindCSS; this leaves an imprint for beautiful and responsive designs. Further, practical knowledge has been derived using UI component libraries, for instance Shadcn/UI and Material UI.
            </p>
          </div>
  
          {/* Experience Section */}
          <div className="mt-16">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8">My Tech Stack</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend Framework */}
              <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-lg hover:shadow-xl transition duration-300">
                <h4 className="text-lg font-semibold mb-4">Frontend Framework</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• React.js</li>
                  <li>• Next.js</li>
                  <li>• TypeScript</li>
                </ul>
              </div>
  
              {/* Styling & UI */}
              <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-lg hover:shadow-xl transition duration-300">
                <h4 className="text-lg font-semibold mb-4">Styling & UI</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• TailwindCSS</li>
                  <li>• Shadcn/UI</li>
                  <li>• Material UI</li>
                </ul>
              </div>
  
              {/* Development Tools */}
              <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-lg hover:shadow-xl transition duration-300">
                <h4 className="text-lg font-semibold mb-4">Development Tools</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Git & GitHub</li>
                  <li>• VS Code</li>
                  <li>• npm/yarn</li>
                </ul>
              </div>
  
              {/* Additional Skills */}
              <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-lg hover:shadow-xl transition duration-300">
                <h4 className="text-lg font-semibold mb-4">Additional Skills</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Responsive Design</li>
                  <li>• REST APIs</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
        </Element>
      
    );
  };
  
  export default About;