import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { Icon } from 'react-native-elements';
import { Card, Text } from 'react-native-paper';
import ItemCard from '../../Types/ItemCard';
import { asDollar } from '../../Utilities/SheetUtils';
import { updateExpense } from '../../Utilities/UseAPI';
import { getTermKey } from '../../Utilities/UseAsyncStorage';

const Expense = (props : ItemCard) => {
  const [value, setValue] = React.useState<number | null>(0);
  const [itemValue, setItemValue] = React.useState(props.item.value)
  const updateValue = async (asPos : boolean) => {
    if (!value) return;
    const term = await getTermKey();
    const newValue = asPos ? (itemValue + value) : 
    (itemValue - value);
    try {
      await updateExpense(props.item.name, term, newValue);
      setItemValue(newValue);
    } catch (e) {
      console.log(e);
    }                      
  }

  const updatePos = async () => updateValue(true);
  

  const updateNeg = async () => updateValue(false);
  
  return (
    <View style={styles.card} key={props.item.name}>
      <Card>
        <Text style={styles.nameText}>
            {props.item.name} - {asDollar(itemValue)}
        </Text>

        <CurrencyInput 
          value={value}
          prefix="$"
          delimiter=','
          separator='.'
          precision={2}
          onChangeValue={setValue}
          style={styles.amountEntry}/>

          <View style={styles.iconList}>
            <Icon raised disabled={!value || value<=0} style={styles.icon} name="add" tvParallaxProperties={false} onPress={updatePos}/>
            <Icon raised disabled={!value || value<=0} style={styles.icon} name="remove" tvParallaxProperties={false} onPress={updateNeg}/>
          </View>

      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingBottom: 2,
    borderRadius: 2
  },
  nameText: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
  },
  amountEntry: {
    height: 25,
    paddingHorizontal: 10,
    paddingTop: 3,
    flexDirection:'row',
    alignSelf: 'flex-start'
  },
  icon: {
    flexDirection: 'row',
  },
  iconList: {
    alignSelf:'flex-end',
    flexDirection: 'row'
  }

})
  

export default Expense;