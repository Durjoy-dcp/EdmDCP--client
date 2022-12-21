import React from 'react';
import PhotoAlbum from 'react-photo-album';
import photos from './Photos';

const ImageGalary = () => {
    return (
        <div className='container mx-auto p-3' style={{ maxWidth: "900px" }}>


            <h1 className='py-4  bebus-font '>  TOUR</h1>
            <hr />

            <PhotoAlbum layout="columns" photos={photos} />
        </div>
    );
};

export default ImageGalary;