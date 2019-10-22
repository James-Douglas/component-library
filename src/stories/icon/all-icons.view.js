import React from 'react';
import ManorIcon from '../../components/Icon/Icon.component';

import iconStyles from './icons-view-styles';

/* contact, close, closeCircle, info, check */
const AllIconsView = () => (
  <>
    <style jsx>{iconStyles}</style>
    <div className="icon-wrap">
      <ManorIcon name="contact" iconSize={6} />
      <ManorIcon name="contact" iconSize={4} />
      <ManorIcon name="contact" iconSize={2} />
    </div>
    <div className="icon-wrap">
      <ManorIcon name="check" iconSize={6} />
      <ManorIcon name="check" iconSize={4} />
      <ManorIcon name="check" iconSize={2} />
    </div>
    <div className="icon-wrap">
      <ManorIcon name="close" iconSize={6} />
      <ManorIcon name="close" iconSize={4} />
      <ManorIcon name="close" iconSize={2} />
    </div>
    <div className="icon-wrap">
      <ManorIcon name="closeCircle" iconSize={6} />
      <ManorIcon name="closeCircle" iconSize={4} />
      <ManorIcon name="closeCircle" iconSize={2} />
    </div>
  </>
);

export default AllIconsView;
