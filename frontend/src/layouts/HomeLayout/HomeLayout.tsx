import React from 'react';
import styles from './styles.module.scss';
import Logo from 'components/Logo/Logo';

interface HomeLayoutProps {
  children: React.ReactNode;
  image: string;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children, image }) => {
  return (
    <div className={styles.homeLayout}>
      <header>
        <Logo />
      </header>
      <main>{children}</main>
      <div className={styles.imgContainer}>
        <img src={image} alt='img'/>
      </div>
    </div>
  );
};

export default HomeLayout;
