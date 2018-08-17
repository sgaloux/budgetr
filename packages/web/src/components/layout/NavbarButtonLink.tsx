import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { EPages } from "../../Routes";

const linkClasses = (icon: string) =>
  classNames(Classes.BUTTON, Classes.MINIMAL, Classes.iconClass(icon));

interface IButtonLinkProps {
  to: EPages;
  text: string;
  icon: string;
}

export const ButtonLink: React.SFC<IButtonLinkProps> = ({ to, text, icon }) => (
  <NavLink
    className={linkClasses(icon)}
    to={to}
    activeClassName={Classes.ACTIVE}
  >
    {text}
  </NavLink>
);
