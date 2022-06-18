import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Card, Menu, List, DarkTheme} from 'react-native-paper';
import Term from '../../Types/Term';
import { getTerms } from '../../Utilities/UseAPI';
import { getTermKey, saveTerm } from '../../Utilities/UseAsyncStorage';

const PickTerm = () => {
  const [term, setTerm] = React.useState("Select Term");
  const [allTerms, setTerms] = React.useState<Term[]>([]);
  const [visible, setVisible] = React.useState(false);

  const openMenu = async () => setVisible(true);
  const closeMenu = () => setVisible(false);

  React.useEffect(() => {
    const populate = async () => {
      setTerms(await getTerms());
      setTerm(await getTermKey());
    }
    populate();
  },[])
  return (
    <View style={styles.card}>
      <Card theme={DarkTheme}>
        <Card.Title titleStyle={styles.text} subtitleStyle={styles.text} 
                    title="Choose Term" subtitle="Select current term" />
        <Card.Content>
            <Menu
                visible={visible}
                style={styles.menu}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu}>{term}</Button>}>
                    {allTerms.map(term => {
                        return (<Menu.Item style={styles.item} onPress={async () => {
                            saveTerm(term.term)
                            setTerm(term.term);
                            closeMenu();
                        }} title={term.term} key={term.term}/>)
                    })}
            </Menu>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    elevation: 3,
    borderRadius: 6,
  },
  menu: {
    position:'absolute',
    right:'10%',
    left:'10%' ,
    color: 'white'
  },
  item: {
      width:'100%',
      padding: 10,
  },
  text: {
    color: 'white'
  }
})
  

export default PickTerm;