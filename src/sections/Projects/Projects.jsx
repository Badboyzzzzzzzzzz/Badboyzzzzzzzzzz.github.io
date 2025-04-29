import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import Dertam from '../../assets/DertamAPP.jpg';
import Coffee from '../../assets/coffee.jpg';

const projects = [
  {
    id: 1,
    title: "Tourism app",
    description: "School Project",
    image: Dertam,
    link: "https://github.com/Sreanghourhy/Final_Project_Year2_Term3",
    tech: ["Flutter/Dart", "Firebase",]
  },
  {
    id: 2,
    title: "Coffee management system",
    description: "Personal Project",
    image: Coffee,
    link: "https://github.com/Ade-mir/company-landing-page-2",
    tech: ["Bootstrap/HTML", "PHP"]
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className="sectionTitle">Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            src={project.image}
            link={project.link}
            h3={project.title}
            p={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;