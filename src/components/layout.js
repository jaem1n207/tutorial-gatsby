import { css, Global } from '@emotion/react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import Reset from '../styles/reset';

// data
const routes = [
  {
    id: '1',
    text: 'Home',
    url: '/',
  },
  {
    id: '2',
    text: 'About',
    url: '/about',
  },
  {
    id: '3',
    text: 'Blog',
    url: '/blog',
  },
];

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  return (
    <div css={Container}>
      <Helmet defer={false}>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <meta name="description" content={pageTitle ?? data.site.siteMetadata.title} />
      </Helmet>

      <Global styles={Reset} />

      <header css={SiteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul css={NavLinks}>
          {routes.map((route) => (
            <li key={route.id} css={NavLinkItem}>
              <Link css={NavLinkText} to={route.url}>
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <h1 css={Heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;

const Container = css`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`;

const SiteTitle = css`
  font-size: 3rem;
  color: #ce1212;
  font-weight: 700;
  margin: 3rem 0;
`;

const Heading = css`
  color: #ff1617;
`;

const NavLinks = css`
  display: flex;
`;

const NavLinkItem = css`
  padding-right: 2rem;
  &::marker {
    display: list-item;
    content: '#' counter(link) ' ';
    color: lightsalmon;
    font-weight: bold;
  }
`;

const NavLinkText = css`
  counter-increment: link;
  color: #fef9ef;
`;
