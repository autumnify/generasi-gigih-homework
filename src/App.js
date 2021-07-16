import { toUpper } from 'lodash';
import './App.css';
import Data from './constants/data1';

function App() {
  return (
    <div className="App">
      <h1 className="playlist-title">Create Playlist</h1>
      <img src={Data.album.images[1].url} alt={Data.album.id} className="bohemian-image"></img>
      
      <div className="description">
        <h3>{toUpper(Data.album.type)}</h3>
        <p>{Data.album.name}</p>
        <p>{toUpper(Data.album.artists[0].name)}</p>
        <input type="submit" value="Select" className="tombol"></input>
      </div>
    </div>
  );
}

export default App;
