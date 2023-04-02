import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  title: string;
  onClick?: (e: any) => void;
  type: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ title, type = 'button', onClick }) => {
  return (
    <button title={title} onClick={onClick} className={styles.button} type={type}>
      {title}
    </button>
  );
};

export default Button;