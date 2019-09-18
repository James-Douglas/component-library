import React from 'react';
import '../../index.css';

class ManorInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <label>
          {this.props.content}
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </React.Fragment>
    );
  }
}

export default ManorInput;