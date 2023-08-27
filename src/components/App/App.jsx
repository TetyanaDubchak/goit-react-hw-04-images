import {useEffect , useState} from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { fetchImages } from "../api";
import { Button } from "../Button/Button";
import { Wrapper } from "./App.styled";
import { Loader } from "../Loader/Loader";
import {Notify} from 'notiflix';



export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const changeQueryHandler = (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1); 
  } 

  const onSubmitHandler = event => {
    event.preventDefault();
    if (event.target.elements.query.value.trim() === '') {
      Notify.warning('Please, enter something what you want to see')
      return;
    }
    changeQueryHandler(event.target.elements.query.value);   
    event.target.reset();
  }

  useEffect(() => {

    async function getImages() {
      try {
        if (query === '') {
          return
        }
         setIsLoading(true);
        const imagesCollection = await fetchImages(query, page);
        const { hits } = imagesCollection;
        if (hits.length) {
          setImages(prevState =>
           page > 1 ? [...prevState, ...hits] : hits
          )
          setIsLoading(false);
        }
        setIsLoading(false);
      } catch (error) {
        Notify.failure('Sorry, something went wrong')
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const loadMoreHandler = async () => {
    setPage(prevState => prevState + 1)
    }

  return (
      <Wrapper>
        <Searchbar onSubmitHandler={onSubmitHandler} />
        {isLoading ? <Loader/> : (<ImageGallery imagesCollection={images} />)}
        {images.length > 0 && <Button loadMore={loadMoreHandler}/>}
      </Wrapper>
      
  )
}
