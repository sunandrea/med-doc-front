import { createTheme } from '@mui/material/styles';

const COLOR = {
    green: '#477577',
    darkGreen: '#0f3937',
    lightGreen: '#68c494',
    linearGreen: 'linear-gradient(253.01deg, #68c494 -56.38%, #477577 105.61%, #31496d 274.54%)',
    orange: '#f3672b',
    lightOrange: '#fc7b43',
    white: '#FFFFFF',
    gray: '#484f5c',
    lightGray: ' #D1D5DB',
    veryLightGray: ' #fafafa',
    black: '#111111',
    lightBlue: '#edf5f5',
    red: '#E74A3B',
};

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 375,
            md: 768,
            lg: 1440,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: '#477577',
            light: '#68c494',
            dark: '#0f3937',
            linear: 'linear-gradient(253.01deg, #68c494 -56.38%, #477577 105.61%, #31496d 274.54%)',
        },
        primaryAuth: {
            main: '#477577',
            light: '#68c494',
            dark: '#0f3937',
        },
        secondary: {
            main: '#f3672b',
            light: '#fc7b43',
        },
        secondaryAuth: {
            main: '#f3672b',
            light: '#fc7b43',
        },
        background: {
            main: '#ffffff',
            card: '#fafafa',
            badge: '#edf5f5',
            star: '#d9d9d9',
            starFilled: '#ffc531',
        },
        text: {
            black: '#111111',
            gray: '#484f5c',
            white: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.285,
        color: COLOR.black,

        h1: {
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: 1.1,
        },
        h2: {
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: 1.25,
        },
        subtitle: {
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: 1.333,
        },
        label: {
            fontWeight: 700,
            fontSize: '12px',
            lineHeight: 1.12,
        },
        text: {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: 1.428,
        },
        profileParameter: {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: 1.333,
        },
        profileData: {
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: 1.428,
        },
        badgeText: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.04em',
        },
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'standard' &&
                        ownerState.color === 'primary' && {
                            fontSize: 12,
                            lineHeight: 1.16,
                            fontWeight: 700,
                            marginBottom: '8px',
                            color: COLOR.black,
                        }),
                    ...(ownerState.variant === 'outlined' &&
                        ownerState.color === 'primary' && {
                            fontSize: 16,
                            lineHeight: 1.5,
                            fontWeight: 500,
                            top: '50%',
                            left: '20px',
                            transform: 'translate(0, -50%) scale(1)',
                            color: COLOR.black,

                            '&.Mui-focused': {
                                transform: 'translate(-10px, -30px) scale(0) ',
                            },
                            '&.MuiFormLabel-filled': {
                                transform: 'translate(-10px, -30px) scale(0)',
                            },
                        }),
                }),
            },
        },
        MuiInput: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'filter' &&
                        ownerState.color === 'primary' && {
                            width: '100%',
                            borderRadius: '16px',
                            outline: `1px solid ${COLOR.lightGray}`,
                            padding: '14px 18px',
                            border: 'none',
                            marginRight: '0 !important',

                            '& fieldset': {
                                outline: 'none',
                                border: 'none',
                            },
                            '&:hover': {
                                outline: `1px solid ${COLOR.lightGray}`,
                            },

                            '&.Mui-focused': {
                                outline: `2px solid ${COLOR.green}`,
                            },

                            '& .MuiInput-input': {
                                fontSize: 16,
                                lineHeight: 1.5,
                                color: COLOR.black,
                                padding: '0px',
                            },
                        }),
                    ...(ownerState.variant === 'primary' &&
                        ownerState.color === 'primary' && {
                            width: '100%',
                            borderRadius: '8px',
                            outline: `1px solid ${COLOR.lightGray}`,
                            padding: '14px 18px',
                            border: 'none',
                            marginRight: '0 !important',

                            '& fieldset': {
                                outline: 'none',
                                border: 'none',
                            },
                            '&:hover': {
                                outline: `1px solid ${COLOR.lightGray}`,
                            },

                            '&.Mui-focused': {
                                outline: `2px solid ${COLOR.green}`,
                            },

                            '& .MuiInput-input': {
                                fontSize: 14,
                                lineHeight: 1.285,
                                color: COLOR.black,
                                padding: '0px',
                            },
                            '&.Mui-error': {
                                outline: `2px solid ${COLOR.red}`,
                            },
                        }),
                }),
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.color === 'primary' && {
                        width: '100%',
                        borderRadius: '8px',
                        outline: `1px solid ${COLOR.lightGray}`,
                        padding: '14px 18px',
                        border: 'none',
                        marginRight: '0 !important',
                        background: COLOR.white,

                        '& fieldset': {
                            outline: 'none',
                            border: 'none',
                        },
                        '&:hover': {
                            outline: `1px solid ${COLOR.lightGray}`,
                        },

                        '&.Mui-focused': {
                            outline: `2px solid ${COLOR.green}`,
                        },

                        '& .MuiInputBase-input': {
                            fontSize: 14,
                            lineHeight: 1.285,
                            color: COLOR.black,
                            padding: '0px',
                        },
                    }),
                }),
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'outlined' &&
                        ownerState.color === 'secondary' && {
                            outline: `1px solid ${COLOR.lightGray}`,
                            border: 'none',
                            fontSize: '16px',
                            lineHeight: 1.5,
                            '& fieldset': {
                                outline: 'none',
                                border: 'none',
                            },
                            '&:hover': {
                                outline: `1px solid ${COLOR.lightGray}`,
                            },

                            '&.Mui-focused': {
                                outline: `2px solid ${COLOR.green}`,
                            },
                            '& .MuiSelect-select': {
                                padding: '14px 18px',
                            },
                        }),
                }),
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root.Mui-error': {
                        outline: `2px solid ${COLOR.red}`,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained' &&
                        ownerState.color === 'secondary' && {
                            backgroundColor: COLOR.lightOrange,
                            color: COLOR.white,
                            fontWeight: 600,
                            fontSize: 12,
                            lineHeight: 1.16,
                            textTransform: 'uppercase',
                            padding: '12px 24px',
                            borderRadius: '12px',
                            textAlign: 'center',

                            '&:hover': {
                                backgroundColor: COLOR.orange,
                            },
                            '&:focus': {
                                backgroundColor: COLOR.orange,
                                boxShadow: '0px 4px 8px rgba(17, 17, 17, 0.15)',
                            },
                        }),
                    ...(ownerState.variant === 'contained' &&
                        ownerState.color === 'secondaryAuth' && {
                            backgroundColor: COLOR.lightOrange,
                            color: COLOR.white,
                            fontWeight: 600,
                            fontSize: 12,
                            lineHeight: 1.16,
                            textTransform: 'uppercase',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            textAlign: 'center',

                            '&:hover': {
                                backgroundColor: COLOR.orange,
                            },
                            '&:focus': {
                                backgroundColor: COLOR.orange,
                                boxShadow: '0px 4px 8px rgba(17, 17, 17, 0.15)',
                            },
                        }),
                    ...(ownerState.variant === 'outlined' &&
                        ownerState.color === 'primary' && {
                            border: '1px solid rgba(71, 117, 119, 0.3)',
                            color: COLOR.green,
                            fontWeight: 600,
                            fontSize: 12,
                            lineHeight: 1.16,
                            textTransform: 'uppercase',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            textAlign: 'center',

                            '&:hover': {
                                backgroundColor: COLOR.darkGreen,
                                color: COLOR.white,
                            },
                            '&:focus': {
                                backgroundColor: COLOR.darkGreen,
                                boxShadow: '0px 4px 8px rgba(17, 17, 17, 0.15)',
                                color: COLOR.white,
                            },
                        }),
                    ...(ownerState.variant === 'outlined' &&
                        ownerState.color === 'primaryAuth' && {
                            border: '1px solid rgba(71, 117, 119, 0.3)',
                            color: COLOR.green,
                            fontWeight: 600,
                            fontSize: 12,
                            lineHeight: 1.16,
                            textTransform: 'uppercase',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            textAlign: 'center',

                            '&:hover': {
                                backgroundColor: COLOR.darkGreen,
                                color: COLOR.white,
                            },
                            '&:focus': {
                                backgroundColor: COLOR.darkGreen,
                                boxShadow: '0px 4px 8px rgba(17, 17, 17, 0.15)',
                                color: COLOR.white,
                            },
                        }),
                }),
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: 1.24,
                    color: 'text.black',
                    textTransform: 'capitalize',
                    borderRadius: '32px',
                    padding: '8px 16px',
                    minHeight: '0',
                    marginBottom: '20px',
                    marginRight: '20px',

                    '&.Mui-selected': {
                        backgroundColor: COLOR.green,
                        color: COLOR.white,
                    },
                },
            },
        },
        // MuiButtonBase: {
        //     styleOverrides: {
        //         root: {
        //             height: 'min-content',
        //         },
        //     },
        // },
    },
    spacing: 8,
});

export default theme;
