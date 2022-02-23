import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../../components/layout';

const BlogPost = ({ data }) => {
  const { mdx } = data;

  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <p>{mdx.frontmatter.date}</p>
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
      }
      body
    }
  }
`;

export default BlogPost;
