import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useIsDesktop from 'hooks/useIsDesktop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/pro-regular-svg-icons/faPhone';

const StyledContact = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  color: ${({ theme }) => theme.header.contact.color};
  transition: ${({ theme }) => theme.header.transition};
  font-size: ${({ theme, size, isDesktop }) => {
    let fontSize;
    if (size === 'small' && !isDesktop) {
      fontSize = theme.fontSize.sm;
    } else if (size === 'large' && !isDesktop) {
      fontSize = theme.fontSize.lg;
    } else if (size === 'small') {
      fontSize = theme.fontSize.base;
    } else {
      fontSize = theme.fontSize.xl;
    }
    return fontSize;
  }};

  &:hover {
   color: ${({ theme }) => theme.header.contact.hoverColor};
   fill: ${({ theme }) => theme.header.contact.hoverColor};
  }
`;

const StylesdIframe = styled.iframe`
  position: absolute;
  visibility: hidden;
  height: 0px;
  width: 0px;
`;

const StyledIconWrap = styled.span`
  display: flex;
  margin-top: ${(props) => props.theme.spacing[2]};
  margin-left: ${(props) => props.theme.spacing[4]};
  margin-right: ${(props) => props.theme.spacing[4]};
`;

const Contact = ({ number, size }) => {
  const isDesktop = useIsDesktop();
  return (
    <>
      <StyledContact isDesktop={isDesktop} size={size} href={`tel:${number}`} target="link-target">
        <StyledIconWrap>
          <FontAwesomeIcon icon={faPhone} size="sm" />
        </StyledIconWrap>
        { isDesktop && number }
      </StyledContact>
      <StylesdIframe title="link iframe" name="link-target" />
    </>
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
