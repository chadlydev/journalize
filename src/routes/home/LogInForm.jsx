import { useNavigate } from 'react-router-dom';
import { useAuth } from 'context';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Checkbox, Form, Input } from 'components/form';
import { Flex } from 'components/flex';
import { Link } from './Link';
import Button from 'components/button';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';

export const LogInForm = ({ setDialogState }) => {
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useAuth();

  function handleError(errorCode) {
    switch (errorCode) {
      case 'auth/user-not-found':
        return {
          ['email']: 'User not found',
        };
      case 'auth/wrong-password':
        return {
          ['password']: 'Wrong password',
        };
      default:
        return '';
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberPassword: false,
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email(`Please enter a valid email address`)
          .required(`Can't be empty`),
        password: Yup.string().required(`Can't be empty`),
        rememberPassword: Yup.boolean(),
      })}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        try {
          await logIn(values.email, values.password);
          navigate('/dashboard');
        } catch (e) {
          setErrors(handleError(e.code));
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, isValid, dirty, setFieldValue, values }) => (
        <Form>
          <Flex direction="column" css={{ gap: '$4' }}>
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
            />
            <Flex spaced align="center">
              <Checkbox
                label="Remember me"
                id="rememberPassword"
                checked={values.rememberPassword}
                name="rememberPassword"
                onClick={() =>
                  setFieldValue('rememberPassword', !values.rememberPassword)
                }
              />
              <Link
                onClick={() => setDialogState('forgotPassword')}
                type="button"
              >
                Forgot password
              </Link>
            </Flex>
          </Flex>
          <Flex direction="column" css={{ gap: '$4' }}>
            <Button
              size="lg"
              fluid
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}
              loading={isSubmitting}
            >
              Sign in
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
              Sign in with Google
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
