import { Box, Container, Grid, Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../App";

const Login = () => {
  const { login } = useContext(Context);

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          style={{ width: 400, background: "lightgrey" }}
          container
          alignItems={"center"}
          direction={"column"}
        >
          <Box p={5}>
            <Button onClick={login} variant={"outlined"}>
              Login with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
