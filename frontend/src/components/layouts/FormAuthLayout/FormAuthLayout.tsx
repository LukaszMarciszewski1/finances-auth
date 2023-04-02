import styles from './styles.module.scss';

interface FormAuthLayoutProps {
  children: React.ReactNode;
}


const FormAuthLayout: React.FC<FormAuthLayoutProps> = ({ children }) => {
  return <div className={styles.formAuthLayout}><h1>Logo here</h1>{children}</div>;
};

export default FormAuthLayout;
