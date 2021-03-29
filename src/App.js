import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Row from './Components/Row';
import requests from './api/requests';



function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner /> 

      <Row 
        title="Netflixオリジナル作品" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow={true} 
      />

      <Row title="人気急上昇の作品" fetchUrl={requests.fetchTrending} />
      <Row title="Netflixで人気の作品" fetchUrl={requests.fetchTopRated} />
      <Row title="アクション映画" fetchUrl={requests.fetchActionMovies} />
      <Row title="コメディー映画" fetchUrl={requests.fetchComedyMovies} />
      <Row title="ホラー映画" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ロマンス映画" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="ドキュメンタリー映画" fetchUrl={requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
