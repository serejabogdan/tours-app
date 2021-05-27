import {auth} from '../../firebase.config';

export function signup(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function hasAuthStateChanged(setState) {
  return auth.onAuthStateChanged((user) => setState(user));
}

export function signOut() {
  return auth.signOut();
}
