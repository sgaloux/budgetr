import * as React from "react";
import styled from "react-emotion";

export interface IPageTemplateProps {
  title: string;
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
});

export default class PageTemplate extends React.Component<
  IPageTemplateProps,
  any
> {
  public render() {
    return (
      <Container>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </Container>
    );
  }
}
