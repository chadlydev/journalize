import { createContext, useContext, useEffect, useState } from 'react';
import { db } from 'firebaseConfig';
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  Timestamp,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { useAuth } from './AuthContext';
import cuid from 'cuid';
import { format } from 'date-fns';

const journalContext = createContext(null);

export function JournalContextProvider({ children }) {
  const { user } = useAuth();
  const [journal, setJournal] = useState(null);
  const [sort, setSort] = useState('descending');

  // Add new Entry in journal
  async function addNewEntry(values) {
    try {
      const uid = cuid();
      const today = format(new Date(), 'dd-MM-yyyy');
      const isToday = format(new Date(values.date), 'dd-MM-yyyy') === today;

      return await setDoc(doc(db, 'users', user.uid, 'journal', uid), {
        date: isToday
          ? Timestamp.fromMillis(Number(format(new Date(), 'T')))
          : Timestamp.fromDate(new Date(values.date)),
        description: values.description,
        mood: values.mood,
        uid: uid,
      });
    } catch (e) {
      throw e;
    }
  }

  // Edit Entry
  async function editEntry(values, uid) {
    try {
      const today = format(new Date(), 'dd-MM-yyyy');
      const isToday = format(new Date(values.date), 'dd-MM-yyyy') === today;

      return await updateDoc(doc(db, 'users', user.uid, 'journal', uid), {
        date: isToday
          ? Timestamp.fromMillis(Number(format(new Date(), 'T')))
          : Timestamp.fromDate(new Date(values.date)),
        description: values.description,
        mood: values.mood,
      });
    } catch (e) {
      throw e;
    }
  }

  // Delete Entry
  async function deleteEntry(uid) {
    try {
      return await deleteDoc(doc(db, 'users', user.uid, 'journal', uid));
    } catch (e) {
      throw e;
    }
  }

  // Listener to Journal collection within user Doc >> puts in Journal context
  useEffect(() => {
    if (user) {
      const journalRef = collection(db, 'users', user.uid, 'journal');
      const journalUnsubscribe = onSnapshot(journalRef, (querySnapshot) => {
        let journal = [];
        querySnapshot.forEach((doc) => {
          journal.push(doc.data());
        });
        if (sort === 'descending') {
          setJournal(journal.sort((a, b) => b.date.seconds - a.date.seconds));
        } else if (sort === 'ascending') {
          setJournal(journal.sort((a, b) => a.date.seconds - b.date.seconds));
        }
      });

      return () => {
        journalUnsubscribe();
      };
    }
  }, [user, sort]);

  return (
    <journalContext.Provider
      value={{
        journal,
        setJournal,
        addNewEntry,
        deleteEntry,
        editEntry,
        sort,
        setSort,
      }}
    >
      {children}
    </journalContext.Provider>
  );
}

export function useJournal() {
  return useContext(journalContext);
}
