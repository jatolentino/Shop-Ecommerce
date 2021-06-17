import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import AuthContext from "../../contexts/auth-context";
import PageTitle from "../../components/Common/PageTitle";
import UserArea from "../../components/User/UserArea";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_API + `user/${userId}`)
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="user_wrapper">
      <PageTitle title={user.name} />
      <UserArea user={user} />
    </div>
  );
}

export default User;
