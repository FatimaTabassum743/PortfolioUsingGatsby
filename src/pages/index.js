import React from 'react'

import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const index = ({data}) => {
  console.log(data);
  const {title,description}=data.site.siteMetadata
  return (
    
      <Layout>
        <div>
          <h2>Design</h2>
          <h3>Develop</h3>
          <p>I am a front-end developer specializing in building responsive, user-
            friendly websites and applications. I have experience working with HTML5/CSS3, JavaScript ES6
            and frameworks such as ReactJS, Redux, Node.js, Express, MongoDB, MySQL
            and Firebase. My goal is to create clean, intuitive designs that provide an excellent user experience
            and Firebase. My goal is to create clean, intuitive designs that provide an excellent user
            experience.</p>
        </div>
        <div>
          
        </div>
        <p> data coming from query:{title}-{description}</p>
        <img src='/banner.png 'alt='site banner' style={{maxWidth:'100%', height: 'auto'}}/>
      </Layout>
  )
}

export default index
export const query=graphql`
query MyQuery {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`

