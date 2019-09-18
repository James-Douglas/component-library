import React from 'react';
import ManorIcon from '../../components/Icon/Icon.component';

import styles from './All-icons.module.css';
import '../../index.css';

/* contact, close, closeCircle, info, check */
const AllIconsView = () => (
  <>
    <div className={styles['icon-wrap']}>
      <ManorIcon name="contact" size={6} />
      <ManorIcon name="contact" size={4} />
      <ManorIcon name="contact" size={2} />
    </div>
    <div className={styles['icon-wrap']}>
      <ManorIcon name="check" size={6} />
      <ManorIcon name="check" size={4} />
      <ManorIcon name="check" size={2} />
    </div>
    <div className={styles['icon-wrap']}>
      <ManorIcon name="close" size={6} />
      <ManorIcon name="close" size={4} />
      <ManorIcon name="close" size={2} />
    </div>
    <div className={styles['icon-wrap']}>
      <ManorIcon name="closeCircle" size={6} />
      <ManorIcon name="closeCircle" size={4} />
      <ManorIcon name="closeCircle" size={2} />
    </div>
  </>
);

export default AllIconsView;
