import css from 'styled-jsx/css';

export default css`
.icon {
  width: 1.6rem;        /* 16px */
  height: 1.6rem;       /* 16px */
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.flipH {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
.flipV {
  -moz-transform: scaleY(-1);
  -o-transform: scaleY(-1);
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  filter: FlipV;
  -ms-filter: "FlipV";
}
`;
