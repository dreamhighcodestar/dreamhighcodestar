import React from 'react';
import { Github, Linkedin, Mail, Globe, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Computer Background */}
      <div className="relative h-[70vh] overflow-hidden mb-8">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
            alt="Modern computer setup"
            className="w-full h-full object-cover opacity-60 contrast-125 brightness-110 saturate-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/60 to-gray-100/40"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
             CMS & AI Integration Specialist<br/>⭐ Full-Stack Developer ⭐
            </h1>

          </div>
        </div>
      </div>

      {/* Tech Stack Logos */}
      <div className="py-12 bg-white/80 backdrop-blur-sm shadow-md">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              name="React"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              name="Vue.js"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
              name="Angular"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              name="TypeScript"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              name="JavaScript"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              name="HTML5"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              name="CSS3"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
              name="WordPress"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              name="Node.js"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              name="Express"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
              name="PHP"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg"
              name="CodeIgniter"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              name="MySQL"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              name="MongoDB"
            />
            <TechLogo
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
              name="AI Integration"
            />
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/your-github" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your-email@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://yourwebsite.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Globe size={24} />
            </a>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">💼 What I Do</h3>
            <p className="text-gray-600 leading-relaxed">
              With 7+ years of experience, I craft intelligent digital solutions that combine robust development practices 
              with cutting-edge AI capabilities. My expertise lies at the intersection of content management systems, 
              modern web development, and artificial intelligence integration.
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-4 mt-4 italic text-gray-600">
              "I don't just build websites – I create intelligent digital ecosystems that grow with your business."
            </blockquote>
          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ExpertiseCard
              title="📊 CMS Development"
              items={[
                "WordPress & WooCommerce customization",
                "Headless CMS architecture (Strapi)",
                "Custom themes and plugins",
                "Shopify & Magento development",
                "Performance optimization"
              ]}
            />
            <ExpertiseCard
              title="🧠 AI Integration"
              items={[
                "GPT-powered content generators",
                "AI chatbots & customer support",
                "Content recommendation engines",
                "Automated product descriptions",
                "Intelligent search capabilities"
              ]}
            />
            <ExpertiseCard
              title="💻 Modern Front-End"
              items={[
                "React/Next.js applications",
                "Vue.js/Nuxt.js interfaces",
                "Responsive, accessible UIs",
                "Performance-optimized SPAs",
                "Animation & micro-interactions"
              ]}
            />
            <ExpertiseCard
              title="⚙️ Scalable Back-End"
              items={[
                "Node.js (Express, NestJS) APIs",
                "Database architecture & optimization",
                "Authentication & security systems",
                "API integrations & microservices",
                "Performance monitoring & scaling"
              ]}
            />
          </div>

          {/* Services Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard
              title="🔷 CMS & E-Commerce"
              description="Custom WordPress/Shopify development with optimized themes, plugins, and performance tuning."
            />
            <ServiceCard
              title="🧠 AI Integration"
              description="Implement GPT-powered content tools, chatbots, and recommendation engines."
            />
            <ServiceCard
              title="🖥️ Web Applications"
              description="Full-stack web apps with React/Vue/Node and responsive, accessible UIs."
            />
            <ServiceCard
              title="🔐 Security & Optimization"
              description="Site hardening, performance tuning, and SEO optimization for existing sites."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TechLogo({ imgUrl, name }: { imgUrl: string; name: string }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="p-4 rounded-xl bg-white shadow-md group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300">
        <img src={imgUrl} alt={name} className="w-12 h-12" />
      </div>
      <span className="mt-3 text-gray-700 font-medium">{name}</span>
    </div>
  );
}

function ExpertiseCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold mb-4 text-gray-800">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;