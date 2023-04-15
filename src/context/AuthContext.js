import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from 'firebaseConfig';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updatePassword,
  updateEmail,
  getAdditionalUserInfo,
} from 'firebase/auth';

import {
  doc,
  serverTimestamp,
  setDoc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';

const authContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  // Log In
  async function logIn(email, password) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      throw e;
    }
  }

  // Sign Up
  async function signUp(values) {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // Create new doc in firestore when new user registers
      return await setDoc(doc(db, 'users', result.user.uid), {
        displayName: values.name,
        email: result.user.email,
        createdAt: serverTimestamp(),
        photoURL: '',
        uid: result.user.uid,
      });
    } catch (e) {
      throw e;
    }
  }

  // Sign Out with firebase
  async function logOut() {
    try {
      return await signOut(auth);
    } catch (e) {
      throw e;
    }
  }

  // Google sign in / up
  async function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const { isNewUser } = getAdditionalUserInfo(result);

      // Create new doc in firestore when new user registers
      if (isNewUser) {
        return await setDoc(doc(db, 'users', result.user.uid), {
          displayName: result.user.displayName,
          email: result.user.email,
          createdAt: serverTimestamp(),
          photoURL: result.user.photoURL || '',
          uid: result.user.uid,
        });
      }
    } catch (e) {
      throw e;
    }
  }

  // Reset password
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  // Update password
  function changePassword(newPassword) {
    const user = auth.currentUser;
    return updatePassword(user, newPassword);
  }

  // Update Info
  async function changeInfo(values) {
    const user = auth.currentUser;
    await updateEmail(user, values.email);

    return await updateDoc(doc(db, 'users', user.uid), {
      displayName: values.displayName,
      email: values.email,
    });
  }

  // Listener to check if user is authenticated, and if there is a user authenticated set the user Doc in context
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsubscribeUser = onSnapshot(
          doc(db, 'users', user.uid),
          (doc) => {
            setUser(doc.data());
          }
        );
        setInitialized(true);
        setAuthenticated(true);

        return () => {
          unsubscribeUser();
        };
      } else {
        setInitialized(true);
        setAuthenticated(false);
      }
    });

    return () => {
      unsubscribeAuth();
    };
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
        initialized,
        authenticated,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        resetPassword,
        changePassword,
        changeInfo,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
