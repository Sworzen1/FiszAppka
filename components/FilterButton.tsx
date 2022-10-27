import React, { FC, useCallback, useState } from 'react';
import { Pressable, Text } from 'native-base';

interface FilterButtonProps extends FilterCategory {
  handleFilterCategory: (filterCategory: string) => void;
}

export const FilterButton: FC<FilterButtonProps> = ({ ...props }) => {
  const { title, handleFilterCategory, value } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleIsChecked = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <Pressable
      onPress={() => {
        handleIsChecked();
        handleFilterCategory(value);
      }}
      borderColor={isChecked ? 'amber.500' : 'amber.300'}
      borderWidth={2}
      paddingX={'6'}
      paddingY={3}
      borderRadius={12}
      backgroundColor={isChecked ? 'amber.200' : 'transparent'}
    >
      <Text fontWeight={'bold'}>{title}</Text>
    </Pressable>
  );
};
