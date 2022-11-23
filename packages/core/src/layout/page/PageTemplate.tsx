import React from 'react';
import styled from 'styled-components';

export const PageTemplate = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 100%;
  margin: auto;
  margin-top: 1.6rem;

  & > * {
    margin-bottom: 1.6rem;
  }

  ${(p) => `
    ${p.theme.media.large} {
      max-width: 1020px;
      padding: 0;
    }
  `};
`;
