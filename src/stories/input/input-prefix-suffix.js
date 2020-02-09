import React from 'react';
import Input from '../../components/Input/Input.component';
import StyledBackground from './view-styles';

const prefixSuffixView = () => {
  const tooltip = {
    title: 'Tooltip heading',
    body: 'Prefix and suffix view',
  };

  const SvgUkFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 512 512">
      <path fill="#f0f0f0" d="M0 85.333h512V426.67H0z" />
      <path fill="#d80027" d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z" />
      <g fill="#0052b4"><path d="M393.785 315.358L512 381.034v-65.676zM311.652 315.358L512 426.662v-31.474l-143.693-79.83zM458.634 426.662l-146.982-81.664v81.664z" /></g>
      <path fill="#f0f0f0" d="M311.652 315.358L512 426.662v-31.474l-143.693-79.83z" />
      <path fill="#d80027" d="M311.652 315.358L512 426.662v-31.474l-143.693-79.83z" />
      <g fill="#0052b4"><path d="M90.341 315.356L0 365.546v-50.19zM200.348 329.51v97.151H25.491z" /></g>
      <path fill="#d80027" d="M143.693 315.358L0 395.188v31.474l200.348-111.304z" />
      <g fill="#0052b4"><path d="M118.215 196.634L0 130.958v65.676zM200.348 196.634L0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z" /></g>
      <path fill="#f0f0f0" d="M200.348 196.634L0 85.33v31.474l143.693 79.83z" />
      <path fill="#d80027" d="M200.348 196.634L0 85.33v31.474l143.693 79.83z" />
      <g fill="#0052b4"><path d="M421.659 196.636L512 146.446v50.19zM311.652 182.482V85.331h174.857z" /></g>
      <path fill="#d80027" d="M368.307 196.634L512 116.804V85.33L311.652 196.634z" />
    </svg>
  );

  const SvgAusFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 512 512">
      <path fill="#0052b4" d="M0 85.333h512V426.67H0z" />
      <g fill="#f0f0f0">
        <path d="M223.397 255.996c.273-.304.543-.609.813-.916-.27.308-.546.61-.82.916h.007zM189.217 297.923l10.958 22.913 24.747-5.718-11.083 22.853 19.9 15.781-24.776 5.585.069 25.398-19.815-15.89-19.814 15.89.069-25.398-24.776-5.585 19.9-15.781-11.083-22.853 24.746 5.718zM387.076 326.387l5.227 10.929 11.803-2.728-5.286 10.9 9.492 7.528-11.818 2.663.032 12.114-9.45-7.578-9.45 7.578.032-12.114-11.817-2.663 9.491-7.528-5.285-10.9 11.803 2.728zM338.453 210.448l5.227 10.93 11.803-2.729-5.286 10.901 9.491 7.528-11.817 2.663.032 12.115-9.45-7.58-9.451 7.58.033-12.115-11.818-2.663 9.491-7.528-5.284-10.901 11.802 2.729zM387.076 144.198l5.227 10.93 11.803-2.73-5.286 10.902 9.491 7.527-11.817 2.664.032 12.114-9.45-7.58-9.45 7.58.032-12.114-11.817-2.664 9.491-7.527-5.285-10.902 11.803 2.73zM429.547 193.886l5.227 10.929 11.802-2.728-5.284 10.9 9.491 7.527-11.818 2.664.033 12.114-9.451-7.578-9.45 7.578.032-12.114-11.817-2.664 9.491-7.527-5.286-10.9 11.803 2.728zM399.179 251.856l4.11 12.652h13.304l-10.763 7.82 4.112 12.652-10.763-7.819-10.765 7.819 4.112-12.652-10.763-7.82h13.304z" />
        <path d="M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.553l45.167-25.099H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.827V85.333h55.652v48.573l87.43-48.573z" />
      </g>
      <path fill="#d80027" d="M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z" />
      <path fill="#0052b4" d="M155.826 200.344L256 255.996v-15.737l-71.847-39.915z" />
      <path fill="#f0f0f0" d="M155.826 200.344L256 255.996v-15.737l-71.847-39.915z" />
      <g fill="#d80027"><path d="M155.826 200.344L256 255.996v-15.737l-71.847-39.915zM71.846 200.344L0 240.259v15.737l100.174-55.652z" /></g>
      <path fill="#0052b4" d="M100.174 140.982L0 85.33v15.737l71.847 39.915z" />
      <path fill="#f0f0f0" d="M100.174 140.982L0 85.33v15.737l71.847 39.915z" />
      <g fill="#d80027"><path d="M100.174 140.982L0 85.33v15.737l71.847 39.915zM184.154 140.982L256 101.067V85.33l-100.174 55.652z" /></g>
    </svg>
  );

  const logValue = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <StyledBackground color="white">
      <Input
        label="With tooltip, prefix and suffix"
        tooltip={tooltip}
        id="input-one"
        placeholder="Placeholder one"
        type="text"
        bordered
        required={false}
        disabled={false}
        prefixContent={<SvgUkFlag />}
        suffixContent={<SvgAusFlag />}
        handleChange={(value) => logValue(value)}
      />

      <Input
        label="With prefix"
        id="input-two"
        placeholder="Placeholder two"
        type="text"
        bordered
        required={false}
        disabled={false}
        prefixContent="prefix"
        handleChange={(value) => logValue(value)}
      />

      <Input
        label="With suffix"
        id="input-three"
        placeholder="Placeholder three"
        type="text"
        bordered
        required={false}
        disabled={false}
        suffixContent="suffix"
        handleChange={(value) => logValue(value)}
      />
    </StyledBackground>
  );
};

export default prefixSuffixView;
