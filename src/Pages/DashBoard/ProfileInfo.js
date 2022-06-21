import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const ProfileInfo = ({ user }) => {
  const [userinfo] = useAuthState(auth);

  return (
    <div className="">
      <div class="avatar w-full justify-center">
        <div class=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            className="w-[100%]"
            src={user?.img || userinfo.photoURL}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between py-5">
        <h2 className="text-2xl">
          welcome <span className="font-bold">{user?.name}</span>
        </h2>
        <label htmlFor="open-modal" className="btn  btn-sm">
          edit
        </label>
      </div>
      <hr />
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Age: {user?.age}</p>
      <p>City: {user?.city}</p>
      <p>Country: {user?.country}</p>
    </div>
  );
};

export default ProfileInfo;
