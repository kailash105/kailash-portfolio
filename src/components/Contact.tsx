import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-blue-400" size={24} />,
      label: 'Phone',
      value: '+91 79954 38218',
      href: 'tel:+917995438218'
    },
    {
      icon: <Mail className="text-green-400" size={24} />,
      label: 'Email',
      value: 'kailashkbc2@gmail.com',
      href: 'mailto:kailashkbc2@gmail.com'
    },
    {
      icon: <MapPin className="text-purple-400" size={24} />,
      label: 'Location',
      value: 'Tirupati, Andhra Pradesh',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/kailash105',
      color: 'hover:text-gray-300'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kailash-khadarabad-149660156/',
      color: 'hover:text-blue-400'
    }
  ];

  const profiles = [
    {
      platform: 'LeetCode',
      username: 'kailash_khadarabad',
      href: 'https://leetcode.com/u/kailash_kadharbad001/',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      platform: 'HackerRank',
      username: 'kailashkbc2',
      href: 'https://www.hackerrank.com/profile/kailashkbc2',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const certifications = [
    'Oracle Cloud Infrastructure 2024 AI Professional',
    'Microsoft Certified: Azure Fundamentals – Azure',
    'Prompt Engineering for Developers – DeepLearning.AI',
    'Python for Data Science – CognitiveClass.ai',
    'GitHub Fundamentals – GitHub'
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open for AI, Cloud, and Web projects — drop a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                  >
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-white group-hover:text-blue-400 transition-colors duration-200">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Profiles */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Social Profiles</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-slate-700/30 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Coding Profiles & Certifications */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Coding Profiles</h3>
              <div className="space-y-4">
                {profiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div
                          className={`text-lg font-semibold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}
                        >
                          {profile.platform}
                        </div>
                        <div className="text-gray-400 text-sm">@{profile.username}</div>
                      </div>
                      <div className="transform group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-3 bg-slate-700/30 rounded-lg text-gray-300 text-sm"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Open to Work</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let’s build something awesome together — AI, Cloud, or Web.  
              Drop me a mail or connect on LinkedIn!
            </p>
            <a
              href="mailto:kailashkbc2@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2" size={20} />
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
