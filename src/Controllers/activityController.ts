import { database } from '../firebaseConfig';
import { ref, set, push, onValue, update, remove } from 'firebase/database';

export function watchActivities(userId: string, callback: (data: any) => void) {
  const activitiesRef = ref(database, `activities/${userId}`);
  return onValue(activitiesRef, snapshot => {
    callback(snapshot.val());
  });
}

export async function addActivity(userId: string, activity: any) {
  const activitiesRef = ref(database, `activities/${userId}`);
  const newRef = push(activitiesRef);
  await set(newRef, activity);
}