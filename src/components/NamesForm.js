import React from 'react';
import { connect } from 'react-redux';
import { generateTable, nameformToggle } from '../actions/appActions';

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
    this.props.generateTable(
      this.props.seatsPerTable,
      'rows',
      this.props.rows,
      this.state.names.split(', ')
    );
    this.props.nameformToggle();
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ names: event.target.value });
  }

  render() {
    if (this.props.isNamesFormShown) {
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

const mapStateToProps = state => ({
  rows: state.tables.rows,
  isNamesFormShown: state.tables.isNamesFormShown,
  seatsPerTable: state.tables.seatsPerTable
});

export default connect(
  mapStateToProps,
  {
    generateTable,
    nameformToggle
  }
)(NamesForm);
