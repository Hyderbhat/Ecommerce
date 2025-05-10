import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Welcome, {user ? user.email : 'Guest'}</h1>
    </div>
  );
};
