import React from 'react';
import ReactDOM from 'react-dom';

class ImageCard extends React.Component {
    getImageHeight = () => {

    }

    calcSpan = () => {

    }

    render() {
        const { alt_description, urls }  = this.props.image;
        return(
            <div>
                <img 
                    alt={alt_description}
                    src={urls.regular}
                    style={{grid: '50px'}}
                />
            </div>
        );
    }
}

export default ImageCard;