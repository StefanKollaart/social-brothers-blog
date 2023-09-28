import Spinner from "./Spinner";

interface SpinnerOrChildrenProps {
  isLoading: boolean;
  children: React.ReactNode;
}

function SpinnerOrChildren({ isLoading, children }: SpinnerOrChildrenProps) {
  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && children}
    </div>
  );
}

export default SpinnerOrChildren;
