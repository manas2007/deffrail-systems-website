import { createTheme } from "@mui/material";



export const ERROR_THEME = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#F40909",
          },
          "& .MuiInput-underline:after": {
            border: "2px solid #F40909",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "1.8px solid #F40909",
              borderRadius: "10px",
            },
            "&:hover fieldset": {
              border: "2px solid #F40909",
              borderRadius: "10px",
            },
            "&.Mui-focused fieldset": {
              border: "2px solid #F40909",
              borderRadius: "10px",
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#E80606",
          fontSize: "0.75rem",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          "&.Mui-focused": {
            color: "#E80606",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1.8px solid #E80606",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #E80606",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #E80606",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          borderRadius: "10px"
        },
      },
    },
  },
}); 


export const THEME = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#297aff",
          },
          "& .MuiInput-underline:after": {
            border: "2px solid #297aff",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "1.8px solid #E2ECF5",
              borderRadius: "10px", // Add this line to set borderRadius
            },
            "&:hover fieldset": {
              border: "2px solid #E2ECF5",
              borderRadius: "10px", // Ensure consistency on hover
            },
            "&.Mui-focused fieldset": {
              border: "2px solid #297aff",
              borderRadius: "10px", // Ensure consistency when focused
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#3E3E3E",
          fontSize: "0.85rem",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "1rem",

          "& .MuiOutlinedInput-notchedOutline": {
            border: "1.5px solid #E2ECF5",
            borderRadius: "10px",
            padding: "0",
            alignItems: "center",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1.5px solid #E2ECF5"

          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
  },
});

export const INSTAGRAM_LINK = "https://www.instagram.com/fynestrealty/";
export const LINKEDIN_LINK = "https://www.linkedin.com/company/fynestrealty/";
export const X_LINK = "https://x.com/PrinzalDigital";
export const FACEBOOK_LINK = "https://www.facebook.com/FynestRealty";
export const YOUTUBE_LINK = "https://www.youtube.com/@FynestRealty";


export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PHONE_REGEX = /^[0-9]{10}$/; // Allows optional + and 1-15 digits