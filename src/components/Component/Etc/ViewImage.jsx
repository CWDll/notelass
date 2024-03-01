import React from 'react';

const ViewImage = ({ setViewImage, imageUrl }) => {

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            cursor: 'pointer',
        }} onClick={() => setViewImage(null)}>
            <img src={imageUrl} alt="View" style={{ maxWidth: '80%', maxHeight: '80%' }} />
            <button onClick={() => setViewImage(null)}>닫기</button>
        </div>
    );
};

export default ViewImage;