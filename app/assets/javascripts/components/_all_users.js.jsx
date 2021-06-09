const AllUsers = props => {
    var users = props.users.map(user => {
        return (
            <div key={user.id}>
                <User user={user} />
            </div>
        );
    });

    return <div>{users}</div>;
};
