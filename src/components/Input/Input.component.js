import React from 'react';
import PropTypes from 'prop-types';

class ManorInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { content } = this.props;
    const { value } = this.state;
    return (
      <>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          {content}
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </>
    );
  }
}

ManorInput.propTypes = {
  content: PropTypes.string,
};

ManorInput.defaultProps = {
  content: '',
};

export default ManorInput;
