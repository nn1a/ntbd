import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <main className="grow">
        <div className="max-w-full p-4">{children}</div>
      </main>
    </div>
  );
};

export default Content;
