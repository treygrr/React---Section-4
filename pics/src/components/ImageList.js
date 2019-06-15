import React from 'react';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        
    }

    render() {
        console.log(this.props);
        const images = this.props.images.map((image) => {
            return <img src={image.urls.regular} alt={image.alt_description}></img>
        });
        return (
            <div>
                 {images}
            </div>
        );
    }
}

export default ImageList;