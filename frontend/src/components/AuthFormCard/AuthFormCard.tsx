import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';

interface AuthFormCardProps {
  children: React.ReactNode;
  title: string;
  path: string;
  linkName: string;
}

const AuthFormCard: React.FC<AuthFormCardProps> = ({
  children,
  title,
  path,
  linkName,
}) => {
  const location = useLocation();
  return (
    <div className={styles.authFormCard}>
      <h1>logo here</h1>
      {location.pathname === '/login' && <span>Welcome back!!!</span>}
      <h2>{title}</h2>
      <div className={styles.formContainer}>{children}</div>
      <div className={styles.linkContainer}>
        <span>Don't have an account?</span>
        <Link to={path}>{linkName}</Link>
      </div>
    </div>
  );
};

export default AuthFormCard;
