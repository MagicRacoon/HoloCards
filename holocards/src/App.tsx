import './App.css';
import CardDeck from './components/Cards/CardDeck';
import Layout from './components/Layout';

function App() {
  return (
    <div className="app">
      <Layout>
        <CardDeck />
      </Layout>
    </div>
  );
};

export default App;
