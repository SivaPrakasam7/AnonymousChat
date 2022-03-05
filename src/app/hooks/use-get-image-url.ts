import FirebaseStorage from "firebase/storage";
import * as Providers from "src/app/providers";

export const useGetImageUrl = async (image: string) => {
  const secondaryStorage = FirebaseStorage.getStorage(Providers.SecondaryApp);
  const ref = FirebaseStorage.ref(
    secondaryStorage,
    new Date().getTime().toString()
  );
  const result = await FirebaseStorage.uploadString(ref, image, "data_url");
  return await FirebaseStorage.getDownloadURL(result.ref);
};
