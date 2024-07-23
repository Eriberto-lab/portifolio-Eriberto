import React from 'react';
import styles from './ProjectsStyles.module.css'
import viber from '../../assets/viberr.png'
import ProjectsCard from '../../common/ProjectsCard';


function Projects() {
  return (
    <section id="projects" className={styles.container} >
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>

            <ProjectsCard 
            props={viber}
            link={"https://github.com/Eriberto-lab/microservices-dotnet"}
            h3={"GeekShopping"}
            p={"Shopping for geek"}
            />
             <ProjectsCard 
            props={viber}
            link={"https://github.com/Eriberto-lab/Futebol_Leaderboard"}
            h3={"Futebol Mania"}
            p={"Um site cheio das informações"}
            />
             <ProjectsCard 
            props={viber}
            link={"https://github.com/Eriberto-lab/Hackathon-Orange-Juice-2024"}
            h3={"Orange Portfólio"}
            p={"O Orange Portfólio"}
            />

<ProjectsCard 
            props={viber}
            link={"https://github.com/Eriberto-lab/Hackathon-Orange-Juice-2024"}
            h3={"Orange Portfólio"}
            p={"O Orange Portfólio"}
            />
          
           
        </div>
    </section>
  )
}

export default Projects