import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Fernando</Text>
        <Text color="gray.300" fontSize="small">
          me@fernando.lol
        </Text>
      </Box>

      <Avatar size="md" name="Fernando" />
    </Flex>
  );
}
