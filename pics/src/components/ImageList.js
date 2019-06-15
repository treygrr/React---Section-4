import React from 'react';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        
    }

    render() {
        console.log(this.props);
        return (
            <div>
                This is the Image list component!
            </div>
        );
    }
}

export default ImageList;