import React from 'react'
import Layout from '../../components/Layout'
import { graphql,Link} from 'gatsby'


const index = ({data}) => {
  console.log(data);
  //destructure
  const projects=data.allMarkdownRemark.nodes
  return (
    <div>
        <Layout>
            <h1>All Projects</h1>
            <div>
              {projects.map(project=>{
                return (
                  <Link to={"/project/" + project.frontmatter.description} key={project.id}>
                    <div>
                      <h3>{project.frontmatter.title}</h3>
                      <h4>{project.frontmatter.technologies}</h4>
                      <p>{project.frontmatter.description}</p>
                    </div>
                  </Link>)
                })}
            </div>
        </Layout>
    </div>
  )
}

export default index
export const  query = graphql`
query projectsPage {
  allMarkdownRemark {
    nodes {
      id
      frontmatter {
        description
        technologies
        title
      }
    }
  }
}
`