import React from 'react';

class NamesForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      names: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    console.log('Student names were submitted: ' + this.state.names);
    this.props.updateNames(this.state.names);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ names: event.target.value });
  }

  render() {
    if (this.props.enabled) {
      return (
        <div className="names-form-container">
          <h2>Student Names</h2>
          <p>
            Here you can type your student names. Each student will be assigned
            a seat randomly.
          </p>
          <form onSubmit={this.handleSubmit}>
            <input
              id="studentNames"
              type="text"
              value={this.state.names}
              onChange={this.handleChange}
              placeholder="Input student names here (e.g. Jojo, Lili, Bibi)"
            />
            <input type="submit" value="Update" />
          </form>
        </div>
      );
    }
    return <div />;
  }
}

export default NamesForm;
