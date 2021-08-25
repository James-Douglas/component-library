import styled from 'styled-components';

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    overflow: auto;
`;

export const StyledCarousel = styled.div`
  flex: 1;

  .swiper-container {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .swiper-pagination {
    height: 3.4rem;
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.grey400};
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary500};
  }
`;

export const StyledActions = styled.div`
  background: white;
  border-top-style: solid;
  border-width: 0.1rem;
  border-top-color: ${({ theme }) => theme.colors.primary200};
  padding: 1.6rem ${({ theme }) => theme.spacing[24]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledPreviousButton = styled.div`
  display: inline-block;
`;

export const StyledNextButton = styled.div`
  display: inline-block;
`;

export const StyledCompleteButton = styled.div`
  display: inline-block;
`;
