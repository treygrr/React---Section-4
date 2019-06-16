import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageref = React.createRef();
    }

    componentDidMount = () => {
        console.log(this.calcSpan(this.getImageHeight()));
        const spanning = this.calcSpan();
    }

    calcSpan = () => {
        let height = this.imageref.current.clientHeight;
        let calc = Math.ceil(height / 200);
        return calc;
    }

    render() {
        const { alt_description, urls }  = this.props.image;
        return(
            <div>
                <img 
                    alt={alt_description}
                    src={urls.regular}
                    ref={this.imageref}
                    style={{gridRow: `${this.spanning}`}}
                />
            </div>
        );
    }
}

export default ImageCard;