import { useEffect, useState } from 'react';
import axios from 'axios';
import SkillBar from '../components/SkillBar';


const About = () => { 
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('https://mern-portfolio-xxmy.onrender.com/api/skills');
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    
    <main className="page-container">
      
      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://via.placeholder.com/400x400" 
                alt="Profile" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Sankalp Khare</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Full Stack Developer</p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I'm a passionate developer with experience in building web applications using modern technologies.
                </p>
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">My Skills</h1>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <SkillBar key={skill._id} skill={skill} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
};

export default About;