import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

type CustomErrorBoundaryProps = {
  children: ReactNode;
};

type FallbackRenderProps = {
  error: Error;
};

const FallbackRender = ({ error }: FallbackRenderProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};

const CustomErrorBoundary = ({ children }: CustomErrorBoundaryProps) => (
  <ErrorBoundary fallbackRender={FallbackRender}>{children}</ErrorBoundary>
);

export default CustomErrorBoundary;
