import { useState } from 'react';
import './App.css';
import Container from './components/Container/Container';
import ItemsContext from './contexts/ItemsContext';
import Header from './components/Header/Header';
import Content from "./components/Content/Content";

function App() {

  const [items, updateItems] = useState([]);
  return (

    <ItemsContext.Provider
      value={{
        items,
        updateItems,
      }}
    >
      <Container>
        <Header />
        <Content />
      </Container>
    </ItemsContext.Provider>
  );
}

export default App;
