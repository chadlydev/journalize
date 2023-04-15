import { Flex } from 'components/flex';
import { Heading, Text } from 'components/typography';
import { ReactComponent as Smiley1 } from 'assets/icons/face-sad.svg';
import { ReactComponent as Smiley2 } from 'assets/icons/face-frown.svg';
import { ReactComponent as Smiley3 } from 'assets/icons/face-neutral.svg';
import { ReactComponent as Smiley4 } from 'assets/icons/face-smile.svg';
import { ReactComponent as Smiley5 } from 'assets/icons/face-happy.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit-05.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/trash-01.svg';
import * as Dialog from '@radix-ui/react-dialog';
import {
  DialogCancelButton,
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
} from 'components/dialog';
import { styled } from 'stitches.config';
import Button from 'components/button';
import { delay } from 'helpers';
import { useState } from 'react';
import FeaturedIcon from 'components/featuredIcon';
import { useJournal } from 'context';
import { format } from 'date-fns';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Label, TextArea } from 'components/form';
import { MoodButton } from '../MoodButton';

// Return correct mood smiley
function moodIcon(mood) {
  switch (mood) {
    case 1:
      return <Smiley1 />;
    case 2:
      return <Smiley2 />;
    case 3:
      return <Smiley3 />;
    case 4:
      return <Smiley4 />;
    case 5:
      return <Smiley5 />;
  }
}

//=====================
// STYLED COMPONENTS

const TriggerStyled = styled(Dialog.Trigger, {
  all: 'unset',
  d: 'flex',
  flexDirection: 'column',
  p: 16,
  gap: 12,
  transition: 'all ease 0.5s',
  justifyContent: 'flex-start',
  outline: 'none',
  cursor: 'pointer',
  bgColor: '$gray1',
  boxShadow: '$sm',
  br: '$xl',
  border: '1px solid $gray6',

  '& svg': { size: 20 },

  '&:focus': {
    boxShadow: '$xsPrimary',
  },

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '$lg',
  },
});

//=====================
// REACT COMPONENTS

const Trigger = ({ date, description, mood }) => {
  return (
    <TriggerStyled>
      <Flex
        spaced
        css={{
          flex: 0,
          borderBottom: '1px solid $gray6',
          mx: '-16px',
          px: 16,
          pb: 8,
        }}
      >
        <Text size="lg" weight="semibold">
          {date}
        </Text>
        {moodIcon(mood)}
      </Flex>
      <Text size="xs" color="gray">
        {description?.length >= 150
          ? description.substring(0, 150) + '...'
          : description}
      </Text>
    </TriggerStyled>
  );
};

const Details = ({ date, description, mood, setDialog }) => {
  return (
    <DialogContent css={{ gap: 24, alignItems: 'flex-start' }}>
      <DialogCloseButton />
      <Dialog.Title asChild>
        <Heading
          size={{ '@initial': 'xs', '@tablet': 'sm' }}
          weight="semibold"
          color="gray12"
        >
          {date}
        </Heading>
      </Dialog.Title>
      <Flex
        direction="column"
        css={{
          gap: 4,
          maxW: '$full',
        }}
      >
        <Flex
          css={{
            gap: 4,
          }}
        >
          <Text size={{ '@initial': 'md', '@tablet': 'lg' }} weight="semibold">
            Mood:
          </Text>
          {moodIcon(mood)}
        </Flex>
        <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray">
          {description}
        </Text>
      </Flex>
      <Flex css={{ gap: 12, w: '100%' }}>
        <Button
          iconLeading={<DeleteIcon />}
          variant="secondaryError"
          size="lg"
          fluid
          type="button"
          onClick={() => setDialog('delete')}
        >
          Delete
        </Button>
        <Button
          variant="secondaryColor"
          size="lg"
          fluid
          iconLeading={<EditIcon />}
          type="button"
          onClick={() => setDialog('edit')}
        >
          Edit
        </Button>
      </Flex>
    </DialogContent>
  );
};

const DeleteEntry = ({ uid, setOpen }) => {
  const { deleteEntry } = useJournal();
  const [loading, setLoading] = useState(false);

  return (
    <DialogContent aria-describedby={undefined}>
      <DialogCloseButton />
      <Flex css={{ gap: '$4', w: '$full' }} direction="column" align="center">
        <FeaturedIcon icon={<DeleteIcon />} color="error" />
        <Flex
          direction="column"
          align="center"
          css={{
            gap: '$1',
            maxW: '$fit',
            textAlign: 'center',
          }}
        >
          <Dialog.Title asChild>
            <Heading
              size={{ '@initial': 'xs', '@tablet': 'sm' }}
              weight="semibold"
              color="gray12"
            >
              Delete entry
            </Heading>
          </Dialog.Title>
          <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray">
            Are you sure you want to delete this entry? This can't be undone.
          </Text>
        </Flex>
      </Flex>
      <Flex css={{ gap: 12, w: '100%' }}>
        <DialogCancelButton />
        <Button
          variant="error"
          size="lg"
          fluid
          iconLeading={<DeleteIcon />}
          loading={loading}
          onClick={async () => {
            setLoading(true);
            try {
              await delay(500);
              await deleteEntry(uid);
              return setOpen(false);
            } catch (e) {
              console.error(e);
            } finally {
              setLoading(false);
            }
          }}
        >
          Confirm
        </Button>
      </Flex>
    </DialogContent>
  );
};

const EditEntryForm = ({ setOpen, uid, mood, date, description }) => {
  const maxDate = format(new Date(), 'yyyy-MM-dd');
  const [moodState, setMoodState] = useState(mood);
  const { editEntry } = useJournal();

  return (
    <Formik
      initialValues={{
        date: format(new Date(date), 'yyyy-MM-dd'),
        description: description,
        mood: mood,
      }}
      validationSchema={Yup.object({
        date: Yup.date().required(`Please pick a date`),
        description: Yup.string().required(`Can't be empty`),
        mood: Yup.number().required().positive(),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await editEntry(values, uid);
          return setOpen(false);
        } catch (e) {
          console.error(e);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, isValid, dirty, setFieldValue }) => (
        <Form>
          <Flex direction="column" css={{ gap: '$4' }}>
            <Input
              label="date"
              id="date"
              name="date"
              type="date"
              min="2019-01-01"
              max={maxDate}
            />
            <TextArea
              label="description"
              id="description"
              name="description"
              placeholder="How was your day?"
            />
          </Flex>

          <Flex direction="column" css={{ gap: 6 }}>
            <Label css={{ textTransform: 'none' }}>
              How are you feeling today?
            </Label>
            <Flex spaced css={{ gap: 4, w: '$full' }}>
              <MoodButton
                smiley={1}
                active={moodState === 1}
                onClick={() => {
                  setFieldValue('mood', 1);
                  setMoodState(1);
                }}
              />
              <MoodButton
                smiley={2}
                active={moodState === 2}
                onClick={() => {
                  setFieldValue('mood', 2);
                  setMoodState(2);
                }}
              />
              <MoodButton
                smiley={3}
                active={moodState === 3}
                onClick={() => {
                  setFieldValue('mood', 3);
                  setMoodState(3);
                }}
              />
              <MoodButton
                smiley={4}
                active={moodState === 4}
                onClick={() => {
                  setFieldValue('mood', 4);
                  setMoodState(4);
                }}
              />
              <MoodButton
                smiley={5}
                active={moodState === 5}
                onClick={() => {
                  setFieldValue('mood', 5);
                  setMoodState(5);
                }}
              />
            </Flex>
          </Flex>
          <Button
            size="lg"
            fluid
            type="submit"
            disabled={!isValid || !dirty || isSubmitting}
            loading={isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const EditEntry = ({ uid, setOpen, mood, date, description }) => {
  return (
    <DialogContent aria-describedby={undefined}>
      <DialogCloseButton />
      <Flex css={{ gap: '$4', w: '100%' }} direction="column" align="center">
        <FeaturedIcon icon={<EditIcon />} />
        <Flex
          direction="column"
          align="center"
          css={{
            gap: '$1',
            maxW: '$fit',
            textAlign: 'center',
          }}
        >
          <Dialog.Title asChild>
            <Heading
              size={{ '@initial': 'xs', '@tablet': 'sm' }}
              weight="semibold"
              color="gray12"
            >
              Edit entry
            </Heading>
          </Dialog.Title>
          <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray">
            Please change details below to edit your entry
          </Text>
        </Flex>
        <EditEntryForm
          uid={uid}
          setOpen={setOpen}
          date={date}
          description={description}
          mood={mood}
        />
      </Flex>
    </DialogContent>
  );
};

export const Entry = ({ date, description, mood, uid }) => {
  const [dialog, setDialog] = useState('details');
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={() => {
        setOpen(!open);
        setDialog('details');
      }}
    >
      <Trigger date={date} description={description} mood={mood} />
      <Dialog.Portal>
        <DialogOverlay />
        {dialog === 'details' && (
          <Details
            date={date}
            description={description}
            mood={mood}
            setDialog={setDialog}
          />
        )}
        {dialog === 'delete' && <DeleteEntry uid={uid} setOpen={setOpen} />}
        {dialog === 'edit' && (
          <EditEntry
            uid={uid}
            setOpen={setOpen}
            date={date}
            description={description}
            mood={mood}
          />
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
};
