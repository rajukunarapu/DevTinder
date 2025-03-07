import React from "react";
import { useState } from "react";
import { IconButton, Link, Stack, Typography, Button } from "@mui/material";
import AppStore from "../assets/Images/appstore_image.webp";
import PlayStore from "../assets/Images/google_playstore.webp";
import { Call, Close, Facebook, } from "@mui/icons-material";

const SignUp = ({ setSignUpVisible }) => {
  const [moreOptionsVisible, setMoreOptionsVisible] = useState(false);
  return (
    <>
      <Stack
        direction="column"
        alignItems={"center"}
        sx={{
          padding: "40px 44px",
          width: "440px",
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          border: "1px solid light",
          borderRadius: 3,
          backgroundColor: "white",
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={() => setSignUpVisible(false)}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 11,
          }}
        >
          <Close sx={{ width: 30, height: 30 }} />
        </IconButton>

        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.8 9.685c4.7-1.582 5.5-5.703 4.9-9.492 0-.137.12-.234.24-.176 4.5 2.13 9.56 6.797 9.56 13.828C22.5 19.235 18.22 24 12 24 5.36 24 1.5 19.371 1.5 13.845c0-3.223 2.34-6.543 4.86-7.95.12-.077.28 0 .28.138.06.722.26 2.558 1.08 3.632.02.02.06.02.08.02"
            clipRule="evenodd"
          />
        </svg>

        <Typography variant="h4" mt={3} color="black" fontWeight={"bold"}>
          Get Started
        </Typography>

        <Typography variant="subtitle2" color="black" mt={3}>
          By tapping Log In or Continue, you aggre to our{" "}
          <span color="blue">
            <Link
              fontWeight={"bold"}
              href="https://policies.tinder.com/terms/intl/en/?lang=en"
            >
              Terms.
            </Link>
          </span>{" "}
          Learn how we process your data in our{" "}
          <span color="blue">
            <Link
              fontWeight={"bold"}
              href="https://policies.tinder.com/privacy/intl/en/?lang=en"
            >
              Privacy Policy,
            </Link>
          </span>{" "}
          and{" "}
          <span color="blue">
            <Link
              fontWeight={"bold"}
              href="https://policies.tinder.com/cookie-policy/intl/en/?lang=en"
            >
              Cookie Policy.
            </Link>
          </span>{" "}
        </Typography>
        {moreOptionsVisible ? (
          <>
            <Button
              variant="outlined"
              color="black"
              startIcon={<Facebook />}
              href="https://www.facebook.com/login.php?skip_api_login=1&api_key=464891386855067&kid_directed_site=0&app_id=464891386855067&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.8%2Fdialog%2Foauth%3Fapp_id%3D464891386855067%26cbt%3D1741379289162%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfca3913a09d242921%2526domain%253Dtinder.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Ftinder.com%25252Ff899cf8256d7cd2c4%2526relation%253Dopener%26client_id%3D464891386855067%26display%3Dpopup%26domain%3Dtinder.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Ftinder.com%252F%26locale%3Den_US%26logger_id%3Df22b27766d666b5ac%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df00cdb987ff213843%2526domain%253Dtinder.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Ftinder.com%25252Ff899cf8256d7cd2c4%2526relation%253Dopener%2526frame%253Dff7c8f2c40556de31%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Duser_birthday%252Cuser_photos%252Cemail%252Cuser_likes%26sdk%3Djoey%26version%3Dv2.8%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df00cdb987ff213843%26domain%3Dtinder.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Ftinder.com%252Ff899cf8256d7cd2c4%26relation%3Dopener%26frame%3Dff7c8f2c40556de31%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0"
              sx={{
                mt: 2,
                width:'90%',
                textTransform: "capitalize",
                fontWeight: "bold",
                borderRadius: 5,
              }}
            >
              Log in with facebook
            </Button>
            <Button
              variant="outlined"
              color="black"
              startIcon={<Call/>}
              sx={{
                width:'90%',
                mt: 2,
                textTransform: "capitalize",
                fontWeight: "bold",
                borderRadius: 5,
              }}
            >
              Log in with facebook
            </Button>
            <Link
            sx={{
              mt: 2,
              color: "blue",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Trouble Loggin in?
          </Link>

          </>
        ) : (
          <Link
            onClick={() => setMoreOptionsVisible(true)}
            sx={{
              mt: 1,
              color: "gray",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            More Options
          </Link>
        )}

        <Typography variant="body1" mt={3} fontWeight={"bold"} color="black">
          Get the app!
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link
            underline="none"
            sx={{ cursor: "pointer" }}
            href="https://apps.apple.com/us/app/tinder-dating-app-chat-date/id547702041"
          >
            <img
              src={AppStore}
              alt="AppStore"
              width={"143px"}
              height={"48px"}
            />
          </Link>
          <Link
            underline="none"
            sx={{ cursor: "pointer" }}
            href="https://play.google.com/store/apps/details?id=com.tinder&referrer=utm_source%3Dwebsite&utm_medium=cta&utm_campaign=website_home&pli=1"
          >
            <img
              src={PlayStore}
              alt="playstore"
              width={"175px"}
              height={"70px"}
            />
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default SignUp;
