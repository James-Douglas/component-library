import React from 'react';
import Input from '../../components/Input/Input.component';
import styles from './view-styles';

const prefixSuffixView = () => {
  const tooltip = {
    title: 'Tooltip heading',
    body: 'Prefix and suffix view',
  };

  const SvgUkFlag = () => (
    <svg width="30" height="21" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter x="-54.5%" y="-83.3%" width="209.1%" height="270.7%" filterUnits="objectBoundingBox" id="a">
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0.608497509 0 0 0 0 0.57232159 0 0 0 0 0.57232159 0 0 0 0.5 0" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#a)" transform="translate(4 2)" fillRule="nonzero" fill="none">
        <path d="M21.579 14.398H.379A.379.379 0 0 1 0 14.019V.39C0 .181.17.012.379.012h21.2c.209 0 .378.17.378.378V14.02c0 .209-.17.379-.378.379z" fill="#41479B" />
        <path d="M21.957.39c0-.209-.17-.378-.378-.378h-1.694L12.87 4.607V.012H9.086v4.595L2.072.012H.38C.169.012 0 .182 0 .39v.98l6.017 3.942H0v3.786h6.017L0 13.04v.979c0 .209.17.379.379.379h1.693l7.014-4.595v4.595h3.785V9.803l7.014 4.595h1.694c.209 0 .378-.17.378-.379v-.98L15.94 9.099h6.017V5.312H15.94l6.017-3.942V.39z" fill="#F5F5F5" />
        <g fill="#FF4B55">
          <path d="M21.957 6.069h-9.843V.012H9.843v6.057H0V8.34h9.843v6.058h2.271V8.34h9.843z" />
          <path d="M7.674 9.098L.011 14.072a.374.374 0 0 0 .368.326H.9l8.165-5.3h-1.39zM14.855 9.098h-1.39l8.152 5.292c.19-.02.34-.176.34-.371v-.311l-7.102-4.61zM0 .808l6.938 4.504h1.39L.222.049C.09.109 0 .239 0 .39v.418zM14.262 5.312L21.944.325a.373.373 0 0 0-.365-.313h-.543l-8.165 5.3h1.391z" />
        </g>
      </g>
    </svg>
  );

  return (
    <>
      <style jsx>{styles}</style>
      <div className="white-background">
        <Input
          id="input-one"
          placeholder="Placeholder one"
          type="text"
          bordered
          required={false}
          autofill={false}
          disabled={false}
          prefix={<SvgUkFlag />}
          suffix="?"
          invalid={false}
          label="[Fieldset label] With tooltip, prefix and suffix"
          tooltip={tooltip}
        />

        <Input
          id="input-two"
          placeholder="Placeholder two"
          type="text"
          bordered
          required={false}
          autofill={false}
          disabled={false}
          prefix="prefix"
          invalid={false}
          label="[Fieldset label] With prefix"
        />

        <Input
          id="input-three"
          placeholder="Placeholder three"
          type="text"
          bordered
          required={false}
          autofill={false}
          disabled={false}
          suffix="suffix"
          invalid={false}
          label="[Fieldset label] With suffix"
        />
      </div>

    </>
  );
};

export default prefixSuffixView;
