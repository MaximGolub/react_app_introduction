import UserAvatar from "./UserAvatar";
import UserInfo from "./UserInfo";
import UserSessionInfo from "./UserSessionInfo";

const User = ({ user }) => {
  if (!user) return null;
  return (
    <div className="user">
      <UserAvatar avatar={user.avatar} />
      <UserInfo
        name={user.name}
        email={user.email}
        city={user.city}
        dob={user.dob}
      />
      <UserSessionInfo />
    </div>
  );
};

export default User;
