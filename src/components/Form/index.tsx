import { Flex, FormControl, FormLabel } from "@chakra-ui/react";
import { Button } from "./Button";
import { Input } from "./Input";


export function Form(){
    return(
        <Flex w="100vw" h="100vh" align="center" justify="center">
            <Flex 
                as="form"
                w="100%"
                maxWidth="360"
                bg="gray.800"
                p="8"
                borderRadius="8"
                flexDirection="column"
            >
                <FormControl>
                    <FormLabel color="gray.100">E-mail</FormLabel>
                    <Input/>
                    <FormLabel color="gray.100">Senha</FormLabel>
                    <Input/>
                </FormControl>
                <Button type="submit" mt="12">
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}