import React from 'react';
import { Box } from '../Box';
import { theme } from '../../utils/theme';
import { FilterInput } from './Filter.styled';

export const Filter = ({ value, changeFilter }) => {
  return (
    <Box
      mb={4}
      color={theme.colors.text}
      fontSize={theme.typography.title}
      fontStyle="italic"
      as="label"
    >
      Find contacts by Name:
      <FilterInput type="text" value={value} onChange={changeFilter} />
    </Box>
  );
};
