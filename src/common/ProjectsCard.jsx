import React from 'react'

function ProjectsCard({props, h3, link, p}) {
  return (
    <a href={link} target='_blank'>
                <img className='hover' src={props} alt="GeekShopping" />
                <h3>{h3}</h3>
                <p>{p}</p>
            </a>

  )
}

export default ProjectsCard