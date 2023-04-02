import { useForm } from 'react-hook-form';
import { User } from 'models/user';
import { useAuth } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';

import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import AuthFormCard from 'components/AuthFormCard/AuthFormCard';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const SignupPage: React.FC = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const handleSubmitForm = async (data: User) => {
    const { name, email, password } = data;
    try {
      await signUp(name, email, password);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthLayout>
      <AuthFormCard title={'Sign up'} path={'/login'} linkName={'Sign in'}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            id={'name'}
            placeholder={'name'}
            label={'User name'}
            type='text'
            {...register('name', { required: true })}
            style={{ marginBottom: '1.5rem' }}
          />
          <Input
            id={'email'}
            placeholder={'email'}
            label={'Email'}
            type='email'
            {...register('email', { required: true })}
            style={{ marginBottom: '1.5rem' }}
          />
          <Input
            id={'password'}
            placeholder={'password'}
            label={'Password'}
            type='password'
            {...register('password', { required: true })}
          />
          <Button title={'Sign up'} type='submit' />
        </form>
      </AuthFormCard>
    </AuthLayout>
  );
};

export default SignupPage;
