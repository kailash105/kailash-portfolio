import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Alpha Groups',
      position: 'IT Partner & Web Developer',
      location: 'Tirupati, India',
      duration: 'Mar 2025 - Present',
      description: [
        'Collaborated with business stakeholders to identify IT infrastructure and digital requirements.',
        'Designed and developed a multi-page React.js website for Alpha Groups using Tailwind CSS.',
        'Integrated Lucide icons, responsive layouts, and animated components for a modern UX.',
        'Deployed and maintained the website infrastructure on cloud hosting platforms.'
      ],
      technologies: ['ReactJS', 'Tailwind CSS', 'Lucide-React', 'Framer Motion', 'Vercel'],
      color: 'purple'
    },
    {
      company: 'Innovayasa',
      position: 'Prompt Engineer Intern',
      location: 'Remote',
      duration: 'Sep 2024 - Jan 2025',
      description: [
        'Designed and optimized AI prompts for chatbots, automation, and content generation using GPT & Gemini models.',
        'Conducted A/B testing to enhance AI response accuracy and efficiency for enterprise applications.',
        'Integrated custom AI workflows into business solutions, improving automation and user engagement.',
        'Worked on prompt engineering, AI workflow development, and prompt fine-tuning for various domains.'
      ],
      technologies: ['Generative AI', 'Prompt Engineering', 'GPT', 'Gemini', 'ChatGPT', 'DeepSeek'],
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { border: string; accent: string; bg: string }> = {
      blue: {
        border: 'border-blue-500/30',
        accent: 'text-blue-400',
        bg: 'bg-blue-500/10'
      },
      purple: {
        border: 'border-purple-500/30',
        accent: 'text-purple-400',
        bg: 'bg-purple-500/10'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My hands-on roles, internships, and real-world client projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            return (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm border ${colors.border} rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Building className={`${colors.accent} mr-3`} size={24} />
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    </div>
                    <h4 className={`text-xl font-semibold ${colors.accent} mb-3`}>
                      {exp.position}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <MapPin className="mr-1" size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className={`${colors.accent} mr-2 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-700">
                    <h5 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 ${colors.bg} ${colors.accent} rounded-full text-xs font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
