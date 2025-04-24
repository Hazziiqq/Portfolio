"use client";

import { createTheme } from "@mui/material/styles";
import themeColors from "./colors";

declare module "@mui/material/styles" {
  interface Palette {
    customButtonColor: Palette["primary"];
    customScrollbarColor: Palette["primary"];
    placeHolderColor: Palette["primary"];
    transparentColor: Palette["primary"];
    white: Palette["primary"];
    red: Palette["primary"];
    grey600: Palette["primary"];
    primary: Palette["primary"];
    danger: Palette["primary"];
    grey800: Palette["primary"];
    greyScrollbarColor: Palette["primary"];
    authBG: Palette["primary"];
    greyGradient: Palette["primary"];
    purpleGradient: Palette["primary"];
    greyPurpleGradient: Palette["primary"];
    primaryLight: Palette["primary"];
    gradients: {
      primary: string;
      [key: string]: string; // To allow any other gradients you might add
    };
    pendingStatus: Palette["primary"];
    failedStatus: Palette["primary"];
    successStatus: Palette["primary"];
    toastError: Palette["primary"];
    toastSuccessBg: Palette["primary"];
    glowPurple: Palette["primary"];
    ticketResolved: Palette["primary"];
    ticketPending: Palette["primary"];
    SustanabilityCardColor: Palette["primary"];
    textBrand: Palette["primary"];
    getStartedColor: Palette["primary"];
    blogCardColor: Palette["primary"];
    supportBorderColor: Palette["primary"];
    bodyText: Palette["primary"];
  }
  interface PaletteOptions {
    customButtonColor?: PaletteOptions["primary"];
    customScrollbarColor?: PaletteOptions["primary"];
    placeHolderColor?: PaletteOptions["primary"];
    transparentColor?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
    red?: PaletteOptions["primary"];
    grey600?: PaletteOptions["primary"];
    primary?: PaletteOptions["primary"];
    danger?: PaletteOptions["primary"];
    grey800?: Palette["primary"];
    greyScrollbarColor?: PaletteOptions["primary"];
    authBG?: PaletteOptions["primary"];
    greyGradient?: PaletteOptions["primary"];
    purpleGradient?: PaletteOptions["primary"];
    greyPurpleGradient: PaletteOptions["primary"];
    primaryLight?: PaletteOptions["primary"];
    gradients?: {
      primary: string;
      [key: string]: string;
    };
    pendingStatus?: PaletteOptions["primary"];
    failedStatus?: PaletteOptions["primary"];
    successStatus?: PaletteOptions["primary"];
    toastError?: PaletteOptions["primary"];
    toastSuccessBg?: PaletteOptions["primary"];
    glowPurple?: PaletteOptions["primary"];
    ticketResolved?: PaletteOptions["primary"];
    ticketPending?: PaletteOptions["primary"];
    SustanabilityCardColor: PaletteOptions["primary"];
    textBrand: PaletteOptions["primary"];
    getStartedColor: PaletteOptions["primary"];
    blogCardColor: PaletteOptions["primary"];
    supportBorderColor: PaletteOptions["primary"];
    bodyText: PaletteOptions["primary"];
  }
  interface Theme {
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      x_large: string;
      xx_large: string;
      default: string;
      lg_40: string;
      none: string;
    };
    width: {
      large: string;
    };
  }
  // Adding it to ThemeOptions as well, so we can define it when creating the theme
  interface ThemeOptions {
    borderRadius?: {
      small?: string;
      medium?: string;
      large?: string;
      x_large?: string;
      xx_large?: string;
      default?: string;
      lg_40?: string;
      none?: string;
    };
    width?: {
      large?: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    md_medium: true;
    md_bold: true;
    xxl_bold: true;
    l_bold: true;
    sm_bold: true;
    sm_medium: true;
    xl_bold: true;
    lg_medium: true;
    lg_bold: true;
    lg24_bold: true;
    lg20_bold: true;
    md_medium_grey: true;
    lg20_medium: true;
    lg18_bold: true;
    lg18_medium: true;
    lg33_bold: true;
    lg44_bold: true;
    lg24_medium: true;
    xxl60_bold: true;
    lg36_bold: true;
    lg50_medium: true;
    lg50_bold: true;
    xxl64_bold: true;
    lg42_bold: true;
    lg38_bold: true;
    lg28_medium: true;
    lg28_bold: true;
    lg30_medium: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    navLink: true;
    dangerOutlined: true;
    danger: true;
    grey: true;
    cancelButton: true;
    saveChanges: true;
    primaryFooter: true;
    imageType: true;
    imageTypeActive: true;
    secondaryYellow: true;
  }
  interface ButtonPropsColorOverrides {
    transparentColor: true;
    customButtonColor: true;
    white: true;
    grey600: true;
    danger: true;
    grey800: true;
    activePresetButton: true;
    primaryLight: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    white: true;
  }
}
declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    white: true;
  }
}
declare module "@mui/material/FormLabel" {
  interface FormLabelPropsColorOverrides {
    white: true;
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: themeColors.primary,
      light: themeColors.primaryLight,
      dark: themeColors.primaryDark,
    },
    primaryLight: {
      main: themeColors.primaryLight,
      dark: themeColors.primary,
    },
    secondary: {
      main: themeColors.secondary,
    },
    common: {
      white: themeColors.white,
      black: themeColors.black,
    },
    grey: {
      500: themeColors.grey1,
      600: themeColors.grey2,
      700: themeColors.grey3,
      800: themeColors.grey4,
      400: themeColors.grey5,
      900: themeColors.grey,
    },
    success: {
      main: themeColors.toastSuccess,
    },
    toastError: {
      main: themeColors.toastErrorBg,
    },
    toastSuccessBg: {
      main: themeColors.toastSuccessBg,
    },
    background: {
      default: themeColors.homeBackground,
    },
    authBG: {
      main: themeColors.authBG,
    },
    text: {
      primary: themeColors.textPrimary,
      secondary: themeColors.textSecondary,
    },
    textBrand: {
      main: themeColors.textBrand,
    },
    customButtonColor: {
      main: themeColors.primaryLight,
      dark: themeColors.primary,
    },
    customScrollbarColor: {
      main: themeColors.scrollbar,
    },
    greyScrollbarColor: {
      main: themeColors.greyScrollbar,
    },
    placeHolderColor: {
      main: themeColors.placeholder,
    },
    transparentColor: {
      main: "rgba(0, 0, 0, 0)",
    },
    white: {
      main: themeColors.white,
    },
    red: {
      main: themeColors.red,
    },
    grey600: {
      main: themeColors.grey2,
      dark: themeColors.grey3,
    },
    purpleGradient: {
      main: themeColors.purpleTextGradient1,
      dark: themeColors.purpleTextGradient2,
    },
    greyPurpleGradient: {
      main: themeColors.greyPurpleTextGradient1,
      dark: themeColors.greyPurpleTextGradient2,
    },
    danger: {
      main: themeColors.danger,
      dark: themeColors.dangerDark,
    },
    error: {
      main: themeColors.error,
      light: themeColors.errorLight,
      dark: themeColors.errorDark,
    },
    grey800: {
      main: themeColors.grey4,
      dark: themeColors.grey,
      light: themeColors.grey3,
      contrastText: themeColors.white,
    },

    gradients: {
      primary: `linear-gradient(93.65deg, ${themeColors.purpleTextGradient1} 0%, ${themeColors.purpleTextGradient2} 100%)`,
      grey: `linear-gradient(0deg, ${themeColors.grey3} 66%, ${themeColors.grey3}00 100%)`,
    },

    pendingStatus: {
      main: themeColors.pendingStatus,
    },
    failedStatus: {
      main: themeColors.failedStatus,
    },
    successStatus: {
      main: themeColors.successStatus,
    },
    glowPurple: {
      main: themeColors.glowPurple,
    },
    ticketResolved: {
      main: themeColors.ticketResolved,
    },
    ticketPending: {
      main: themeColors.ticketPending,
    },
    SustanabilityCardColor: {
      main: themeColors.SustanabilityCardColor,
    },
    blogCardColor: {
      main: themeColors.blogCardColor,
    },
    getStartedColor: {
      main: themeColors.getStartedColor,
    },
    supportBorderColor: {
      main: themeColors.supportBorderColor,
    },
    bodyText: {
      main: themeColors.blackBodyText,
      light: themeColors.whiteBodyText,
    },
  },
  borderRadius: {
    default: "8px", // Default MUI radius
    small: "4px",
    medium: "12px",
    large: "16px",
    x_large: "20px",
    xx_large: "24px",
    lg_40: "40px",
    none: "0px",
  },
  width: {
    large: "410px",
  },
  typography: {
    fontFamily: "PlusJakartaSans",
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "primary", // This sets the default variant to 'primary'
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: themeColors.primary,
            textTransform: "none",
            borderRadius: "8px",
            fontSize: "14px",
            lineHeight: "14px",
            fontWeight: "700",

            padding: "12px 21px",
            color: themeColors.white,
            ":hover": {
              // backgroundColor: themeColors.primaryDark,
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            backgroundColor: themeColors.white,
            textTransform: "none",
            borderRadius: "8px",
            fontSize: "14px",
            lineHeight: "14px",
            fontWeight: "700",

            padding: "12px 21px",
            color: themeColors.black,
            ":hover": {
              // backgroundColor: themeColors.primaryDark,
            },
          },
        },
        {
          props: { variant: "secondaryYellow" },
          style: {
            backgroundColor: themeColors.secondary,
            textTransform: "none",
            borderRadius: "8px",
            fontSize: "14px",
            lineHeight: "14px",
            fontWeight: "700",

            padding: "12px 21px",
            color: themeColors.black,
            ":hover": {
              // backgroundColor: themeColors.primaryDark,
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            border: `1.5px solid ${themeColors.grey1}`,
            borderRadius: "8px",
            // fontWeight: "bold",
            fontFamily: "SmoochSans",
            ":hover": {
              color: themeColors.white,
              border: `1.5px solid ${themeColors.scrollbar}`,
            },
          },
        },
      ],
    },

    MuiTypography: {
      variants: [
        {
          props: { variant: "sm_bold" },
          style: {
            fontSize: "12px",
            lineHeight: "12px",
            fontWeight: 400,
          },
        },
        {
          props: { variant: "sm_medium" },
          style: {
            fontSize: "12px",
            lineHeight: "12px",
          },
        },
        {
          props: { variant: "md_medium" },
          style: {
            fontSize: "14px",
            lineHeight: "14px",
            fontWeight: 500,
          },
        },
        {
          props: { variant: "md_medium_grey" },
          style: {
            fontSize: "14px",
            lineHeight: "14px",
            fontWeight: 500,
            color: themeColors.grey1,
          },
        },
        {
          props: { variant: "md_bold" },
          style: {
            fontSize: "14px",
            lineHeight: "14px",
            fontWeight: 400,
          },
        },
        {
          props: { variant: "lg_medium" },
          style: {
            fontSize: "16px",
            lineHeight: "16px",
            fontWeight: 500,
          },
        },
        {
          props: { variant: "lg_bold" },
          style: {
            fontSize: "16px",
            lineHeight: "16px",
            fontWeight: 700,
          },
        },
        {
          props: { variant: "lg18_bold" },
          style: {
            fontSize: "18px",
            lineHeight: "18px",
            fontWeight: 700,
          },
        },
        {
          props: { variant: "lg18_medium" },
          style: {
            fontSize: "18px",
            lineHeight: "18px",
            fontWeight: 500,
          },
        },
        {
          props: { variant: "lg20_bold" },
          style: {
            fontSize: "20px",
            lineHeight: "20px",
            fontWeight: 400,
          },
        },
        {
          props: { variant: "lg20_medium" },
          style: {
            fontSize: "20px",
            lineHeight: "20px",
            fontWeight: 500,
          },
        },
        {
          props: { variant: "lg24_bold" },
          style: {
            fontSize: "24px",
            lineHeight: "24px",
            fontWeight: 700,
          },
        },
        {
          props: { variant: "lg24_medium" },
          style: {
            fontSize: "24px",
            lineHeight: "24px",
            fontWeight: 500,
          },
        },
        {
          props: { variant: "lg28_medium" },
          style: {
            fontSize: "28px",
            lineHeight: "28px",
            fontWeight: 500,
          },
        },
        {
          props: { variant: "lg28_bold" },
          style: {
            fontSize: "28px",
            lineHeight: "28px",
            fontWeight: 700,
          },
        },
        {
          props: { variant: "lg30_medium" },
          style: {
            fontSize: "30px",
            lineHeight: "30px",
            fontWeight: 500,
          },
        },
        {
          props: { variant: "lg33_bold" },
          style: {
            fontSize: "33px",
            lineHeight: "43px",
            fontWeight: 700,
          },
        },
        {
          props: { variant: "lg36_bold" },
          style: {
            fontSize: "36px",
            lineHeight: "43px",
            fontWeight: 700,
          },
        },
        {
          props: { variant: "lg38_bold" },
          style: {
            fontSize: "38px",
            lineHeight: "38px",
            fontWeight: 700,
          },
        },
        {
          props: { variant: "lg42_bold" },
          style: {
            fontSize: "42px",
            lineHeight: "42px",
            fontWeight: 700,
          },
        },
        {
          props: { variant: "lg44_bold" },
          style: {
            fontSize: "44px",
            lineHeight: "44px",
            fontWeight: 500,
          },
        },
        {
          props: { variant: "lg50_medium" },
          style: {
            fontSize: "50px",
            lineHeight: "60px",
            fontWeight: 500,
          },
        },
        {
          props: { variant: "lg50_bold" },
          style: {
            fontSize: "50px",
            lineHeight: "60px",
            fontWeight: 700,
          },
        },
        {
          props: { variant: "xxl_bold" },
          style: {
            fontSize: "48px",
            lineHeight: "72px",
            fontWeight: "700",
          },
        },
        {
          props: { variant: "xxl60_bold" },
          style: {
            fontSize: "60px",
            lineHeight: "72px",
            fontWeight: "700",
          },
        },
        {
          props: { variant: "xxl64_bold" },
          style: {
            fontSize: "64px",
            lineHeight: "72px",
            fontWeight: "700",
          },
        },
        {
          props: { variant: "l_bold" },
          style: {
            fontSize: "32px",
            lineHeight: "32px",
            fontWeight: 700,
          },
        },
        {
          props: { variant: "xl_bold" },
          style: {
            fontSize: "40px",
            lineHeight: "40px",
            fontWeight: 400,
          },
        },
      ],
    },

    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: themeColors.primary,
        },
        colorSecondary: {
          color: themeColors.secondary,
          width: "24px !important",
          height: "24px !important",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          fontSize: 14,
          marginBottom: "2px",
          "& .MuiOutlinedInput-root": {
            // Hover state
            "&:hover fieldset": {
              borderColor: themeColors.white,
            },
            // Active (focused) state
            "&.Mui-focused fieldset": {
              borderColor: themeColors.white,
            },
          },
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
          marginBottom: "1.5rem",

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: 8,
              borderColor: themeColors.white,
            },
            "&:hover fieldset": {
              borderColor: themeColors.primary,
            },
            "&.Mui-focused fieldset": {
              borderColor: themeColors.primary,
            },
          },
          ".MuiInputBase-root": {
            padding: 0,
            margin: 0,
            color: themeColors.textPrimary,
          },
        },
      },
    },
  },
  spacing: 8,
});

export default theme;
