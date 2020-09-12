import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'JDoe@gmail.com',
                    phone: '444-444-4444'
                },
                {
                    id: 2,
                    name: 'Henry Doe',
                    email: 'HDoe@gmail.com',
                    phone: '555-555-5555'
                },
                {
                    id: 3,
                    name: 'Mary Doe',
                    email: 'MDoe@gmail.com',
                    phone: '666-666-6666'
                },

            ]
        }
    }
    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact name={contact.name} email={contact.email} phone={contact.phone} />
                ))}
            </React.Fragment>
        )
    }
}
export default Contacts;