import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { Button } from 'reactstrap';

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true,
    };
    this.Toggle = this.Toggle.bind(this);
  }

  Toggle = (evt) => {
    evt.preventDefault();
    this.setState({visibility: !this.state.visibility})
  }

  render() {
    return (
      <div><h4>Home</h4>

        {this.state.visibility &&
          <ul>
          <li>File1</li>
          <li>File2</li>
          <li>File3</li>
        </ul>
        }
      <div className="d-flex justify-content-center">
        <Button onClick={this.Toggle}>Toggle</Button>
      </div>
    </div>
    )
  }
}

export default Folder;
