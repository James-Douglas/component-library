import styled from 'styled-components';

export const StyledIconToggleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: ${({ theme }) => theme.spacing['160']};
  height: ${({ theme }) => theme.spacing['160']};
  padding: ${({ theme }) => theme.spacing['16']};
`;

export const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize['2xs']};
  height: ${({ theme }) => theme.spacing['80']};
  width: ${({ theme }) => theme.spacing['80']};
`;

export const StyledIconContent = styled.div`
  padding-top: ${({ theme }) => theme.spacing['8']};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: ${({ theme }) => theme.lineHeight.tight};
`;

export const StyledTitle = styled.div`
  p {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 0;
  }
`;

export const StyledDescription = styled.div`
  div {
  }
  p {
    color: ${({ theme }) => theme.colors.grey800};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    margin: 0;
    line-height: ${({ theme }) => theme.lineHeight.tighter};
  }
`;
