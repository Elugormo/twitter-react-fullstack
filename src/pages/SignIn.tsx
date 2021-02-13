import {
  makeStyles,
  Typography,
  Button,
  FormControl,
  FormGroup,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TwitterIcon from "@material-ui/icons/Twitter";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import { ModalBlock } from "../components/ModalBlock";
import React, { ReactElement } from "react";

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "calc(100vh - 44px)",
  },
  blueSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
    backgroundColor: "#71c9f8",
    overflow: "hidden",
    position: "relative",
  },
  blueSideBigIcon: {
    position: "absolute",
    right: "-80vh",
    width: "200%",
    height: "200%",
  },
  blueSideListInfo: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    "& h6": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      color: "white",
      fontWeight: 700,
      fontSize: 20,
    },
  },
  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
    overflow: "hidden",
  },
  blueSideListInfoIcons: {
    fontSize: 30,
    marginRight: 15,
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },
  buttonStyle: {
    marginBottom: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
}));

export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = React.useState<"signIn" | "signUp">();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal("signIn");
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal("signUp");
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcons} />
              Follow your interests.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcons} />
              Hear what people are talking about.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <ModeCommentOutlinedIcon
                className={classes.blueSideListInfoIcons}
              />
              Join the conversation.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginSideTwitterIcon}
          />
          <Typography
            className={classes.loginSideTitle}
            gutterBottom
            variant="h4"
          >
            See what’s happening in the world right now
          </Typography>
          <Typography>
            <b>Join Twitter right now!</b>
          </Typography>
          <br />
          <Button
            className={classes.buttonStyle}
            onClick={handleClickOpenSignUp}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign Up
          </Button>
          <Button
            onClick={handleClickOpenSignIn}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Log in
          </Button>
          <ModalBlock
            title="Sign in account"
            visible={visibleModal === "signIn"}
            classes={classes}
            onClose={handleCloseModal}
          >
            <FormControl
              className={classes.loginFormControl}
              component="fieldset"
              fullWidth
            >
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="name"
                  label="Email Address"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button
                  onClick={handleCloseModal}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Sign in
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            title="Create your account"
            visible={visibleModal === "signUp"}
            classes={classes}
            onClose={handleCloseModal}
          >
            <FormControl
              className={classes.loginFormControl}
              component="fieldset"
              fullWidth
            >
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  label="Name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  id="email"
                  label="Email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  Next
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};
