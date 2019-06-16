import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        
    }

    render() {
        console.log(this.props);


        const images = this.props.images.map((image) => {
            return <ImageCard key={ image.id } image={image}/>
        });


        return (
            <div className="image-list">
                 {images}
            </div>
        );
    }
}

export default ImageList;