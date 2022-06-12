import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DarkTheme, Button, Provider as PaperProvider, Divider, Title } from 'react-native-paper';
import Term from '../Types/Term';
import { getTerm } from '../Utilities/UseAPI';
import { getTermKey } from '../Utilities/UseAsyncStorage';
import Expense from './Components/Expense';
import Income from './Components/Income';
import Loading from './Loading';

const Data = () => {
  const [term, setTerm] = React.useState<Term>();
  const [termTitle, setTitle] = React.useState("No Term Selected");
  const loadTerm = async () => {
    const title = await getTermKey();
    setTerm(await getTerm(title));
    setTitle(title);
  }
  React.useEffect(() => {
    loadTerm();
  }, []);

  return (
    term ? (
    <ScrollView>
      <Title style={styles.header} onPress={loadTerm}>
        EXPENSES - {termTitle}
      </Title>
      <Divider />
      {term && term.expenses.map(item =>  <Expense key={item.name} item={item}/>) }
      <Title style={styles.header}>
        INCOME - {termTitle}
      </Title>
      <Divider />
      {term && term.income.map(item => <Income key={item.name} item={item}/>)}
    </ScrollView>) : 
    (<Loading />)
  
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingHorizontal:10,
    flexDirection: 'row',
  }
})
  

export default Data;