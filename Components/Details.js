import { useContext, useEffect } from "react";
import { Text } from "react-native";
import {
  Box,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Stack,
  Heading,
} from "native-base";
import { CommentContext } from "../context";
import { getCommtDetails , clearDetails} from "../Actions/actions";

export const Details =({ route })=> {

  const { state, dispatch } = useContext(CommentContext);
  console.log(route);
  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await getCommtDetails(route.params.id));
    };
    resolveAction();
    return () => {
      dispatch(clearDetails());
    };
  }, []);
  if (state.details.id)
    return (
      <NativeBaseProvider >
        <Box alignItems="center" style={{marginTop:30}}>
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                {/* <Image
                  source={{
                    uri: state.details.image,
                  }}
                  alt="image"
                /> */}
              </AspectRatio>
              <Center
                bg="violet.500"
                _dark={{
                  bg: "violet.400",
                }}
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "xs",
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5"
              >
                PHOTO
              </Center>
            </Box>

            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {state.details.body}.
                </Heading>

                <Text
                  fontSize="xs"
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                   <Heading style={{color:"#54106a"}}>Name: </Heading>{state.details.name}
                </Text>
                <Text
                  fontSize="xs"
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                   <Heading style={{color:"#54106a"}}>Email: </Heading>{state.details.email}
                </Text>
              </Stack>
            
            </Stack>
          </Box>
        </Box>
      </NativeBaseProvider>
    )
  return <Text>Loading...</Text>
}

export default Details;