import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../Firebase.init";
import Spinner from "../Shared/Spinner";
import Modal from "../Modal/Modal";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  const [users, setUsers] = useState(null);
  const [user] = useAuthState(auth);
  const { data, isLoading, refetch } = useQuery("profile", () =>
    fetch(` https://electric-gear.herokuapp.com/users/${user.email}`, {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => res.json())
  );
  useEffect(() => {
    setUsers(data);
  }, [data]);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="p-10 shadow-xl w-1/2">
      {data.map((user) => (
        <ProfileInfo key={user._id} user={user} />
      ))}
      {users && <Modal users={users} setUsers={setUsers}></Modal>}
    </div>
  );
};

export default Profile;
