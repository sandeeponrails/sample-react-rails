class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.user.name}</h3>
                <p>{this.props.user.address}</p>
            </div>
        );
    }
}
