import css from 'styled-jsx/css';

export default css.global`
.grid-view {
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
}
p {
  font-size: 1.6rem;
}
.row-view {
  margin-bottom: 2rem;
  border: 0.1rem dashed lightblue;
}
.col-view {
  border: 0.1rem solid #1c3e94;
  background: rgba(28, 62, 148, 0.2);
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
}
`;
