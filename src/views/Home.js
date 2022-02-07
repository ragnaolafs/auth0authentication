import React, { useEffect } from 'react';
import photosApi from '../api/photos';
import useApi from '../api/useApi';
import Header from '../components/Header';
import ImageList from '../components/GridList';
import Loading from '../components/Loading';

function Home() {
  const getPhotosApi = useApi(photosApi.getPhotos);

  useEffect(() => {
    getPhotosApi.request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (getPhotosApi.loading) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
      <ImageList photos={getPhotosApi.data} />
    </div>
  );
}

export default Home;