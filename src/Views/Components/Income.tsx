import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { Icon } from 'react-native-elements';
import { Card, DarkTheme, Text } from 'react-native-paper';
import ItemCard from '../../Types/ItemCard';
import { asDollar } from '../../Utilities/SheetUtils';
import { updateIncome } from '../../Utilities/UseAPI';
import { getTermKey } from '../../Utilities/UseAsyncStorage';

const Income = (props : ItemCard) => {
  const [value, setValue] = React.useState<number | null>(0);
  const [itemValue, setItemValue] = React.useState(props.item.value)
  const updateValue = async (asPos : boolean) => {
    if (!value) return;
    const term = await getTermKey();
    const newValue = asPos ? (itemValue + value) : 
    (itemValue - value);
    try {
      await updateIncome(props.item.name, term, newValue);
      setItemValue(newValue);
    } catch (e) {
      console.log(e);
    }                      
  }

  const updatePos = async () => updateValue(true);
  

  const updateNeg = async () => updateValue(false);
  
  return (
    <View style={styles.card} key={props.item.name}>
      <Card theme={DarkTheme}>
        <Text style={styles.nameText}>
            {props.item.name} - {asDollar(itemValue)}
        </Text>

          <View style={styles.iconList}>
            <CurrencyInput 
              value={value}
              prefix="$"
              delimiter=','
              separator='.'
              precision={2}
              onChangeValue={setValue}
              style={styles.amountEntry}/>
            <Icon disabled={!value || value<=0} style={styles.icon} name="add" tvParallaxProperties={false} onPress={updatePos}/>
            <Icon disabled={!value || value<=0} style={styles.icon} name="remove" tvParallaxProperties={false} onPress={updateNeg}/>
          </View>

      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingBottom: 2,
    borderRadius: 2,
  },
  nameText: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    color: 'white'
  },
  amountEntry: {
    height: 25,
    paddingHorizontal: 10,
    paddingTop: 3,
    flexDirection:'row',
    textAlign: 'left',
    color: 'white'
  },
  icon: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5
  },
  iconList: {
    alignSelf:'flex-end',
    flexDirection: 'row'
  }

})
  

export default Income;