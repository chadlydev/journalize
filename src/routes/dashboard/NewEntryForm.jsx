import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useState } from 'react';
import { useJournal } from 'context';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Label, TextArea } from 'components/form';
import { Flex } from 'components/flex';
import { MoodButton } from './MoodButton';
import Button from 'components/button';

export const NewEntryForm = ({ toggleOpen }) => {
  const navigate = useNavigate();
  const maxDate = format(new Date(), 'yyyy-MM-dd');
  const [mood, setMood] = useState(0);
  const { addNewEntry } = useJournal();

  return (
    <Formik
      initialValues={{
        date: '',
        description: '',
        mood: mood,
      }}
      validationSchema={Yup.object({
        date: Yup.date().required(`Please pick a date`),
        description: Yup.string().required(`Can't be empty`),
        mood: Yup.number().required().positive(),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await addNewEntry(values);
          toggleOpen();
          navigate('/dashboard/journal');
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
                active={mood === 1}
                onClick={() => {
                  setFieldValue('mood', 1);
                  setMood(1);
                }}
              />
              <MoodButton
                smiley={2}
                active={mood === 2}
                onClick={() => {
                  setFieldValue('mood', 2);
                  setMood(2);
                }}
              />
              <MoodButton
                smiley={3}
                active={mood === 3}
                onClick={() => {
                  setFieldValue('mood', 3);
                  setMood(3);
                }}
              />
              <MoodButton
                smiley={4}
                active={mood === 4}
                onClick={() => {
                  setFieldValue('mood', 4);
                  setMood(4);
                }}
              />
              <MoodButton
                smiley={5}
                active={mood === 5}
                onClick={() => {
                  setFieldValue('mood', 5);
                  setMood(5);
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
