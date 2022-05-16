import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmptyState } from '@comparethemarketau/manor-empty-state';
import { Typography } from '@comparethemarketau/manor-typography';
import {
  StyledComboListWrap, StyledDropdownList, StyledEmptyStateMessage, WrapList, StyledIconWrap, StyledList, StyledListItem,
} from './ComboTag.styles';

export function comboDataList(apiData, handleSelectItem, filteredValuesRefs, listIcon) {
  return (
    <StyledList>
      {apiData.map((filteredValue, index) => (
        <StyledListItem
          tabIndex="0"
          key={`option-${filteredValue.label}`}
          role="listitem"
          data-type="list"
          onMouseDown={(e) => {
            e.preventDefault();
            handleSelectItem(filteredValue);
          }}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSelectItem(filteredValue)}
          ref={filteredValuesRefs[index]}
        >
          {listIcon && (
            <StyledIconWrap>
              <FontAwesomeIcon icon={listIcon} size="sm" />
            </StyledIconWrap>
          )}
          <Typography variant="body2">{filteredValue.label}</Typography>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

function comboDropdownList(
  desktop,
  listIcon,
  characterMinimum,
  apiData,
  handleSelectItem,
  filteredValuesRefs,
  listVisible,
  currentValue,
  emptyStateChildren,
  emptyStatePicture,
  emptyStateClassName,
  emptyStateHeading,
  renderView,
  comboListSpacing,
) {
  const positionDesktop = !desktop ? 'relative' : 'absolute';
  const emptyState = !listVisible;
  const positionConst = emptyState ? 'hidden' : positionDesktop;
  const noResultCondition = apiData.length === 0 && currentValue.length >= characterMinimum;

  return (
    <WrapList desktop={desktop}>
      <StyledDropdownList position={positionConst} role="listwrap" desktop={desktop} comboListSpacing={comboListSpacing}>
        <StyledComboListWrap desktop={desktop} renderView={renderView}>
          <div>
            {!emptyState && comboDataList(apiData, handleSelectItem, filteredValuesRefs, listIcon)}
            {noResultCondition && (
              <StyledEmptyStateMessage>
                <EmptyState
                  picture={emptyStatePicture}
                  className={`${emptyStateClassName} empty-state-wrap`}
                  heading={emptyStateHeading}
                  textPosition="center"
                >
                  {emptyStateChildren}
                </EmptyState>
              </StyledEmptyStateMessage>
            )}
          </div>
        </StyledComboListWrap>
      </StyledDropdownList>
    </WrapList>
  );
}

export default comboDropdownList;
