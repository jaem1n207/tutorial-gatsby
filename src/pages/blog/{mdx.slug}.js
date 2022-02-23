import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../../components/layout';

const BlogPost = ({ data }) => {
  const { mdx } = data;

  const image = getImage(mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <p>{mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{' '}
        <a href={mdx.frontmatter.hero_image_credit_link} target="_blank" rel="noopener noreferrer">
          {mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
