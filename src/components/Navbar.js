import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <div>
      <nav>
        <p>this is comming from  query using
           useStaticQuery 
          which is use to get data
           in components :</p><h1>{title}</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </div>
  );
};

export default Navbar;
