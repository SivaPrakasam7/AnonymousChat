import * as FirebaseFirestore from "firebase/firestore";
import * as Providers from "src/app/providers";
import * as React from "react";

export const useCollectionSnapshot = <T>(collectionName: string) => {
  const [data, setData] = React.useState<{ [key: string]: T }>({});
  const firestore = FirebaseFirestore.getFirestore(Providers.SecondaryApp);
  const collectionReference = FirebaseFirestore.collection(
    firestore,
    collectionName
  );
  React.useLayoutEffect(() => {
    setData({});
    const unsubscribe = FirebaseFirestore.onSnapshot(
      collectionReference,
      (docs) => {
        docs.forEach((doc) =>
          setData((prev) => ({ ...prev, ...{ [doc.id]: doc.data() as T } }))
        );
      }
    );
    return () => unsubscribe();
  }, [collectionName]);
  return { data: Object.values(data), loading: !Boolean(data.length) };
};
