import React from "react";
import PropTypes from "prop-types";

class ShowMore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: props.limit
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    //option1
    //const newLimit = this.state.limit + 5;
    //this.setState({limit: newLimit});

    //option2
    this.setState((prevState) => {
      return { limit: prevState.limit + 5 };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.showMore}>Show More</button><br/>
        <span>Limit: {this.state.limit}</span>
      </div>
    );
  }
}

ShowMore.propTypes = {
  limit: PropTypes.number
};

ShowMore.defaultProps = {
  limit: 10
};

export default ShowMore;
