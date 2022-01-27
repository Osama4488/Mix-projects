import { firebaseauth } from "../../firebase-config.js";
import * as firebase from "../../firebase-config.js";
const fAuth = firebaseauth.getAuth();
export const AuthService = {
  loginWithGoogle: async () => {
    const provider = new firebaseauth.GoogleAuthProvider();
    try {
      const userCred = await firebaseauth.signInWithPopup(fAuth, provider);

      return {
        user: userCred.user,
      };
    } catch (e) {
      return {
        error: e.message,
      };
    }
  },
  logout: async () => {
    await firebaseauth?.signOut(fAuth);
  },
  createUserWithEmailAndPassword: async (email, password) => {
    // console.log(password, "email auth");
    try {
      const userCred = await firebaseauth.createUserWithEmailAndPassword(
        fAuth,
        email,
        password
      );

      // await userCred.user.sendEmailVerification({
      //   url: "http://localhost:3000",
      // });
      // console.log(userCred.user, "user Credi");
      return {
        user: userCred.user,
      };
    } catch (e) {
      return {
        error: e.message,
      };
    }
  },

  signInUserWithEmailAndPassword: async (email, password) => {
    try {
      const userCred = await firebaseauth.signInWithEmailAndPassword(
        fAuth,
        email,
        password
      );

      return {
        user: userCred.user,
      };
    } catch (e) {
      return {
        error: e.message,
      };
    }
  },

  resetPassword: async (email, password) => {
    try {
      const userCred = await firebaseauth.sendPasswordResetEmail(fAuth, email, {
        url: "http://localhost:3000/login",
      });
    } catch (e) {
      return {
        error: e.message,
      };
    }
  },

  deleteAccount: async () => {
    try {
      await firebaseauth.currentUser.delete();
    } catch (e) {
      return {
        error: e.message,
      };
    }
  },
  updatePassword: async (newPassword) => {
    try {
      await firebaseauth.currentUser.updatePassword(newPassword);
      return "Update Done";
    } catch (e) {
      return {
        error: e.message,
      };
    }
  },
};
