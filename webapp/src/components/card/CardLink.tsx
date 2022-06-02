import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardLink = styled(Link)`
  ${(p) => p.theme.typography.caption}
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  text-decoration: none;

  &:hover {
    background: ${(p) => p.theme.palette.highlight};
  }
`;

export default CardLink;
