import { render } from '@testing-library/react';
import React, { Component, Fragment } from 'react'
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      visibility: true,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEdit = (evt) => {
    evt.preventDefault();
    this.setState({visibility: !this.state.visibility})
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      firstName: evt.target.firstName.value,
      lastName: evt.target.lastName.value,
      visibility: !this.state.visibility,
      })
  }

  render() {
    return (
      <div className="container mb-4">
      <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="well well-sm">
          {this.state.visibility &&
            <Fragment>
              <div>
                <label>First Name: {this.state.firstName}</label>
              </div>
              <div>
                <label>Last Name: {this.state.lastName}</label>
              </div>
              <div className="d-flex justify-content-center">
              <Button onClick={this.handleEdit}>Edit</Button>
              </div>
            </Fragment>
          }
          {!this.state.visibility &&
                <form className="form-horizontal" onSubmit={this.handleSubmit}>

                  <div className="form-group mt-3">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>First Name</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        type="text"
                        name="firstName"
                        placeholder={this.state.firstName} />
                    </InputGroup>
                  </div>

                    <div className="form-group">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Last Name</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        type="text"
                        name="lastName"
                        placeholder={this.state.lastName} />
                      </InputGroup>
                    </div>

                  <div className="form-group d-flex justify-content-center">
                    <Button type="submit" className="btn btn-default update-btn">
                      Submit
                    </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button onClick={this.handleEdit} className="btn btn-default update-btn">
                      Cancel
                    </Button>
                  </div>

                </form>
          }
        </div>
        </div>
        </div>
        </div>
    )
  }
}

export default FormEdit;
