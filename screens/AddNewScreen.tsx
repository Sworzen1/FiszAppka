import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Box, Input, Select, Text, TextArea } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AddNewScreen = (): JSX.Element => {
  const [answer, setAnswer] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');

  const isAddButtonDisabled = useMemo(
    (): boolean =>
      answer === '' || question === '' || category === '' || difficulty === '',
    [answer, question, category]
  );

  return (
    <SafeAreaView edges={['top']} style={style.container}>
      <ScrollView contentContainerStyle={style.scrollViewContent}>
        <Box flex={1} px={4}>
          <Text fontSize={'2xl'} fontWeight="bold">
            Add new flashcard
          </Text>
          <Input
            _focus={style.focus}
            mt={4}
            onChangeText={setQuestion}
            placeholder={'Question'}
            size="xl"
            value={question}
          />
          <TextArea
            _focus={style.focus}
            mt={4}
            onChangeText={setAnswer}
            numberOfLines={6}
            placeholder={'Answer'}
            size="xl"
            value={answer}
          />
          <Select
            mt={4}
            placeholder={'Category'}
            size="xl"
            selectedValue={category}
            onValueChange={setCategory}
          >
            <Select.Item shadow={1} label="JavaScript" value="javascript" />
            <Select.Item shadow={1} label="React" value="react" />
            <Select.Item shadow={1} label="Angular" value="angular" />
          </Select>
          <Select
            mt={4}
            placeholder={'Difficulty'}
            size="xl"
            selectedValue={difficulty}
            onValueChange={setDifficulty}
          >
            <Select.Item shadow={1} label="Easy" value="easy" />
            <Select.Item shadow={1} label="Medium" value="medium" />
            <Select.Item shadow={1} label="Hard" value="hard" />
          </Select>
        </Box>
        <Box p={4}>
          {/* TODO Add onSumbit function */}
          <Button
            colorScheme={'amber'}
            isDisabled={isAddButtonDisabled}
            onPress={() => alert('Add new flashcard action')}
          >
            Add
          </Button>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: { flex: 1 },
  scrollViewContent: { flexGrow: 1 },
  focus: { backgroundColor: 'amber.100', borderColor: 'amber.500' },
});
