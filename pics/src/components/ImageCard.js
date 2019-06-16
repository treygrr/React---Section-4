import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 }
        this.imageref = React.createRef();
    }

    componentDidMount = () => {
        this.imageref.current.addEventListener('load', this.calcSpan);
    }

    calcSpan = () => {
        const height = this.imageref.current.clientHeight;
        console.log(height);
        const calcs = Math.ceil(height / 10);
        console.log(calcs);
        this.setState({ spans: calcs });
    }

    render() {
        const { alt_description, urls }  = this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    alt={alt_description}
                    src={urls.regular}
                    ref={this.imageref}
                />
            </div>
        );
    }
}

export default ImageCard;