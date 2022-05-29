function UserInfo(props) {
  return (
    <div className="user-info">
      <div className="user-info-name">{props.name}</div>
      <div className="user-info-email">{props.email}</div>
      <div className="user-info-city">{props.city}</div>
      <div className="user-info-dob">{props.dob}</div>
    </div>
  );
}

export default UserInfo;
