import { useAuth } from 'context';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { delay } from 'helpers';
import { Form, Input } from 'components/form';
import { Flex } from 'components/flex';
import Button from 'components/button';
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow-narrow-left.svg';

export const ForgotPasswordForm = ({ setDialogState }) => {
  const { resetPassword } = useAuth();
  const [success, setSuccess] = useState(false);

  function handleError(errorCode) {
    switch (errorCode) {
      case 'auth/user-not-found':
        return {
          ['email']: 'User not found',
        };
      default:
        return '';
    }
  }

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email(`Please enter a valid email address`)
          .required(`Can't be empty`),
      })}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        try {
          await resetPassword(values.email);
          await setSuccess(true);
          await delay(2000);
          setDialogState('login');
        } catch (e) {
          setErrors(handleError(e.code));
          setSuccess(false);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <Flex direction="column" css={{ gap: '$4' }}>
            <Input
              label="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              success={success && 'Check your mail for instructions'}
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
              Reset password
            </Button>
            <Button
              variant="tertiaryGray"
              size="lg"
              fluid
              iconLeading={<ArrowLeftIcon />}
              onClick={() => setDialogState('login')}
              type="button"
            >
              Back to log in
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
