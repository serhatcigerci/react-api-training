import logo from './logo.svg';
import './App.css';
import Search from './Search';
import axios from 'axios';

function App() {

  const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID S6dwm0vcEyNkQhzUdxrFx_AEwh49bZl74WcVFKozVnw'
      },
      params: {
        query:term
      }
    })
    return response
  }

  const handleSubmit = (term) => {
    console.log(term)
    searchImages(term)
  }
  return (
    <div className="App">
      <Search search={handleSubmit} />
    </div>
  );
}

export default App;
