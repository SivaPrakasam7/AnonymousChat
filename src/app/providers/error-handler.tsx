import * as Mui from "@mui/material";
import * as ReactError from "react-error-boundary";
import * as Notistack from "notistack";

// React Error Boundary
const ErrorProvider = ({ children }: child) => (
  <ReactError.ErrorBoundary FallbackComponent={ErrorComponent}>
    {children}
  </ReactError.ErrorBoundary>
);

const ErrorComponent = ({
  error,
  resetErrorBoundary,
}: ReactError.FallbackProps) => (
  <Mui.Card
    component={Mui.Stack}
    alignItems="center"
    justifyContent="center"
    sx={{ height: "100vh", p: 1 }}
  >
    <Mui.Stack component={Mui.Container} spacing={1} maxWidth="xl">
      <Mui.Typography variant="h6" color="error">
        {error.name}
      </Mui.Typography>
      <Mui.Typography variant="body2">{error.message}</Mui.Typography>
      <Mui.Typography variant="caption" color="GrayText.secondary">
        {JSON.stringify(error.stack)}
      </Mui.Typography>
      <Mui.Button
        variant="contained"
        sx={{ width: "fit-content" }}
        onClick={resetErrorBoundary}
      >
        try again
      </Mui.Button>
    </Mui.Stack>
  </Mui.Card>
);

// Notistack Error  Boundary
const NotistackProvider = ({ children }: child) => (
  <Notistack.SnackbarProvider
    maxSnack={1}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    autoHideDuration={3000}
  >
    {children}
  </Notistack.SnackbarProvider>
);

// Error Handling Providers
export const ErrorHandlingProvider = ({ children }: child) => (
  <ErrorProvider>
    <NotistackProvider>{children}</NotistackProvider>
  </ErrorProvider>
);
