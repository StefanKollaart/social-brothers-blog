interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="max-w-layout m-auto">{children}</div>;
}

export default Container;
