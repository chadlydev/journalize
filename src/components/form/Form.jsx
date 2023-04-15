import { styled } from 'stitches.config';
import { Form as FormikForm } from 'formik';

//=====================
// STYLED COMPONENTS

export const Form = styled(FormikForm, {
  d: 'flex',
  flexDirection: 'column',
  gap: '$6',
  w: '$full',
});
