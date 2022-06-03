import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button, TextInput, Card } from 'react-native-paper';
import { getSheetIdFromUrl } from '../../Utilities/SheetUtils';
import { testSheet } from '../../Utilities/UseAPI';
import { saveSheetId } from '../../Utilities/UseAsyncStorage';

const SheetComponent = () => {
  const [text, setText] = React.useState("");
  const [success, setTest] = React.useState('pending');

  return (
    <View style={styles.card}>
      <Card>
        <Card.Title title="Google Sheet" subtitle="Set the sheet link" />
        <Card.Content>
          <TextInput autoComplete="off" autoCorrect={false} label="Link" onChangeText={text => setText(text)}/>
          <View style={styles.buttons}>
            <Button icon="history">Test</Button>
            <Button icon="content-save" disabled={success != 'check-circle'}>Save</Button>
            <Icon style={styles.test} name={success} tvParallaxProperties={false}/>
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
    alignSelf: 'center',
    padding: 10,
    flexDirection: 'row'
  },
  test: {
    padding: 5, 
    alignSelf: 'flex-end' 
  }
})
  

export default SheetComponent;