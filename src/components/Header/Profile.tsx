import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean | undefined;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Fernando</Text>
          <Text color="gray.300" fontSize="small">
            me@fernando.lol
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Fernando" />
    </Flex>
  );
}
