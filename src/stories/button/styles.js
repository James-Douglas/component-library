import css from 'styled-jsx/css';

export default css`
.background {
  background: #F3F3F3;
  padding: 5em;
  height: 100vh;
  width: 100vw;
}
.container {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.lightbg, .darkbg, .darkbg-footer  {
  padding: 5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.darkbg {
  background: #001564;
}
.darkbg-footer {
  background: #333333;
}
.lightbg {
  background: #FFF;
}
.footer-alignment {
  margin-bottom: 2rem;
}
`;
