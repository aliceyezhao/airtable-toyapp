import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface State {
  records: Array<any>;
}

interface Props {
}

export default class App extends Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appLhYbwWFbNm1P58/Test?api_key=keyPAZ4KvgztKf5Kv')
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ records: data.records });
    }).catch(err => {
      // Error :(
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>Taken from Airtable</Text>
        {this.state.records.map(record => <Card key={record.id} {...record.fields} /> )}
      </View>
    );
  } 
}

const Card = ({ name, boolean, imageURL }) => (
  <View>
    <Image source={{uri: imageURL[0].url}}
           style={{width: 100, height: 100}}/>
    <Text>{boolean ? name : 'false'}</Text>
  </View> 
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ED8885',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
