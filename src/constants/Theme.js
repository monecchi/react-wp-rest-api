//
// Atomize theme configuraion
//

const theme = {
  fontFamily: {
    primary:
      '"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    secondary:
      '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    code: "'Fira Mono','Roboto Mono', monospace"
  },
  colCount: 12,
  grid: {
    containerWidth: {
      xs: "540px",
      sm: "720px",
      md: "960px",
      lg: "1200px",
      xl: "1366px"
    },
    containerMaxWidth: {
      xl: "1366px"
    },
    gutterWidth: "16px",
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992, // 992
      xl: 1440 // 1200
    }
  },
  textSize: {
    size: {
      body: "14px",
      paragraph: "16px",
      display3: "48px"
    },
    height: {
      display3: "56px"
    }
  },
  colors: {
    brandgray: "#F7F5F4",
    white: "#ffffff",
    dark: "#141b24",
    brand: "#FC0E36",
    brandAlt: "#EF2840",
    brandHover: "#ea1d2c",
    success: "#1BC160",
    successDark: "#36b37e",
    danger: "#FC0E36",
    softDanger: "#FED9DB",
    softSuccess: "#D7f0E5",
    warning: "#FCC246",
    info: "#3366FF"
  },
  rounded: {
    brandRadius: "20px"
  },
  shadows: {
    xs: "0 .125rem .25rem rgba(18,38,63,.03)",
    md: "0 0 1.25rem rgba(18,38,63,.08)",
    sm: "0 0.75rem 1.5rem rgba(18,38,63,.03)",
    lg_hover: "0 1rem 3rem rgba(31,45,61,.125)",
    inset_sm: "inset 0 -1px 0 #dcdcdc",
    inset_top_sm: "inset 0 1px 0 #dcdcdc"
  },
  transition: {
    all: "background-color .1s ease, color .1s ease, box-shadow .1s ease, transform .1s ease"
  },
};

export default theme;