import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import PiiList from "./PiiList";
// import { lowRiskAoResponse } from "../data/apiData";
import { CircularProgress } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "31rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
// const style2 = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   transform: "translate(-50%, -50%)",
//   width: "50%",
//   height: "31rem",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const RiskModal = ({
  open,
  setOpen,
  savedPii,
  setSignalOpen,
  signalOpen,
  setLoading,
  loading,
}) => {
  //   const ColorButton = styled(Button)(({ theme }) => ({
  //     color: theme.palette.getContrastText(red[500]),
  //     backgroundColor: red[500],
  //     "&:hover": {
  //       backgroundColor: red[700],
  //     },
  //   }));
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLowRiskAo = () => {
    setOpen(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSignalOpen(true);
      console.log("here");
    }, 1000);
  };

  return (
    <div>
      {open ? (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 2000,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div style={{ textAlign: "center", color: "#fc5e03" }}>
                <h1 className="text-xl">Send Captured Customer info to API</h1>
              </div>
              <PiiList savedPii={savedPii} />
              <div
                className="w-full pt-3"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Button
                  onClick={() => handleLowRiskAo()}
                  color="success"
                  variant="outlined"
                >
                  Low-Risk
                </Button>
                <Button color="warning" variant="outlined">
                  Medium-Risk
                </Button>
                <Button color="error" variant="outlined">
                  High-Risk
                </Button>
              </div>
            </Box>
          </Fade>
        </Modal>
      ) : loading ? (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={loading}
          //   onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          slotProps={{
            backdrop: {
              timeout: 200,
            },
          }}
        >
          <Fade in={loading}>
            <Box sx={style}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </div>

              <div
                className="w-full pt-3"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              ></div>
            </Box>
          </Fade>
        </Modal>
      ) : (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={signalOpen}
          //   onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 200,
            },
          }}
        >
          <Fade in={signalOpen}>
            <Box sx={style}>
              <div style={{ textAlign: "center", color: "#fc5e03" }}>
                <h1 className="text-xl">Send Captured Customer info to API</h1>
              </div>
              {/* <PiiList savedPii={savedPii} /> */}
              <div
                className="w-full pt-3"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              ></div>
            </Box>
          </Fade>
        </Modal>
      )}
    </div>
  );
};

export default RiskModal;
