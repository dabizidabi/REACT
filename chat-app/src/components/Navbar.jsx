import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Context } from "../App";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { auth, login } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar position={"static"}>
      <Toolbar variant={"dense"}>
        <Grid container justifyContent={"flex-end"} p={2}>
          {user ? (
            <Button onClick={() => signOut(auth)} variant="contained">
              Sing out
            </Button>
          ) : (
            <Button variant="contained" onClick={login}>
              Login
            </Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
