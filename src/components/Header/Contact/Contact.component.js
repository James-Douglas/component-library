import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import useIsDesktop from 'hooks/useIsDesktop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt';

const StyledContact = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.greyDarkest};
  transition: all 200ms ease;
  font-size: ${(props) => {
    const { size, isDesktop } = props;
    let fontSize;
    if (size === 'small' && !isDesktop) {
      fontSize = props.theme.fontSize.sm;
    } else if (size === 'large' && !isDesktop) {
      fontSize = props.theme.fontSize.lg;
    } else if (size === 'small') {
      fontSize = props.theme.fontSize.base;
    } else {
      fontSize = props.theme.fontSize.xl;
    }
    return fontSize;
  }};
  
  &:hover {
   color: ${(props) => props.theme.colors.link};
   fill: #164AD9;
  }
`;

const StylesdIframe = styled.iframe`
  position: absolute;
  visibility: hidden;
`;

const StyledIconWrap = styled.span`
  display: flex;
  margin-top: ${(props) => props.theme.spacing[2]};
  margin-left: ${(props) => props.theme.spacing[4]};
  margin-right: ${(props) => props.theme.spacing[4]};
`;

const Contact = ({ number, size }) => {
  const isDesktop = useIsDesktop();
  const mobileLabel = isDesktop ? number : 'Need help?';
  return (
    <ThemeProvider theme={getTheme()}>
      <StyledContact isDesktop={isDesktop} size={size} href={`tel:${number}`} target="link-target">
        <StyledIconWrap>
          <FontAwesomeIcon icon={faPhoneAlt} size="sm" />
        </StyledIconWrap>
        { mobileLabel }
      </StyledContact>
      <StylesdIframe title="link iframe" name="link-target" />
    </ThemeProvider>
  );
};

Contact.propTypes = {
  number: PropTypes.string,
  size: PropTypes.string,
};

Contact.defaultProps = {
  number: '1800 123 456',
  size: 'large',
};


export default Contact;
