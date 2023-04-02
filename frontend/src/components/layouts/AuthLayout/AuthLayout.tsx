import React from 'react';
import styles from './styles.module.scss';
import pigImg from 'assets/img/pig.svg';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.left}>
        <div className={styles.formContainer}>{children}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.imgContainer}>
          <img src={pigImg} />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
