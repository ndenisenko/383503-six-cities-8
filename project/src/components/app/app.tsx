import Main from '../main/main';

const Data = {
  CARDS_COUNT: 5,
};

function App(): JSX.Element {
  return (
    <Main cardsCount = {Data.CARDS_COUNT}/>
  );
}

export default App;
