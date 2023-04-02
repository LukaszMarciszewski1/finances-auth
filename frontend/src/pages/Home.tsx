import { useAuth } from 'context/AuthContext';
import HomeLayout from 'layouts/HomeLayout/HomeLayout';
import Button from 'components/Button/Button';
import people from 'assets/img/people.svg';

const Home: React.FC = () => {
  const { logout } = useAuth();

  return (
    <HomeLayout image={people}>
      <h2>
        Hello <strong>Test!</strong>
      </h2>
      <Button title={'sign out'} type='button' onClick={logout} />
    </HomeLayout>
  );
};

export default Home;
