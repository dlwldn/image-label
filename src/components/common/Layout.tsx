import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>
        <Navigation />
        {children}
      </main>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  > main {
    height: calc(100vh - 64px); 
    display: flex;
  }
`