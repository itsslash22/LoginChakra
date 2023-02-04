import { chakra } from "@chakra-ui/react";

export const Button = chakra("button",  {
    baseStyle: {
        width: "100%",
        height: "50px",
        bg: "gray.700",
        borderRadius: "md",
        variant: "outline",
         hover: {
            background: "pink.500",
            color: "gray.900"
         }
    }
})