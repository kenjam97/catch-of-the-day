import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: '',
  authDomain: 'catch-of-the-day-james-kennedy.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-james-kennedy.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
