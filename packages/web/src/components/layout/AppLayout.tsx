import * as React from "react";
import styled from "react-emotion";
import { Routes } from "../../Routes";
import HeaderBar from "./HeaderBar";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 50,
});

const HorizontalContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
});

export default class AppLayout extends React.Component {
  public render() {
    return (
      <Container>
        <HeaderBar />
        <HorizontalContainer>
          <Routes />
        </HorizontalContainer>
      </Container>
    );
  }
}
