import { useNavigate } from 'react-router-dom';
import { useAuth } from 'context';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input } from 'components/form';
import { Flex } from 'components/flex';
import Button from 'components/button';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';

export const SignUpForm = () => {
  const navigate = useNavigate();
  const { signUp, googleSignIn } = useAuth();

  function handleError(errorCode) {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return {
          ['email']: 'Email is already in use',
        };
      case 'auth/invalid-email':
        return {
          ['email']: 'Invalid email',
        };
      default:
        return '';
    }
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required(`Can't be empty`),
        email: Yup.string()
          .email(`Please enter a valid email address`)
          .required(`Can't be empty`),
        password: Yup.string()
          .required(`Can't be empty`)
          .min(8, 'Must be at least 8 characters'),
      })}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        try {
          await signUp(values);
          navigate('/dashboard');
        } catch (e) {
          setErrors(handleError(e.code));
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <Flex direction="column" css={{ gap: '$4' }}>
            <Input
              label="name"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
            <Input
              label="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <Input
              label="password"
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              hint="Must be at least 8 characters"
            />
          </Flex>
          <Flex direction="column" css={{ gap: '$4' }}>
            <Button
              size="lg"
              fluid
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}
              loading={isSubmitting}
            >
              Get started
            </Button>
            <Button
              variant="secondaryGray"
              size="lg"
              fluid
              iconLeading={<GoogleIcon style={{ height: 24, width: 24 }} />}
              type="button"
              onClick={async () => {
                try {
                  await googleSignIn();
                  navigate('/dashboard');
                } catch (e) {
                  console.error(e.message);
                }
              }}
            >
              Sign up with Google
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
