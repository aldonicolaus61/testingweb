import React from 'react';

interface Skill {
  name: string;
  percentage: number;
}

const designSkills: Skill[] = [
  { name: 'UI Design', percentage: 95 },
  { name: 'UX Research', percentage: 85 },
  { name: 'Wireframing', percentage: 90 },
  { name: 'Prototyping', percentage: 92 },
];

const toolSkills: Skill[] = [
  { name: 'Figma', percentage: 98 },
  { name: 'Adobe XD', percentage: 85 },
  { name: 'Photoshop', percentage: 70 },
  { name: 'Illustrator', percentage: 50 },
];

const devSkills: Skill[] = [
  { name: 'HTML/CSS', percentage: 80 },
  { name: 'JavaScript', percentage: 60 },
  { name: 'React', percentage: 55 },
  { name: 'Responsive Design', percentage: 95 },
];

const SkillBar: React.FC<Skill> = ({ name, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-purple-600 dark:bg-purple-500 h-2.5 rounded-full skill-progress"
          style={{ width: `${percentage}%`, transition: 'width 1.5s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">My Skills</h2>
          <div className="w-20 h-1 bg-purple-700 dark:bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            I've honed my capabilities across various aspects of design and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
              Design Skills
            </h3>
            {designSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
              Tools & Software
            </h3>
            {toolSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
              Development
            </h3>
            {devSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;