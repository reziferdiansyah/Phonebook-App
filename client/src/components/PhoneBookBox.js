// import React, { Component } from 'react'
// import PhoneBookList from '../containers/PhoneBookList'
// import PhoneBookForm from '../containers/PhoneBookForm'


// export default class PhoneBookBox extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div className="container d-flex flex-column">
//                 <div className="mt-2"  >
//                     <div className="alert mt-2" id="header-chat" role="alert"><br/>
//                         <h1 className="text-center">Phone Book Apps</h1>
//                     </div>
//                 </div>
//                 <div className="mb-3">
//                     <PhoneBookForm />
//                 </div>
//                 <PhoneBookList />
//             </div>
//         )
//     }
// }



import React, { Component } from 'react'
import PhoneBookList from '../containers/PhoneBookList'
import PhoneBookForm from '../containers/PhoneBookForm'

export default class PhoneBookBox extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container d-flex flex-column">
                <div className="mt-2"  >
                    <div className="alert mt-2" id="header-chat" role="alert"><br />
                        <h1 className="text-center">Phone Book Apps</h1>
                    </div>
                </div>
                <div className="mb-3">
                    <PhoneBookForm />
                </div>
                <PhoneBookList />
            </div>
        )
    }
}