import Artworks from '../components/Artworks'

function Home({filterData, filterTitle, favorites, setFavorites}) {
  

  return (
        <Artworks artworks={filterData} filterTitle={filterTitle} favourite={favorites} setFav={setFavorites} /> 
    );
  }
  
  export default Home;