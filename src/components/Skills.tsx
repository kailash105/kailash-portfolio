import { Code, Database, Cloud, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: <Code className="text-blue-400" size={24} />,
      skills: ['Python','Java', 'JavaScript', 'ReactJS', 'Flask', 'HTML5/CSS3'],
      color: 'blue'
    },
    {
      title: 'AI/ML & Data',
      icon: <Cpu className="text-green-400" size={24} />,
      skills: ['TensorFlow','Data Analytics', 'NLP', 'Deep Learning', 'Neural Networks'],
      color: 'green'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="text-purple-400" size={24} />,
      skills: ['Azure', 'Docker', 'Kubernetes', 'Git', 'Microsoft Fabric'],
      color: 'purple'
    },
    {
      title: 'Tools & Technologies',
      icon: <Database className="text-orange-400" size={24} />,
      skills: ['VS Code', 'Power BI', 'Generative AI', 'ChatGPT', 'Prompt Design'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
      green: 'from-green-500/20 to-green-600/20 border-green-500/30',
      purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
      orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies, frameworks, and tools I work with to build smart and scalable solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`bg-gradient-to-br ${getColorClasses(category.color)} border backdrop-blur-sm p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-slate-800/50 px-3 py-2 rounded-lg text-gray-300 text-sm hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-300">Problems Solved</div>
              <div className="text-gray-500 text-sm">LeetCode & HackerRank</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="text-3xl font-bold text-green-400 mb-2">6+</div>
              <div className="text-gray-300">Certifications</div>
              <div className="text-gray-500 text-sm">OCI, Prompt Engineering, GitHub, Azure</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">8+</div>
              <div className="text-gray-300">Major Projects</div>
              <div className="text-gray-500 text-sm">AI, Web, 3D Printing Automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
