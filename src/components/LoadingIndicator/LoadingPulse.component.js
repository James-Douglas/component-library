import React from 'react';
import styles from './styles';

const LoadingPulse = () => (
  <div className="spin-wrap">
    <style jsx>{styles}</style>
    <div className="dot-pulse" />
  </div>
);

export default LoadingPulse;
