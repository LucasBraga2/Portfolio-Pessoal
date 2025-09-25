// src/components/ProjectCard.tsx
import type { Project } from '../data/types';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, link, status } = project;

  const isClickable = link !== "";
  const statusColor = status === 'Finalizado' ? 'bg-green-500 text-white' : 'bg-yellow-400 text-gray-800';

  const cardContent = (
    <div className={`relative flex flex-col h-full bg-primary-light/30 border border-primary/20 rounded-lg p-5 transition duration-300
      ${isClickable ? 'hover:-translate-y-2 hover:shadow-xl hover:border-primary' : 'opacity-70'}`}>
      
      <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${statusColor}`}>
        {status}
      </span>
      
      <h3 className="text-xl font-bold text-primary-dark mt-4">{title}</h3>
      <p className="text-gray-600 mt-2 flex-grow">{description}</p>
    </div>
  );

  return isClickable ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  ) : (
    <div>
      {cardContent}
    </div>
  );
}

export default ProjectCard;