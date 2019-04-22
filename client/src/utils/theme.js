import { createMuiTheme } from '@material-ui/core/styles'

// ref: https://material-ui.com/customization/default-theme/
const COLOR_PRIMARY = '#7696CC'
const COLOR_SECONDARY = '#7696CC'
const MAX_WIDTH = 1400
const BOX_SHADOW =
  'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 6px'

const palette = {
  primary: getColorPalette(COLOR_PRIMARY),
  secondary: getColorPalette(COLOR_SECONDARY),
}

const shape = {
  borderRadius: 2,
}

const defaultTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
})

const theme = {
  shape,
  typography: {
    useNextVariants: true,
    fontFamily:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;',
  },
  palette,

  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiInput: {
      disableUnderline: true,
    },
    MuiInputLabel: {
      shrink: true,
    },
  },

  shadows: ['none', ...Array(24).fill(BOX_SHADOW)],

  overrides: {
    MuiTabs: {
      root: {
        color: defaultTheme.palette.text.primary,
      },
    },
    MuiGrid: {
      container: {
        maxWidth: MAX_WIDTH,
        margin: 'auto',
      },
    },
    MuiDialogTitle: {
      root: {
        padding: '15px 24px',
        borderBottom: `1px solid ${defaultTheme.palette.divider}`,
        boxShadow: '0 0 6px -3px',
      },
    },
    MuiDialog: {
      paper: {
        margin: 5,
      },
      paperScrollPaper: {
        maxHeight: 'calc(100% - 10px)',
      },
    },
    MuiFormControl: {
      root: {
        width: '100%',
      },
    },
    MuiButton: {
      root: {
        fontStyle: 'initial',
        padding: '8px 16px',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        transition: 'all .1s ease',
        '&:active': {
          transform: 'translateY(2px) !important',
        },
      },
      outlined: {
        padding: '13px 18px 15px',
      },
      raised: {
        textTransform: 'uppercase',
        letterSpacing: '1px',
        boxShadow: '2px 3px 2px -2px rgba(0, 0, 0, 0.35)',
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: '2px 4px 4px -2px rgba(0, 0, 0, 0.35)',
        },
        '&:active': {
          transform: 'translateY(1px) !important',
          boxShadow: '1px 2px 3px -2px rgba(0, 0, 0, 0.6) !important',
        },
        color: defaultTheme.palette.common.white,
      },
    },
    MuiAppBar: {
      root: {
        background: 'transparent !important',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    MuiToolbar: {
      root: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
    MuiInput: {
      root: {
        fontSize: 16,
      },
      input: {
        minHeight: 39,
        borderRadius: shape.borderRadius,
        boxSizing: 'border-box',
        background: defaultTheme.palette.grey[100],
        padding: '10px 12px',
        transition: 'all .1s ease',
        boxShadow: 'inset 1px 1px 5px -2px rgba(0,0,0,0.2)',
        '&:focus': {
          boxShadow: `0px 0px 0px 2px ${COLOR_PRIMARY}`,
          background: defaultTheme.palette.common.white,
        },
      },
    },
    MuiSelect: {
      select: {
        width: '100%',
        '&:focus': {
          borderRadius: shape.borderRadius,
        },
      },
    },
    MuiExpansionPanel: {
      root: {
        flex: 1,
        boxShadow: 'none',
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: 0,
      },
      content: {
        margin: 0,
        '&$expanded': {
          margin: 0,
        },
      },
      expanded: {
        margin: 0,
      },
    },
  },
  transitions: {
    duration: {
      shortest: 75,
      shorter: 100,
      short: 150,
      standard: 200,
      complex: 275,
    },
  },
}

function getColorPalette(col) {
  return {
    main: col,
  }
}

export default createMuiTheme(theme)
