import React, { forwardRef } from 'react';
import styles from './styles.module.scss';

export type InputProps = {
  id: string;
  name?: string;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: {} | undefined | ((e: React.ChangeEvent<HTMLInputElement>) => void);
  value?: number | string;
  style?: {}
};

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      type,
      placeholder,
      value,
      error,
      onChange,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div className={styles.inputContainer}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          ref={ref}
          name={name}
          type={type}
          value={value}
          className={error && styles.error}
          placeholder={placeholder}
          onChange={onChange}
          style={style}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
