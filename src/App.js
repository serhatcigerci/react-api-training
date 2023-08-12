import './App.css';
import Search from './Search';
import axios from 'axios';
import { useState } from 'react';
import ImageList from './components/ImageList';

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
    return response.data.results
  }

  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    setImages(result)
  }
  return (
    <div className="App">
      <Search search={handleSubmit} />
      <ImageList imagesPlaceHolder={images} />
    </div>
  );
}

export default App;
