import firebase from '../../firebase/config';
import { authSlice } from './authReducer';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

export const authSignUpUser = ({email, password, login}) => async (dispatch, getState) => {
  try {
    const auth = getAuth();

    await createUserWithEmailAndPassword(auth, email, password);
    const user = await getAuth().currentUser;

    const currentUser = await updateProfile(user, {displayName: login})

    const { uid, displayName } = await getAuth().currentUser;
    
    const updatedProfile = {
      userId: uid,
      login: displayName
    }

    dispatch(updateUserProfile(updatedProfile));
  } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message)
    }
};

export const authSignInUser = ({email, password}) => async (dispatch, getState) => {
  try {
    const auth = getAuth();

    await signInWithEmailAndPassword(auth, email, password);
    const user = await getAuth().currentUser;
     
  } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message)
    }
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  const auth = getAuth();

  await onAuthStateChanged(auth, (user) => {
    if (user) {
      const updatedProfile = {
        userId: user.uid,
        login: user.displayName
      }
      dispatch(updateUserProfile(updatedProfile));
      dispatch(authStateChange({ stateChange: true }))
    }
  })
}

export const authSignOutUser = () => async (dispatch, getState) => {
  try {
      const auth = getAuth();
    await signOut(auth);
    dispatch(authSignOut())
    console.log("success")
    } catch (error) {
        console.log('error', error);
        console.log('error.message', error.message)
    }
};