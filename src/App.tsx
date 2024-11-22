import { useState, useEffect, FC } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import axios, { AxiosError } from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Iphoto } from "./types/Iphoto";
const App: FC = () => {
  const [photos, setPhotos] = useState<Iphoto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Стан для модального вікна
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Вибране зображення

  const onSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
    setPage(1);
    setPhotos([]);
    setError(null);
  };

  const loadMoreImages = () => {
    setPage((prev) => prev + 1); // Збільшуємо номер сторінки
  };

  // Функція для відкриття модального вікна
  const openModal = (image: string) => {
    setSelectedImage(image); // Встановлюємо вибране зображення
    setIsModalOpen(true); // Відкриваємо модальне вікно
  };

  // Функція для закриття модального вікна
  const closeModal = () => {
    setIsModalOpen(false); // Закриваємо модальне вікно
    setSelectedImage(null); // Скидаємо вибране зображення
  };
  // useEffect(() => {
  //   const FetchPhotos = async () => {
  //     try {
  //       setLoading(true);

  //       const { data } = await axios.get(
  //         "https://api.unsplash.com/photos/?client_id=IDgAvAjtiEwXNlt10NzrgSU2yXVPW_2ObHPWX9OSr98"
  //       );
  //       setPhotos(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   FetchPhotos();
  // }, []);

  useEffect(() => {
    if (searchValue === null) return;
    const fetchPhotosBySearchValue = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get<{ results: Iphoto[] }>(
          `https://api.unsplash.com/search/photos?query=${searchValue}&page=${page}&client_id=IDgAvAjtiEwXNlt10NzrgSU2yXVPW_2ObHPWX9OSr98`
        );

        setPhotos((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotosBySearchValue();
  }, [searchValue, page]);

  return (
    <>
      <ToastContainer />
      <SearchBar onSearch={onSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <ImageGallery photos={photos} onImageClick={openModal} />
      {photos !== null && <LoadMoreBtn onClick={loadMoreImages} />}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage} // Передаємо вибране зображення
      />
    </>
  );
};

export default App;
