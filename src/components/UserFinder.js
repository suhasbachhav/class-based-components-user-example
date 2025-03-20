import { Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';

class UserFinder extends Component {
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: '',
        };
    }

    componentDidMount() {
        // Initialize filteredUsers with the users from context
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                ),
            });
        }
    }

    render() {
        return (
            <>
                <div className={classes.finder}>
                    <input
                        type="text"
                        onChange={(event) =>
                            this.setState({ searchTerm: event.target.value })
                        }
                    />
                </div>
                <Users users={this.state.filteredUsers} />

            </>

        );
    }
}

export default UserFinder;