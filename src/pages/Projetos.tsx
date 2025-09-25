// src/pages/Projetos.tsx
import { projectsData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

function Projetos() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-primary mb-6">Galeria de Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projetos;