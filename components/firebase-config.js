/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

// default config --> dev environment
const firebaseConfig = {
  apiKey: "AIzaSyAze1cPF-E-t-3muqE6MYBGhoOobC1H9r8",
  authDomain: "deadcheckr.firebaseapp.com",
  projectId: "deadcheckr",
  storageBucket: "deadcheckr.appspot.com",
  messagingSenderId: "198186810174",
  appId: "1:198186810174:web:656417f63fe10992a28a6f"
};
const reCaptchaV3ProviderId = "";

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return firebaseConfig;
  }
}

export function getRecaptchaProviderConfig() {
  return reCaptchaV3ProviderId;
}


