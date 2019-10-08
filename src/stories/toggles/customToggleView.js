import React from 'react';
import css from 'styled-jsx/css';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Picture from '../../components/Picture/Picture.component';
import CustomToggle from '../../components/Toggles/Custom/CustomToggle.component';
import StoryTemplate from '../storyTemplate';

import DEFAULT from '../../../assets/images/medicare-cards/default.jpg';
import INTERIM from '../../../assets/images/medicare-cards/interim.jpg';
import RECIPROCAL from '../../../assets/images/medicare-cards/reciprocal.jpg';
import OTHER from '../../../assets/images/medicare-cards/other.png';

const styles = css`
 .picture-container {
    height: 14.2rem;
    width: 21.9rem;
  }
  .other-container {
    padding-top: 2rem;
    height: 12rem;
    width: 21.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.2;
  }
  .label-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 6rem;
  }
  .label-container span {
    font-weight: lighter;
  }
  .medicare-toggle {
    height: 19.5rem;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CustomToggleView = () => {
  const tooltip = {
    title: 'test',
  };

  const handleChange = (id, group) => {
    // eslint-disable-next-line no-console
    console.log(`TOGGLE SELECTED: ${id} `);
  };

  return (
    <StoryTemplate background="grey">
      <div className="mb-32">
        <style jsx>{styles}</style>
        <ToggleGroup label="Default" name="toggleGroupA" tooltip={tooltip} onToggle={(id) => handleChange(id)}>
          <CustomToggle
            name="image"
            id="green"
            value="green"
          >
            <div className="medicare-toggle">
              <div className="picture-container">
                <Picture
                  src={DEFAULT}
                  srcsets={[{ srcset: DEFAULT }]}
                />
              </div>
              <div className="label-container">
                <strong>Green</strong>
              </div>
            </div>

          </CustomToggle>
          <CustomToggle
            name="image"
            id="blue"
            value="blue"
          >
            <div className="medicare-toggle">
              <div className="picture-container">
                <Picture
                  src={INTERIM}
                  srcsets={[{ srcset: INTERIM }]}
                />
              </div>
              <div className="label-container">
                <strong>Blue</strong>
                <span>(Interim)</span>
              </div>
            </div>
          </CustomToggle>
          <CustomToggle
            name="image"
            id="yellow"
            value="yellow"
          >
            <div className="medicare-toggle">
              <div className="picture-container">
                <Picture
                  src={RECIPROCAL}
                  srcsets={[{ srcset: RECIPROCAL }]}
                />
              </div>
              <div className="label-container">
                <strong>Green/Yellow</strong>
                <span>(Reciprocal - Visitor)</span>
              </div>
            </div>
          </CustomToggle>
          <CustomToggle
            name="image"
            id="other"
            value="other"
          >
            <div className="medicare-toggle">
              <div className="other-container">
                <Picture
                  src={OTHER}
                  srcsets={[{ srcset: OTHER }]}
                />
              </div>
              <div className="label-container">
                <strong>Other</strong>
              </div>
            </div>
          </CustomToggle>
        </ToggleGroup>
      </div>

    </StoryTemplate>
  );
};

export default CustomToggleView;
