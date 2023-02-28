import { ReactNode } from 'react';
// import Nav from './Nav';

type ComponentProps = {
  children: ReactNode;
};

//기본적인 layout component
const Layout = ({ children }: ComponentProps) => {
  return (
    <>
      {/* <Nav /> */}
      <div>{children}</div>
    </>
  );
};

export default Layout;
