import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, SectionList} from 'react-native';

export default function App() {
  const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
          <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
  };

  return (
    <View>
      <SectionList contentContainerStyle={{padding: 10, marginVertical: 20}}
                   sections={datasource}
                   renderItem={renderItem}
                   renderSectionHeader={({section: {title, bgcolor}}) => (
                       <Text style={[styles.headerText, {backgroundColor: bgcolor}]}>
                         {title}
                       </Text>
                   )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const datasource = [
  {
    data:[
      {key: 'a'},
      {key: 'e'},
      {key: 'i'},
      {key: 'o'},
    ],
    title:"Vowels",
    bgcolor:"skyblue",
  },
  {
    data:[
      {key: 'b'},
      {key: 'c'},
      {key: 'd'},
      {key: 'f'},
      {key: 'g'},
      {key: 'h'},
      {key: 'j'},
      {key: 'k'},
      {key: 'l'},
      {key: 'm'},
      {key: 'n'},
      {key: 'q'},
      {key: 'r'},
    ],
    title:"Consonants",
    bgcolor:"khaki",
  }
];


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  opacityStyle: {
    borderWidth: 1,
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
