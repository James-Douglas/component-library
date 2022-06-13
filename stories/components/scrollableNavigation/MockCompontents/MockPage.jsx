import React from 'react';
import styled from 'styled-components';
import { ProductSections } from './SectionConfig';
import MockSection from './MockSection';

const PageContainer = styled.div`
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const MockPage = () => (
  <PageContainer>
    {ProductSections.map((section) => {
      const { id, label } = section;
      return <MockSection id={id} key={id} label={label} />;
    })}
    <footer><MockSection id="Mock footer" key="Mock footer" label="Mock footer" /></footer>
  </PageContainer>
);

export default MockPage;
