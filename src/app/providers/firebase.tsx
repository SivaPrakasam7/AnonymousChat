import * as FirebaseApp from "firebase/app";
import * as FirebaseFirestore from "firebase/firestore";
import * as FirebaseStorage from "firebase/storage";
import * as ReactFire from "reactfire";
import * as Constants from "src/constants";

export const SecondaryApp = FirebaseApp.initializeApp(Constants.firebaseConfig);

export const FirebaseProvider = ({ children }: child) => (
  <ReactFire.FirebaseAppProvider firebaseConfig={Constants.firebaseConfig}>
    <SubProvider>{children}</SubProvider>
  </ReactFire.FirebaseAppProvider>
);

const SubProvider = ({ children }: child) => {
  const app = ReactFire.useFirebaseApp();
  const firestore = FirebaseFirestore.getFirestore(app);
  const storage = FirebaseStorage.getStorage(app);
  return (
    <ReactFire.FirestoreProvider sdk={firestore}>
      <ReactFire.StorageProvider sdk={storage}>
        {children}
      </ReactFire.StorageProvider>
    </ReactFire.FirestoreProvider>
  );
};
