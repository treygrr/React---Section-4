import './ImageList.css';
import React from 'react';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        
    }

    render() {
        console.log(this.props);


        const images = this.props.images.map(({alt_description, id, urls}) => {
            return <img key={ id } src={ urls.regular } alt={ alt_description }></img>
        });


        return (
            <div className="image-list">
                 {images}
            </div>
        );
    }
}

export default ImageList;