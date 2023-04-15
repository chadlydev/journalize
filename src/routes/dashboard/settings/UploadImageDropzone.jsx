import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import FeaturedIcon from 'components/featuredIcon';
import { Flex } from 'components/flex';
import { Text } from 'components/typography';
import { styled } from 'stitches.config';
import { ReactComponent as UploadIcon } from 'assets/icons/upload-cloud-02.svg';
import { useAuth } from 'context';
import { getInitials } from 'helpers';
import Avatar from 'components/avatar';

const Wrapper = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
  p: 24,
  br: '$xl',
  w: '$full',
  cursor: 'pointer',

  '&:focus': {
    boxShadow: '$xsPrimary',
    outline: 'none',
  },
});

const UploadImageDropzone = ({ image, setImage }) => {
  const { user } = useAuth();

  const onDrop = useCallback(
    (acceptedFile) => {
      acceptedFile.map((file) => {
        setImage({
          file,
          preview: URL.createObjectURL(file),
        });
      });
    },
    [setImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.gif', '.jpeg', '.jpg'] },
    maxFiles: 1,
    maxSize: 10000000,
  });

  return (
    <Flex
      css={{
        gap: 24,
      }}
      align="center"
      direction={{ '@initial': 'column', '@tablet': 'row' }}
    >
      <Avatar
        size="md"
        src={image?.preview || user.photoURL}
        alt={user.displayName}
        fallback={user.displayName ? getInitials(user.displayName) : ''}
      />
      <Wrapper
        {...getRootProps()}
        css={{
          border: isDragActive ? '1px dashed $primary8' : '1px dashed $gray6',
        }}
      >
        <input {...getInputProps()} />
        <FeaturedIcon color="gray" size="sm" icon={<UploadIcon />} />
        <Flex css={{ gap: 4 }}>
          <Text weight="semibold" color="primary" size="sm">
            Click to upload
          </Text>
          <Text size="sm">or drag and drop</Text>
        </Flex>
        <Text size="xs">PNG, JPG, JPEG or GIF (max. 10MB)</Text>
      </Wrapper>
    </Flex>
  );
};

export default UploadImageDropzone;
