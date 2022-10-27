import { useCallback, useMemo, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Box, Center, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '../components/Card';
import { FilterButton } from '../components/FilterButton';
import Fiszki from '../Fiszki.json';

const keyExtractorFlascards = (item: Flashcard): string => `${item.id}`;
const keyExtractorFilters = (item: FilterCategory): string => `${item.value}`;

const FILTERS_DATA = [
  { title: 'JavaScript', value: 'javascript' },
  { title: 'React', value: 'react' },
  { title: 'Angular', value: 'angular' },
];

export const FlashcardsScreen = (): JSX.Element => {
  const [filterCategories, setFilterCategories] = useState<string[]>([]);

  const handleFilterCategory = useCallback(
    (filterCategory: string): void => {
      if (filterCategories?.includes(filterCategory)) {
        const newFilterscategories = [...filterCategories].filter(
          (item) => item !== filterCategory
        );
        setFilterCategories(newFilterscategories);
      } else {
        setFilterCategories([...filterCategories, filterCategory]);
      }
    },
    [filterCategories]
  );

  const newFilterData = useMemo((): Flashcard[] => {
    //@ts-ignore
    return filterCategories?.length === 0
      ? Fiszki
      : Fiszki?.filter((item) =>
          filterCategories.includes(item?.category.toLowerCase())
        );
  }, [filterCategories]);

  const renderFlashcard = useCallback(
    ({ item }: { item: Flashcard }): JSX.Element => {
      return (
        <Center>
          <Card {...item} />
        </Center>
      );
    },
    []
  );

  const renderFilterCategory = useCallback(
    ({ item }: { item: FilterCategory }): JSX.Element => {
      return (
        <FilterButton {...item} handleFilterCategory={handleFilterCategory} />
      );
    },
    [handleFilterCategory]
  );

  return (
    <SafeAreaView edges={['top']}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text px={4} fontSize={'2xl'} fontWeight="bold">
              Flashcards
            </Text>
            <FlatList
              data={FILTERS_DATA}
              renderItem={renderFilterCategory}
              keyExtractor={keyExtractorFilters}
              horizontal
              contentContainerStyle={style.filtersListContent}
              ItemSeparatorComponent={() => <Box width={2} />}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        data={newFilterData}
        renderItem={renderFlashcard}
        keyExtractor={keyExtractorFlascards}
        ItemSeparatorComponent={() => <Box height={3} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.flashcardsListContent}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  filtersListContent: {
    paddingHorizontal: 16,
    marginVertical: 24,
  },
  flashcardsListContent: { paddingBottom: 16 },
});
