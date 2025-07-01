import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm <span className="font-semibold text-blue-300">Kailash Khadarabad</span>, a passionate AI/ML Engineer and Cloud Developer, 
              currently pursuing my Bachelor's in Computer Science at Mohan Babu University. 
              I'm driven by the thrill of building intelligent systems and solving real-world problems using scalable cloud-native applications.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With hands-on experience in 3D printing automation, deep learning-based plant disease detection, and cloud-based deployments,
              I constantly explore new technologies and open-source projects. I'm a certified Oracle Cloud Infrastructure AI Professional and an AWS Cloud Club Department Coordinator.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">AI/ML Enthusiast</span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">Cloud Developer</span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm">Open Source Contributor</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-medium text-blue-300">B.Tech in CSE, Specialization in AI/ML from IBM ICE</h4>
                  <p className="text-gray-400">Mohan Babu University, Tirupati</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="mr-1" size={14} />
                    <span>2022 - 2026</span>
                    <span className="mx-2">•</span>
                    <span>CGPA: 7.4/10</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="flex items-center mb-4">
                <MapPin className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Location</h3>
              </div>
              <p className="text-gray-300">Tirupati, Andhra Pradesh</p>
              <p className="text-gray-400 text-sm">Open to full-time and internship opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
