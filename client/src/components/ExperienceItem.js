import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa'; // Changed import

const ExperienceItem = ({ experience }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start">
        <div className="mr-4 mt-1">
          <FaBuilding className="text-blue-500 text-xl" /> {/* Updated icon */}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {experience.position}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {experience.company}
          </p>
          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
            <FaCalendarAlt className="mr-2" /> {/* Updated icon */}
            <span>
              {experience.startDate} - {experience.current ? 'Present' : experience.endDate}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;