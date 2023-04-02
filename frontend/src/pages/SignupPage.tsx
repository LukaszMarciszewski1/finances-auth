import { useForm } from 'react-hook-form';
import { User } from 'models/user';
import { useAuth } from 'context/AuthContext';

import AuthLayout from 'components/layouts/AuthLayout/AuthLayout';
import FormAuthLayout from 'components/layouts/FormAuthLayout/FormAuthLayout';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const SignupPage = () => {
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const handleSubmitForm = async (data: User) => {
    const {name, email, password} = data
    try {
      await signUp(name, email, password);
    } catch (err) {
      alert('Oops, something went wrong! Try again later');
      console.log(err);
    }
  };
  
  return (
    <AuthLayout>
      <FormAuthLayout>
        <h2 style={{ fontSize: 40 }}>Sign In</h2>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
            id={'name'}
            placeholder={'name'}
            label={'User name'}
            type='text'
            {...register('name', { required: true })}
          />
          <Input
            id={'email'}
            placeholder={'email'}
            label={'Email'}
            type='email'
            {...register('email', { required: true })}
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
      </FormAuthLayout>
    </AuthLayout>
  );
};

export default SignupPage;
