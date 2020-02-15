import React from "react";

const User = ({ user }) => {
  return (
    <li>
      <div>
        <img alt="" src="" />
        <div>
          <h6>{user.result.url} </h6>
          <h3>{user.result.name}</h3>
          <p>{user.result.detailedDescription.articleBody}</p>
        </div>
      </div>
      <hr />
    </li>
  );
};

const UserDetails = ({ users }) => {
  return (
    <ul>
      {users.itemListElement.map((user, index) => {
        return <User user={user} key={index} />;
      })}
    </ul>
  );
};

export default UserDetails;
