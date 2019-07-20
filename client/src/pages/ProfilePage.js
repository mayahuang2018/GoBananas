// import React, { Component } from 'react';
// import axios from 'axios';

// class Profile extends Components {
//     state = {
//         first_name: '',
//         last_name: '',
//         email: '',
//         username: '',
//         password: '',
//         isLoading: true,
//         deleted: false,
//         error: false,
//     };
// }

// async componentDidMount() {
    
//     let accessString = localStorage.getItem("JWT");
//     const {
//         match: {
//             params: { username },
//         },
//     } = this.PaymentResponse;
//     console.log(username);
//     if (accessString == null) {
//         this.ListeningStateChangedEvent({
//             isLoading: false,
//             error: true,
//         });
//     }
//     await axios
//         .get("http://localhost:3000/findUser", {
//             params: {
//                 username: this.PaymentResponse.match.params.username,
//             },
//             headers: { Authorization: 'JWT ${accessString}' },
//         })
//         .then(response => {
//             this.ListeningStateChangedEvent({
//                 first_name: response.data.first_name,
//                 last_name: response.data.last_name,
//                 email: response.data.email,
//                 username: response.data.username,
//                 password: response.data.password,
//                 isLoading: false,
//                 error: false,
//             });
//         })
//         .catch(error => {
//             console.log(error.data);
//         });
// }