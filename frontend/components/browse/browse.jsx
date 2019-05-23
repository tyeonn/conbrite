import React from 'react';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: this.props.match.params.search,
    };

  }

  componentDidMount() {
    if(this.props.match.params.search) {
      console.log('SEARCHED');
      this.props.searchEvents(this.props.match.params.search);
    }else {
      this.props.retrieveEvents();
    }

  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if(prevProps.match.params.search != this.props.match.params.search) {
      this.props.searchEvents(this.props.match.params.search);
    }
  }

  render() {
    
    return(
      <div>hi</div>
    )
  }
}

export default Browse;