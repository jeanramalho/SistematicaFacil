import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export async function signUp(email: string, password: string, name: string) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  // Salvar displayName ou dados extras no Realtime DB
  return userCred.user;
}

export async function signIn(email: string, password: string) {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  return userCred.user;
}
