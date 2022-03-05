import * as Providers from "src/app/providers";

export const Main = ({ children }: child) => (
  <Providers.FirebaseProvider>
    <Providers.ErrorHandlingProvider>
      {children}
    </Providers.ErrorHandlingProvider>
  </Providers.FirebaseProvider>
);
