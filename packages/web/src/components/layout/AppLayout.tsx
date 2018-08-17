import * as React from "react";
import styled from "react-emotion";
import { Routes } from "../../Routes";
import HeaderBar from "./HeaderBar";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingTop: 50,
});

export default class AppLayout extends React.Component {
  public render() {
    return (
      <Container>
        <HeaderBar />
        <div>
          <Routes />
        </div>
      </Container>
    );
  }
}
