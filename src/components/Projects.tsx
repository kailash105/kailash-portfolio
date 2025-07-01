import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Agro-AURA',
      description:
        'An AI-powered wheat disease detection system using CNN for image classification, paired with a React frontend and cloud deployment.',
      technologies: ['TensorFlow', 'CNN', 'ReactJS', 'Material UI', 'Flask'],
      date: 'Aug 2024',
      github: 'https://github.com/kailash105/Agro-AURA',
      highlights: [
        'Built a CNN achieving 94% classification accuracy',
        'Enhanced model performance with augmentation',
        'Designed a React frontend for easy predictions',
        'Integrated API for cloud-hosted inference'
      ],
      color: 'purple'
    },
    {
      title: 'Task Manager WebApp',
      description:
        'A ReactJS-based task management web app with task creation, due dates, local storage, and interactive animations using Framer Motion.',
      technologies: ['ReactJS', 'Framer Motion', 'LocalStorage', 'JavaScript'],
      date: 'April 2025',
      github: 'https://github.com/kailash105/Task-manager-WebApp',
      highlights: [
        'Built intuitive task creation & sorting UI',
        'Integrated smooth animations with Framer Motion',
        'Used local storage for persistent task state',
        'Responsive, mobile-first UI design'
      ],
      color: 'blue'
    },
    {
      title: '3D Printing Automation System',
      description:
        'Automated 3D printing workflow system that generates G-code, integrates a slicing engine backend, and transmits print commands over a cloud interface.',
      technologies: ['ReactJS', 'Python', 'Slic3r', 'Vercel', 'Docker'],
      date: 'June 2025',
      github: '',
      highlights: [
        'Automated slicing and G-code generation pipeline',
        'Integrated backend with Slic3r and custom logic',
        'React-based frontend with cloud deployment',
        'Supports 3D concrete and filament-based printing'
      ],
      color: 'orange'
    },
    {
      title: 'Sentiment Analysis System',
      description:
        'A Python-based sentiment analysis tool using NLP and machine learning to classify user text into positive, negative, or neutral sentiments with high accuracy.',
      technologies: ['Python', 'NLP', 'Scikit-Learn', 'Pandas'],
      date: 'March 2024',
      github: 'https://github.com/kailash105/Sentiment_analysis',
      highlights: [
        'Processed and cleaned large textual datasets',
        'Built ML models for sentiment classification',
        'Achieved high accuracy on unseen datasets',
        'Deployed as a CLI-based application'
      ],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { border: string; accent: string; bg: string; gradient: string }> = {
      green: {
        border: 'border-green-500/30',
        accent: 'text-green-400',
        bg: 'bg-green-500/10',
        gradient: 'from-green-500/20 to-green-600/20'
      },
      blue: {
        border: 'border-blue-500/30',
        accent: 'text-blue-400',
        bg: 'bg-blue-500/10',
        gradient: 'from-blue-500/20 to-blue-600/20'
      },
      purple: {
        border: 'border-purple-500/30',
        accent: 'text-purple-400',
        bg: 'bg-purple-500/10',
        gradient: 'from-purple-500/20 to-purple-600/20'
      },
      orange: {
        border: 'border-orange-500/30',
        accent: 'text-orange-400',
        bg: 'bg-orange-500/10',
        gradient: 'from-orange-500/20 to-orange-600/20'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI, Web, and Automation projects I've built and deployed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.gradient} backdrop-blur-sm border ${colors.border} rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="mr-2" size={16} />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex space-x-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${colors.accent} hover:text-white transition-colors duration-200`}
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className={`${colors.accent} mr-2 mt-1.5 w-1 h-1 rounded-full flex-shrink-0`}></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-700">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
