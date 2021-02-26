import React, { Component } from 'react'
import { updateContact, deleteContact, resendContact } from '../actions/phonebook';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import '../App.css'

class PhoneBookItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            name:'',
            phone:'',
            no:this.props.no

        }
        this.editBtnClicked = this.editBtnClicked.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleResend = this.handleResend.bind(this)
    }
    editBtnClicked() {
        this.setState({
            name:this.props.name,
            phone:this.props.phone,
            isEdit: true
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }
    handleUpdate(event) {
        this.props.updateContact(this.props.id, this.state.name, this.state.phone)
        this.setState({
            isEdit: false

        })
    }

    handleResend() {
        this.props.resendContact(this.props.id, this.state.name, this.state.phone)
    }

    handleDelete() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You're data can't restore again!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I\'m sure!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.deleteContact(this.props.id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
    render() {
        if (this.state.isEdit) {
            return (

                <tr>
                    <th scope="row">{this.props.no}</th>
                    <td>
                        <input type="text" value={this.state.name} onChange={this.handleInputChange} name="name" className="form-control" />
                    </td>
                    <td>
                        <input type="text" value={this.state.phone} onChange={this.handleInputChange} name="phone" className="form-control" />
                    </td>
                    <td>
                        <button onClick={this.handleUpdate} className="btn btn-success mr-2 "><i className="fa fa-save"></i> save</button>
                    </td>
                </tr>
            )

        } else {

            return (
                <tr className={this.props.sent ? "" : "bg-danger text-white"}>
                    <th scope="row">{this.props.no}</th>
                    <td scope="col-md-4">{this.props.name}</td>
                    <td>{this.props.phone}</td>
                    <td>
                        <button onClick={this.editBtnClicked} className={this.props.sent ? "btn btn-success mr-2" : "d-none"}><i className="fa fa-edit"></i> update </button>
                        <button onClick={this.props.sent ? this.handleDelete : this.handleResend} className={this.props.sent ? 'btn btn-danger' : 'btn btn-primary text-white'}><i className={this.props.sent ? "fa fa-trash" : "fa fa-refresh"}></i> {this.props.sent ? 'delete' : 'resend'}</button>
                    </td>
                </tr>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateContact: (id, name, phone) => dispatch(updateContact(id, name, phone)),
    deleteContact: (id) => dispatch(deleteContact(id)),
    resendContact: (id, name, phone) => dispatch(resendContact(id, name, phone)),
})

export default connect(
    null,
    mapDispatchToProps
)(PhoneBookItem)