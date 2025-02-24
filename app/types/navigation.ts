export type AuthStackParamList = {
  Login: undefined;
  // Add other auth screens here as needed, for example:
  // Register: undefined;
  // ForgotPassword: { email?: string };
}; 

export type MainStackParamList = {
  Main: { userId: string }
}