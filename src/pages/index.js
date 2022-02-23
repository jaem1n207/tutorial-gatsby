import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/layout';
import { css } from '@emotion/react';

const IndexPage = () => {
  const { backgroundImage } = useStaticQuery(
    graphql`
      query {
        backgroundImage: file(relativePath: { eq: "galaxy-background.jpg" }) {
          childrenImageSharp {
            gatsbyImageData(width: 2000, quality: 50, webpOptions: { quality: 70 })
          }
        }
      }
    `
  );

  const pluginImage = getImage(backgroundImage.childrenImageSharp[0]);

  const bgImage = convertToBgImage(pluginImage);

  return (
    <>
      <Layout pageTitle="Home Page">
        <p>I'm Jaemin.</p>
        <BackgroundImage css={Pos} Tag="section" {...bgImage} preserveStackingContext>
          <div style={{ minHeight: 800, minWidth: 500 }}>
            <GatsbyImage image={bgImage} alt={'galaxy-background-image'} />
          </div>
        </BackgroundImage>
      </Layout>
    </>
  );
};

export default IndexPage;

const Pos = css`
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 60%;
  height: 100vh;
  width: 100%;
`;
