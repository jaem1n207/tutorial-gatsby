import { css, Global } from '@emotion/react';
import { Link } from 'gatsby';
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
];

const Layout = ({ pageTitle, children }) => {
  return (
    <div css={Container}>
      <title>{pageTitle}</title>

      <Global styles={Reset} />
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

const Heading = css`
  color: rebeccapurple;
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
  color: #000;
`;
