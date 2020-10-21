import styled from 'styled-components';

export const StyledPicture = styled.picture`
  height: 100%;
`;

export const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: ${({ imgPosition }) => imgPosition};
`;
