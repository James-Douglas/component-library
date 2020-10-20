import styled from 'styled-components';
import { Checkbox } from '@comparethemarketau/manor-checkbox';

const Wrapper = styled.div`
  display: flex;
`;

const StyledCheckbox = styled(Checkbox)`
  height: 100%;
  width: 100%;
  margin: 0;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: ${({ theme }) => theme.spacing[48]};
  }
  label div {
    color: ${({ theme }) => theme.colors.primary500};
  }
  label div svg {
    color: ${({ theme }) => theme.colors.white};
  }
  label div:first-of-type {
    border: ${`1px solid ${({ theme }) => theme.colors.primary500}`};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    width: ${({ theme }) => theme.spacing[20]};
    height: ${({ theme }) => theme.spacing[20]};
  }
  label div:last-of-type {
    margin: 0;
  }
  justify-content: center;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export {
  Wrapper,
  StyledCheckbox,
  StyledLabel,
};
