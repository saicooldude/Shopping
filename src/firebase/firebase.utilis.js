import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPLJb0pQ-iK5IfN-uNxN1aASXlm0AMEqY",
  authDomain: "crwn-db-650e1.firebaseapp.com",
  projectId: "crwn-db-650e1",
  storageBucket: "crwn-db-650e1.appspot.com",
  messagingSenderId: "324236910394",
  appId: "1:324236910394:web:6473df9dd2b24bf00cfa03",
  measurementId: "G-ZVC4XXF1XC"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// const firebaseAuth = getAuth();
export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) {
    return;
  }
  const userRef = firebase.firestore().doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();


  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error occured while creating user message');
    }

  }
  return userRef;
};

// eslint-disable-next-line
// const configureCaptcha = () => {
//   window.recaptchaVerifier = new RecaptchaVerifier(
//     "sign-in-button",
//     {
//       size: "invisible",
//       callback: (response) => {
//         sendOTPFirebaseFromUtil();
//       },
//     },
//     firebaseAuth
//   );
// };

// // eslint-disable-next-line
// export const sendOTPFirebaseFromUtil = (mobileNumber) => {
//   configureCaptcha();
//   const appVerifier = window.recaptchaVerifier;
//   signInWithPhoneNumber(auth, mobileNumber, appVerifier)
//     .then((confirmationResult) => {
//       window.confirmationResult = confirmationResult;
//     })
//     .catch((error) => {
//       console.log(`${error}`);
//     });
// };

// export const sendOTPFirebaseFromUtilLogin = (
//   mobileNumber,
//   redirect,
//   history
// ) => {
//   configureCaptcha();
//   const appVerifier = window.recaptchaVerifier;
//   signInWithPhoneNumber(auth, mobileNumber, appVerifier)
//     .then((confirmationResult) => {
//       window.confirmationResult = confirmationResult;
//       history.push(redirect);
//     })
//     .catch((error) => {
//       console.log(`${error}`);
//     });
// };

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithMobileNumber = () => auth.signInWithPopup();

export const signInWithGoogle = async () => {
  const result = await auth.signInWithPopup(googleProvider);
  return result;
};

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);
export default firebase;