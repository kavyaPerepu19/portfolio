import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Award, Briefcase, GraduationCap, Code, Database, Layout } from 'lucide-react';

function App() {
  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Perepu Krishna Kavya Sri
        </h1>
        <p className="text-xl text-gray-300 mb-8">Full Stack Developer & Machine Learning Enthusiast</p>
        <div className="flex gap-4 mb-8">
          <a href="mailto:perepukavyasri@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/kavya-perepu-b545ba26b/" className="hover:text-blue-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/kavyaPerepu19" className="hover:text-blue-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://leetcode.com/u/perepukavyasri/" className="hover:text-blue-400 transition-colors">
            <BookOpen className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-400">+91 8688632374 • perepukavyasri@gmail.com</p>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
              <Code className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-4">Languages & Frameworks</h3>
              <p className="text-gray-300">Python, C++, SQL, HTML5, CSS3, Tailwind CSS, Bootstrap, JavaScript (MERN), Java, C with CUDA, TensorFlow, Playwright</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
              <Database className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-4">Core Subjects</h3>
              <p className="text-gray-300">Data Structures, Algorithms, OOP, Computer Networks, Software Engineering, Operating Systems</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
              <Layout className="w-8 h-8 mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <p className="text-gray-300">Machine Learning, Database Management Systems, Web Development, Blockchain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700/30 p-6 rounded-lg hover:bg-gray-700/50 transition-all">
              <h3 className="text-xl font-semibold mb-4">Clinical Decision Support System</h3>
              <p className="text-gray-300 mb-4">A diagnosis application using LLM(BioMistrial) and MERN stack for health tracking and diagnosis based on CBP values.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">LLM</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">MERN</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Python</span>
              </div>
              <a href='https://github.com/kavyaPerepu19/Saanjh'>Source link</a>
            </div>
            <div className="bg-gray-700/30 p-6 rounded-lg hover:bg-gray-700/50 transition-all">
              <h3 className="text-xl font-semibold mb-4">ProBot</h3>
              <p className="text-gray-300 mb-4">Sentiment analysis and text summarization system for product reviews with RAG-based query answering.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">MERN</span>
              </div>
              <a href='https://github.com/kavyaPerepu19/reviewbot'>Source link</a>
            </div>
            <div className="bg-gray-700/30 p-6 rounded-lg hover:bg-gray-700/50 transition-all">
              <h3 className="text-xl font-semibold mb-4">Blockchain Real Estate Marketplace</h3>
              <p className="text-gray-300 mb-4">Decentralized real estate platform using Solidity and MERN stack, deployed on Polygon network.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm">Solidity</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm">MERN</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm">Polygon</span>
              </div>
              <a href='https://github.com/ProjectG62/BlockChainG62'>Source link</a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <GraduationCap className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Keshav Memorial Institute of Technology</h3>
                <p className="text-gray-300">Bachelor of Technology (2022 - 2026)</p>
                <p className="text-blue-400">CGPA: 9.08</p>
              </div>
            </div>
            <div className="flex gap-4">
              <GraduationCap className="w-8 h-8 text-purple-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Narayana Junior College</h3>
                <p className="text-gray-300">Intermediate (2020 - 2022)</p>
                <p className="text-purple-400">Percentage: 97.5%</p>
              </div>
            </div>
            <div className="flex gap-4">
              <GraduationCap className="w-8 h-8 text-green-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Academic Heights Public School</h3>
                <p className="text-gray-300">Matriculation (2011 - 2020)</p>
                <p className="text-green-400">Percentage: 87.5%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <Award className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Best Outgoing Student</h3>
                <p className="text-gray-300">Academic Heights Public School - Awarded for exceptional academic performance, leadership in extracurricular activities, and consistent top grades.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="w-8 h-8 text-pink-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">#include her cohort 4.0</h3>
                <p className="text-gray-300">Participated in the program organized by Azure Developer Community and Microsoft.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Perepu Krishna Kavya Sri. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
}

export default App;