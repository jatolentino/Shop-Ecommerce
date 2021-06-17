
function UserArea({ user }) {
  return (
    <div className="user-area-wrap ptb-100 container">
      <h4 className="user-header">User Profile</h4>

      <div className="user-info flex space-x-5 items-center">
        <div>
              <img src="https://i.pravatar.cc/250?img=47"/>
        </div>
        <div className="w-full">
        <table className="table m-0">
            <tbody>
                <tr>
                    <th scope="row">Name:</th>
                    <td>Jennie Nichols</td> 
                </tr>
                <tr>
                    <th scope="row">Username:</th>
                    <td>{user.username}</td> 
                </tr>
                <tr>
                    <th scope="row">Email:</th>
                    <td>{user.email}</td> 
                </tr>
                <tr>
                    <th scope="row">Phone:</th>
                    <td>{user.phone}</td> 
                </tr>
                <tr>
                    <th scope="row">Role:</th>
                    <td>{user.role}</td> 
                </tr>
                <tr>
                  <th scope="row">Number of orders:</th>
                  <td>

                  {user.role === "user" &&
                  (user.orders.length <= 0 ? (
                      <p><span className="user-border">No orders </span></p>
                  ) : (
                      user.orders.map((order) => {
                      return <li key={order}>{order}</li>;
                      })
                  ))}

                  </td>
                </tr>
            </tbody>

        </table>
        </div>

      </div>
    </div>
  );
}

export default UserArea;
