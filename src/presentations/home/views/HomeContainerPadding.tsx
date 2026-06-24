import type { ReactNode } from "react";

interface HomeContainerPaddingProps {
  children: ReactNode;
}

function HomeContainerPadding({ children }: HomeContainerPaddingProps) {
  return <div className="px-24 pt-40 md:px-64">{children}</div>;
}

export default HomeContainerPadding;
