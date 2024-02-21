import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import profileLogo from "../assets/img/01.png";
import profileBg from "../assets/img/profile-bg.jpg";

const UserProfile = () => {
  const styles = {
    profileWrapper: {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      padding: "1rem",
      borderRadius: "5px",
      minHeight: "calc(100vh - 140px)",
    },
    profileSection: {
      marginBottom: "1rem ",
      bannerImgWrapper: {
        outline: "1px solid #dfdfdf",
        borderRadius: "5px",
        overflow: "hidden",
        maxHeight: "250px",
        position: "relative",
      },
      bannerImg: {
        width: "100%",
      },
      imageDiv: {
        borderRadius: "50%",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        position: "absolute",
        top: "30px",
        left: "20px",
        background: "white",
      },
    },
    formSection: {
      marginTop: "2rem",
    },
  };
  return (
    <div style={styles.profileWrapper}>
      <section style={styles.profileSection}>
        <div style={styles.profileSection.bannerImgWrapper}>
          <img
            src={profileBg}
            loading="lazy"
            style={styles.profileSection.bannerImg}
          />
          <img
            style={styles.profileSection.imageDiv}
            width="160"
            src={profileLogo}
            loading="lazy"
          />
        </div>
      </section>
      <section style={styles.formSection}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {" "}
              <TextField
                label="Name"
                defaultValue="User 01"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                fullWidth
              />{" "}
            </Grid>
            <Grid item xs={6}>
              {" "}
              <TextField
                label="Email"
                defaultValue="user@gmail.com"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Contact"
                defaultValue="9898977876"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                variant="standard"
              />{" "}
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="location"
                defaultValue="Coimbatore"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                variant="standard"
              />{" "}
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Community"
                defaultValue="New community"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                variant="standard"
              />{" "}
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Role"
                defaultValue="Super admin"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                variant="standard"
              />{" "}
            </Grid>
          </Grid>
        </Box>
      </section>
    </div>
  );
};

export default UserProfile;
