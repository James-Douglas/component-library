import styled from 'styled-components';

const StyledProgress = styled.div`
  margin-top: ${({ theme }) => theme.spacing[12]};
  width: 100%;
  &[value] {
    /* Reset the default appearance */
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    height: ${({ theme }) => theme.spacing[8]};
    &::-webkit-progress-bar {
      background: ${({ theme }) => theme.loading.background};
      border-radius: ${({ theme }) => theme.loading.borderRadius};
    }
    &::-webkit-progress-value {
      border-radius: ${({ theme }) => theme.loading.borderRadius};
      background: ${({ theme, variant }) => theme.loading[variant]};
    }
  }
`;

export default StyledProgress;
