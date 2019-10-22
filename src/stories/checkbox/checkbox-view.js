import css from 'styled-jsx/css';

export default css`
.background {
  background: #F0F0F0;
  height: 100vh;
  width: 100vw;
}
.demo-container{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
}
.centered{
  width: 500px;
  height: 350px;
  background: white;
  padding: 50px;
}
.grid-view {
  height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
}
.results-container {
  min-height: 120px;
  background: #143D96;
  color: white;
  padding: 2rem;
}
`;
