import { React } from "react";
import "./header.css";
import {Hidden} from "@material-ui/core";
import NavBar from "./NavBar";
import AppBarMenu from "./AppBar";

export default function Header() {

  function ChangeHeader() {
    return(
      <>
      <Hidden mdUp>
        <AppBarMenu />
      </Hidden>
      <Hidden mdDown>
        <NavBar />
      </Hidden>
      </>
    )
  }

  return <>{ChangeHeader()}</>;
}
