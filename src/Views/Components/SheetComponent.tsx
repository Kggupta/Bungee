import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button, TextInput, Card} from 'react-native-paper';
import { getSheetIdFromUrl } from '../../Utilities/SheetUtils';
import { testSheet } from '../../Utilities/UseAPI';
import { saveSheetId } from '../../Utilities/UseAsyncStorage';

const SheetComponent = () => {
  const [text, setText] = React.useState("");
  const [success, setTest] = React.useState('pending');

  const runTests = async () => {
    setTest('pending');

    try {
      const didConnect = await testSheet(getSheetIdFromUrl(text));
      setTest(didConnect ? 'check-circle' : 'cancel')
    } catch (e) {
      setTest('error');
    }
  }

  const saveSheet = async () => {
    await runTests();
    if (success != 'check-circle') return;
    await saveSheetId(getSheetIdFromUrl(text));
    setTest('save');
  }
  return (
    <View style={styles.card}>
      <Card>
        <Card.Title title="Google Sheet" subtitle="Set the sheet link" />
        <Card.Content>
          <TextInput autoComplete="off" autoCorrect={false} label="Link" onChangeText={text => setText(text)}/>
          <View style={styles.buttons}>
            <Icon style={styles.test} name={success} tvParallaxProperties={false}/>
            <Button icon="content-save" onPress={saveSheet}>Save</Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    elevation: 3,
    borderRadius: 6
  },
  buttons: {
    alignSelf: 'flex-end',
    padding: 10,
    flexDirection: 'row'
  },
  test: {
    padding: 5, 
    alignSelf: 'flex-end' 
  }
})
  

export default SheetComponent;