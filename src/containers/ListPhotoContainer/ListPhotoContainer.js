import React, { useState } from 'react';
import styled from 'styled-components';
import { IMAGES } from '../../configs';
import SearchForm from '../../components/SearchForm';

const Gallery = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 150px;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: -2px 2px 10px 0px rgba(68, 68, 68, 0.4);
  grid-row-end: span 2;
`;

const Image = styled.img`
  &:hover {
    transform: scale(1.5);
  }
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: 0.5s transform ease-in-out;
`;

const Loading = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
`;

const Unsplash = styled.a`
  color: blue;
`;

const Watermark = styled.p`
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 10px;
`;

const ListPhoto = ({ listPhoto, actions: { getPhotos } }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getPhotos(term);
  };

  const handleChange = (term) => {
    setTerm(term);
  };

  const _renderPhotos = (photos) => {
    if (photos) {
      return photos.map((photo) => {
        return (
          <Item>
            <Image src={photo.urls.full} alt={photo.alt_description} />
          </Item>
        );
      });
    }
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} />
      <Watermark>
        Powered by
        <Unsplash href="https://unsplash.com/" target="_blank">
          unsplash
        </Unsplash>
      </Watermark>
      <Gallery>
        {listPhoto.loading ? (
          <Loading src={IMAGES.LOADING} alt="Loading" />
        ) : (
          _renderPhotos(listPhoto.photos)
        )}
      </Gallery>
    </>
  );
};

export default ListPhoto;
