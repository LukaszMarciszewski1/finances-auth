import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { User } from 'models/user';
import { useAuth } from 'context/AuthContext';

import AuthLayout from 'components/layouts/AuthLayout/AuthLayout';
import AuthFormCard from 'components/AuthFormCard/AuthFormCard';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const SigninPage = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const handleSubmitForm = async (data: any) => {
    const { email, password } = data;
    try {
      await signIn(email, password);
      navigate('/');
    } catch (err) {
      alert('Invalid email or password');
      console.log(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, []);

  return (
    <AuthLayout>
      <AuthFormCard title={'Sign in'} path={'/register'} linkName={'Sign up'}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            id={'email'}
            placeholder={'email'}
            label={'Email'}
            type='email'
            {...register('email', { required: true })}
            error={errors.email && <span>Required</span>}
            style={{ marginBottom: '1.5rem' }}
          />
          <Input
            id={'password'}
            placeholder={'password'}
            label={'Password'}
            type='password'
            {...register('password', { required: true })}
          />
          <Button title={'Sign In'} type='submit' />
        </form>
      </AuthFormCard>
    </AuthLayout>
  );
};

export default SigninPage;
