"use client"
import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

interface GroupChatListItemProps {
  event_name: string;
  event_creator: string;
  new_link: string;
}

const GroupChatListItem: React.FC<GroupChatListItemProps> = ({
  event_name,
  event_creator,
  new_link
}) => {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      _hover={{ cursor: 'pointer', transform: 'scale(1.01)' }}
      transition="all 0.2s"
    >
      <Flex justify="space-between" align="center">
        <Box>
          <Text fontWeight="bold" fontSize="lg">
            {event_name}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {event_creator}
          </Text>
        </Box>
        <ChevronRightIcon boxSize={6} color="gray.400" />
      </Flex>
    </Box>
  );
};

export default GroupChatListItem;
