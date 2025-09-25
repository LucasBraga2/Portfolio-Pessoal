// src/pages/Experiencia.tsx
import { experienceData, educationData } from '../data/portfolioData';

function Experiencia() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-bold text-primary mb-8">Experiência e Educação</h2>
        <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
          {experienceData.map((job, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[42px] top-1 w-4 h-4 bg-primary rounded-full border-2 border-white"></div>
              <h3 className="text-xl font-semibold text-primary-dark">{job.title}</h3>
              <p className="font-medium text-gray-600">{job.company} | {job.period}</p>
              <p className="mt-2 text-gray-700">{job.description}</p>
            </div>
          ))}
          {educationData.map((edu, index) => (
             <div key={index} className="relative">
              <div className="absolute -left-[42px] top-1 w-4 h-4 bg-primary rounded-full border-2 border-white"></div>
              <h3 className="text-xl font-semibold text-primary-dark">{edu.course}</h3>
              <p className="font-medium text-gray-600">{edu.institution} | {edu.period}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Experiencia;