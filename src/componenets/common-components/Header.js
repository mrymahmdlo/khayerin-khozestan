import { React } from "react";
import "./header.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavBar from "./NavBar";
import AppBarMenu from "./AppBar";

export default function Header() {

  function ChangeHeader() {
    const matches = useMediaQuery("(min-width:600px)");

    if (!matches) {
      return (
        <AppBarMenu />
      );
    }
    return (
      <NavBar />
    );
  }

  return <>{ChangeHeader()}</>;
}
