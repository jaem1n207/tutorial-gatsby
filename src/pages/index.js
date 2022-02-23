import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <p>I'm Jaemin.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/icon.png"
        />
      </Layout>
    </>
  );
};
// Step 3: Export your component
export default IndexPage;
