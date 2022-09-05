export const firebaseConfig = {
  apiKey: "AIzaSyC69CMgGZmAZ8BZ82PQLoH-N8nzDUO0_Y0",
  authDomain: "dalmasso-be57e.firebaseapp.com",
  projectId: "dalmasso-be57e",
  storageBucket: "dalmasso-be57e.appspot.com",
  messagingSenderId: "1081311413981",
  appId: "1:1081311413981:web:21e0650254fa8a5ab87d34"
};
export const actionCodeSettingsVerification = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'https://dalmassohnos.vercel.app/',
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/login'
      : 'https://dalmassohnos.vercel.app/login',
};
