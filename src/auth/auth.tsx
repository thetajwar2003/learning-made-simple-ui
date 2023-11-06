// src/auth/auth.ts
import { Amplify, Auth } from 'aws-amplify';

// Configure Amplify with the Cognito details
Amplify.configure({
  Auth: {
    region: process.env.NEXT_PUBLIC_REGION,
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_APP_CLIENT_ID,
  },
});

// Define the type for the signup and sign-in input
export type AuthInputs = {
  email: string;
  password: string;
  userType: string;
};

export interface AuthFormProps {
  onSignUpSuccess?: () => void;
  onSignInSuccess?: () => void;
  onSwitchMode?: () => void;
}

// The signUp function that will be used in the Login component
export const signUp = async (data: AuthInputs) => {
  const { email, password, userType } = data;

  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
      autoSignIn: {
        enabled: true,
      },
    });
    console.log('Signed up a user:', user);

    // TODO 1: create new dynamo db user with cognito user id

    return user;
  } catch (error) {
    throw error;
  }
};

// The signIn function to authenticate users
export const signIn = async (data: AuthInputs) => {
  const { email, password } = data;

  try {
    const user = await Auth.signIn(email, password);
    console.log('Signed in user:', user);
    return user;
  } catch (error) {
    throw error;
  }
};

// The logOut function to sign out users
export const logOut = async () => {
  try {
    await Auth.signOut();
    console.log('User signed out.');
  } catch (error) {
    throw error;
  }
};

// The deleteUser function to delete a user's account
export const deleteUser = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    await Auth.deleteUser();
    console.log('User account deleted.');
  } catch (error) {
    throw error;
  }
};

// The checkUser function to check if a user is currently logged in
export const isLoggedIn = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log('Current authenticated user:', user);
    return user; // User is logged in
  } catch (error) {
    console.error('No current user:', error);
    return null; // No user is logged in
  }
};
