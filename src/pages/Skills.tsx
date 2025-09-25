import { skillsData } from '../data/portfolioData';

function Skills() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Hard Skills</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg transition duration-300 hover:bg-primary-light/50 hover:shadow-md"
          >
            {skill.icon ? (
              <img src={skill.icon} alt={`${skill.name} icon`} className="h-12 w-12" />
            ) : (
              <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
            )}
            <span className="mt-4 font-semibold text-gray-700">{skill.name}</span>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;