import React, { Component } from 'react'
import PhoneBookItem from './PhoneBookItem'
import { loadContact } from '../actions/phonebook'
import { connect } from 'react-redux'

class PhoneBookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            searchPhone: '',
            searchName: '',
            currentPage: 1,
            limit: 3
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePage = this.handlePage.bind(this);

    }
    componentDidMount() {
        this.props.loadContact(this.state.currentPage, this.state.limit, this.state.searchName, this.state.searchPhone);
    }
    onSearchName = (event) => {
        this.setState({
            searchName: event.target.value
        })
        const searchName = event.target.value
        this.props.loadContact(this.state.currentPage, this.state.limit, searchName, this.state.searchPhone);
    }

    onSearchPhone = (event) => {
        this.setState({
            searchPhone: event.target.value
        })
        const searchPhone = event.target.value
        this.props.loadContact(this.state.currentPage, this.state.limit, this.state.searchName, searchPhone);
    }
    handlePage(event) {
        const curpage = Number(event.target.id);
        this.setState({
            currentPage: curpage
        })
        this.props.loadContact(curpage, this.state.limit, this.state.searchName, this.state.searchPhone);
        event.preventDefault()
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
    }

    render() {
        let dataFiltered = this.props.data.items;
        const dataNode = dataFiltered.map((item, index) =>
            <PhoneBookItem
                key={index}
                id={item.id}
                no={(this.state.currentPage - 1) * this.state.limit + (index + 1)}
                name={item.name}
                phone={item.phone}
                sent={item.sent}
            />
        )
        let pages = Math.ceil(this.props.data.count / this.state.limit)
        let page = []
        let i;
        for (i = 1; i <= pages; i++) {
            page.push(
                <li className={this.state.currentPage === i ? 'page-item active' : 'page-item'} key={i}>
                    <button className="page-link" onClick={this.handlePage} id={i}>{i}</button>
                </li>
            )

        }
        return (

            <div>
                <div>
                    <div className="card">
                        <div className="card-header">Search Form</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <label className="col-form-label mr-2"><b>Name</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="name"
                                            aria-label="Name"
                                            name="name"
                                            value={this.state.searchName}
                                            onChange={this.onSearchName} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="col-sm-11 d-flex">
                                        <label className="col-form-label md-4 mr-2"><b>Phone</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="phone number"
                                            aria-label="Phone"
                                            name="phone"
                                            value={this.state.searchPhone}
                                            onChange={this.onSearchPhone} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataNode}
                    </tbody>
                </table>

                {/* pagination */}
                <nav aria-label="Page navigation example position-sticky">
                    <ul className="pagination">
                        <li className={this.state.currentPage === 1 ? "page-item disabled" : "page-item"}>
                            <button className="page-link" aria-label="Previous" id={this.state.currentPage-1} onClick={this.handlePage}>
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        {page}
                        <li className={` ${this.state.currentPage === pages ? "page-item disabled" : "page-item"}`}>
                            <button className="page-link" aria-label="Next" id={this.state.currentPage+1} onClick={this.handlePage}>
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                {/* <nav aria-label="Page navigation example position-sticky">
                    <ul className="pagination">
                    <li className="page-item"><a class="page-link">Previous</a></li>
                        <li className={this.state.currentPage === 1 ? "page-item disabled" : "page-item"}></li>
                        {page}
                        <li className={` ${this.state.currentPage === pages ? "page-item disabled" : "page-item"}`}>
                        <li className="page-item"><a class="page-link" href="#">Next</a></li>
                        </li>
                    </ul>
                </nav> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.phonebooks
})

const mapDispatchToProps = (dispatch) => ({
    loadContact: (curpage, limit, searchName, searchPhone) => dispatch(loadContact(curpage, limit, searchName, searchPhone))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneBookList)