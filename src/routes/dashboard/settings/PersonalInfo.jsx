import { useAuth } from 'context';
import { useState } from 'react';
import Card from 'components/card';
import { Flex } from 'components/flex';
import { Text } from 'components/typography';
import { Formik } from 'formik';
import { Form, Input } from 'components/form';
import { getFileExtension } from 'helpers';
import Button from 'components/button';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import { ReactComponent as AlertIcon } from 'assets/icons/alert-circle.svg';
import * as Yup from 'yup';
import UploadImageDropzone from './UploadImageDropzone';
import { app, auth, db } from 'firebaseConfig';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';

const PersonalInfo = () => {
  const { user, changeInfo } = useAuth();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [image, setImage] = useState(null);

  function handleError(errorCode) {
    if (errorCode === 'auth/requires-recent-login') {
      setError('Please sign in again to make such changes to your account');
    }
  }

  function handleUploadImage() {
    const user = auth.currentUser;
    const storage = getStorage(app);
    const file = image.file;

    const fileName =
      'profile-picture' + '.' + getFileExtension(image.file.name);
    const storageRef = ref(storage, `${user.uid}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (e) => {
        console.error(e);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const userDocRef = doc(db, 'users', user.uid);
          try {
            await updateDoc(userDocRef, {
              photoURL: downloadURL,
            });
            setImage(null);
          } catch (e) {
            console.error(e);
            throw e;
          }
        });
      }
    );
  }

  return (
    <Card
      direction="column"
      css={{
        gap: 24,

        '@desktop': {
          maxW: 640,
        },
      }}
    >
      <Flex direction="column">
        <Text size="lg" weight="semibold" as="h2">
          Personal info
        </Text>
        <Text size="sm" color="gray">
          Update your personal details
        </Text>
      </Flex>
      <Formik
        initialValues={{
          displayName: user.displayName,
          email: user.email,
        }}
        validationSchema={Yup.object({
          displayName: Yup.string().required(`Can't be empty`),
          email: Yup.string().email().required(`Can't be empty`),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await changeInfo(values);
            await setSuccess(true);
            resetForm({
              values: {
                displayName: values.displayName,
                email: values.email,
              },
            });
            if (image) {
              await handleUploadImage();
            }
          } catch (e) {
            handleError(error.code);
            await setSuccess(false);
            resetForm();
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <Input label="name" id="displayName" name="displayName" />
            <Input label="Email" id="email" name="email" />
            <UploadImageDropzone image={image} setImage={setImage} />
            <Flex
              direction={{
                '@initial': 'column',
                '@tablet': error || success ? 'row' : 'column',
              }}
              spaced={error || success}
              css={{
                borderTop: '1px solid $gray6',
                pt: 16,
                mx: '-16px',
                px: 16,
                gap: 16,

                '@desktop': {
                  px: 24,
                  mx: '-24px',
                  mb: '-8px',
                },
              }}
            >
              {success && (
                <Flex
                  align="center"
                  css={{
                    color: '$success11',
                    gap: 4,
                    flex: 1,
                    '& svg': { size: 16, flexShrink: 0 },
                  }}
                >
                  <CheckIcon />

                  <Text size="sm" weight="regular" color="success">
                    Your personal information has been updated.
                  </Text>
                </Flex>
              )}
              {error && (
                <Flex
                  align="center"
                  css={{
                    color: '$error11',
                    gap: 4,
                    flex: 1,
                    '& svg': { size: 16, flexShrink: 0 },
                  }}
                >
                  <AlertIcon />

                  <Text size="sm" weight="regular" color="error">
                    {error}
                  </Text>
                </Flex>
              )}
              <Button
                css={{
                  '@tablet': {
                    alignSelf: 'flex-end',
                  },
                }}
                size={{ '@initial': 'xl', '@tablet': 'md' }}
                variant="primary"
                fluid={{ '@initial': true, '@tablet': false }}
                disabled={
                  (!image && !isValid) ||
                  (!image && !dirty) ||
                  (!image && isSubmitting)
                }
                loading={isSubmitting}
                type="submit"
              >
                Save changes
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default PersonalInfo;
