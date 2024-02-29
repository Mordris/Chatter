import { Dialog, Box, Typography, ListItem, List } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { styled } from "@mui/system";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 1.5;
  }
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialog = () => {
  const onLoginSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    console.log(decoded);
  };

  const onLoginError = (response) => {
    console.error(response);
  };

  return (
    <Dialog PaperProps={{ sx: dialogStyle }} open={true}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and selec WhatsApp Web</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box>
          <QRCode src={qrCodeImage} alt="qr code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateX(25%) translateY(-100%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
