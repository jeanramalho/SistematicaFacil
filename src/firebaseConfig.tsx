import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD0Bt4eKFL1cCn-96BKgubdSNkP9SAJGWE',
  authDomain: 'sistematicafacil.firebaseapp.com',
  databaseURL: 'https://sistematicafacil-default-rtdb.firebaseio.com',
  projectId: 'sistematicafacil',
  storageBucket: 'sistematicafacil.appspot.com',
  messagingSenderId: '<MESSAGING_SENDER_ID>',
  appId: '<APP_ID>'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);