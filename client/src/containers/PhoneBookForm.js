
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/phonebook'

class PhoneBookForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            name: '',
            phone: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClickIsVisible = this.handleClickIsVisible.bind(this)
        this.handleClickSave = this.handleClickSave.bind(this)
    }

    handleClickIsVisible() {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
    }

    handleClickSave(event) {
        if (this.state.name && this.state.phone) {
            this.props.addContact(this.state.name, this.state.phone)
            this.setState({ name: '', phone: '' })
        }
        event.preventDefault();
    }
    render() {
        if (this.state.isVisible) {

            return (

                <div>
                    <div className="card">
                        <div className="card-header">Adding Form</div>
                        <div className="card-body">
                            <form onSubmit={this.handleClickSave}>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="d-flex">
                                            <label className="col-form-label mr-2"><b>Name</b></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="name"
                                                aria-label="Name"
                                                name="name"
                                                value={this.state.name}
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="col-sm-11 d-flex">
                                            <label className="col-form-label md-4 mr-2"><b>Phone</b></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="phone number"
                                                aria-label="Phone"
                                                name="phone"
                                                value={this.state.phone}
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <button type="submit" className="btn btn-success mr-1"><i className="fa fa-check-circle"></i> save</button>
                                        <button type="button" onClick={this.handleClickIsVisible} className="btn btn-warning text-white"><i className="fa fa-ban text-white"></i> cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <button className="btn btn-primary" onClick={this.handleClickIsVisible}><i className="fa fa-plus"></i> add</button>
            )
        }
    }
}

const mapDispatchToProps = dispatch => ({
    addContact: (name, phone) => dispatch(addContact(name, phone)),
})

export default connect(
    null,
    mapDispatchToProps
)(PhoneBookForm)