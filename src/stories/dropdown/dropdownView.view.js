import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import Dropdown from '../../components/Dropdown/Dropdown.component';
import FluidContainer from '../../components/Grid/Container/FluidContainer.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import useIsDesktop from '../../hooks/useIsDesktop';

const options = [
  {
    checkboxId: 'A-2', title: 'Default Item - Title', checkboxDisabled: false, selected: true,
  },
  {
    checkboxId: 'A-3', title: 'First Item - Title', checkboxDisabled: false, selected: false,
  },
  {
    checkboxId: 'A-4', title: 'Second Item - Title', checkboxDisabled: false, selected: false,
  },
  {
    checkboxId: 'A-5', title: 'Third Item - Title', checkboxDisabled: false, selected: false,
  },
];

const StyledListItem = styled.li`
  svg {
    position: absolute;
    left: 10px;
    top: 10px;
  }
  ${({ active, desktop }) => (active && !desktop) && css`
    background: #f1f8fb;
    color: #0273b5;
     svg {
      display: none;
     }
  `}
`;

const DropdownView = () => {
  const [selectedIndex, setSelectedIndex] = useState(options.findIndex((option) => option.selected) || 0);
  const desktop = useIsDesktop();
  return (
    <ThemeProvider theme={getTheme()}>
      <FluidContainer>
        <Row>
          <Column>
            <div style={{ marginBottom: '40px', width: '100%' }}>
              <Dropdown
                id="input-one"
                options={options}
                supportingElements
                label="Dropdown Label"
                tooltip={{ title: 'text area tooltip!' }}
                handleClick={(event, index) => { setSelectedIndex(index); }}
              >
                {options.map((option, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <StyledListItem option={option} index={index} key={index} active={selectedIndex === index} desktop={desktop} ref={option.ref} role="option" tabIndex={index}>
                    {selectedIndex === index && <FontAwesomeIcon icon={faCheck} size="xs" />}
                    {option.title}
                  </StyledListItem>
                ))}
              </Dropdown>
            </div>
          </Column>
        </Row>
      </FluidContainer>
    </ThemeProvider>
  );
};

export default DropdownView;
