/* eslint-disable react/forbid-prop-types */
import React, {
  useState, useEffect, useContext, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Pagination } from 'swiper/core';
import {
  StyledContent,
  StyledCarousel,
} from './Carousel.styles';

// Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/effect-fade/effect-fade.min.css";
// import "swiper/components/pagination/pagination.min.css";
import 'swiper/swiper-bundle.min.css';

// install Swiper modules
SwiperCore.use([EffectFade, Pagination]);

const Carousel = ({
  trackingLabel,
  id: propsId,
  className,
  visible,
  children,
  onActiveIndexChanged,
  carouselIndex,
}) => {
  const id = useId(propsId);

  const [acitvePageIndex, setActivePageIndex] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const { isDesktop, trackInteraction } = useContext(ManorContext);

  const handleNext = useCallback(() => {
    if (controlledSwiper) {
      controlledSwiper.slideNext(100, true);
    }
    trackInteraction('Change', 'Carousel', 'Carousel', trackingLabel, 'Next');
  }, [controlledSwiper, trackInteraction, trackingLabel]);

  const handlePrevious = useCallback(() => {
    if (controlledSwiper) {
      controlledSwiper.slidePrev(100, true);
    }
    trackInteraction('Change', 'Carousel', 'Carousel', trackingLabel, 'Previous');
  }, [controlledSwiper, trackInteraction, trackingLabel]);

  const initSwiper = (swiper) => {
    setControlledSwiper(swiper);
    setActivePageIndex(swiper.activeIndex);
  };

  const handleSlideChange = (swiper) => {
    setActivePageIndex(swiper.activeIndex);
    trackInteraction('Change', 'Carousel', 'SlideChange', trackingLabel, swiper.activeIndex);
  };

  // if the carousel was swiped or changed inside then calling the onActiveIndexChanged callback function
  useEffect(() => {
    if (onActiveIndexChanged) {
      onActiveIndexChanged(acitvePageIndex);
    }
  }, [acitvePageIndex, onActiveIndexChanged]);

  const handleIndexChange = useCallback(() => {
    if (carouselIndex === acitvePageIndex + 1) {
      handleNext();
    } else if (carouselIndex === acitvePageIndex - 1) {
      handlePrevious();
    }
  }, [carouselIndex, acitvePageIndex, handleNext, handlePrevious]);

  /* eslint-disable react-hooks/exhaustive-deps */
  // Handling the page forward or go back by the external props caourselIndex
  useEffect(() => {
    handleIndexChange();
  }, [carouselIndex]);

  return (
    visible && (
      <>
        <StyledContent id={`${id}_wrapper`}>
          <StyledCarousel desktop={isDesktop} className={`carousel-default ${className}`}>
            <Swiper
              id={id}
              grabCursor
              initialSlide={0}
              spaceBetween={0}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              pagination={{
                clickable: true,
              }}
              onSwiper={initSwiper}
              onSlideChange={handleSlideChange}
            >
              {children.map((page, index) => {
                const key = `SwiperSlide-${index}`;
                return <SwiperSlide key={key}>{page}</SwiperSlide>;
              })}
            </Swiper>
          </StyledCarousel>
        </StyledContent>
      </>
    )
  );
};

Carousel.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   * Unique identifier
   */
  id: PropTypes.string,
  /**
   * Extend styles with additional classNames
   */
  className: PropTypes.string,
  /**
   * Bool for if the carousel should be visible - default is true
   */
  visible: PropTypes.bool,
  /**
   * The content of the Carousel
   */
  children: PropTypes.arrayOf(PropTypes.node),
  /**
   * Callback fired when the carousel index changed.
   */
  onActiveIndexChanged: PropTypes.func,
  /**
   * Set the active carousel page (zero based index).
   */
  carouselIndex: PropTypes.number,
};

Carousel.defaultProps = {
  id: null,
  className: '',
  visible: true,
  children: [],
  onActiveIndexChanged: null,
  carouselIndex: 0,
};

export default Carousel;
