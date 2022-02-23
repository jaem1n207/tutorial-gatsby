import { Global } from '@emotion/react';
import * as React from 'react';
import Layout from '../components/layout';
import Reset from '../styles/reset';

const IndexPage = () => {
  return (
    <>
      <Global styles={Reset} />
      <Layout pageTitle="Home Page">
        <p>I'm Jaemin.</p>
      </Layout>
    </>
  );
};
// Step 3: Export your component
export default IndexPage;
