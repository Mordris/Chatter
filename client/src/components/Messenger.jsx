import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar } from "@mui/material";
import { styled, Box } from "@mui/system";

const Header = styled(AppBar)`
  background-color: #128c7e;
  position: fixed;
  top: 0;
  z-index: 100;
  height: 220px;
`;

const Component = styled(Box)`
  background-color: #f5f5f5;
  padding-top: 220px;
  height: 100%;
`;

const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
};

export default Messenger;
