import type { ReactNode } from "react";

interface HomeContainerProps {
  children: ReactNode;
}

function HomeContainer({ children }: HomeContainerProps) {
  return <div className="grid grid-cols-1">{children}</div>;
}

export default HomeContainer;
