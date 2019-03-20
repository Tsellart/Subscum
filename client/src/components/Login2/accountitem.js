import React, {Component} from 'react';

const UsernameContext = React.createContext('');

class AccountItem extends Component {
    render() {
        return (
            <UsernameContext.Consumer>
                {(userName) => {

                }}
            </UsernameContext.Consumer>
        )
    }
}

export default AccountItem;