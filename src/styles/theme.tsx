import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    config: {
        initialColorMode: "ligth",
        udeSystemColorModa: false
    },
    
    
    colors: {
        gray: {
            900: '#181823',
            800: '#1F2029',
            700: '#353646',
            600: '#484063',
            500: '#616480',
            400: '#797D9A',
            300: '#9699B0',
            200: '#B3B5C6',
            100: '#D1D2DC',
            50: '#EEEEF2'
        },
        fonts: {
            heading: 'Roboto',
            body: 'Roboto'
        }
    }
})