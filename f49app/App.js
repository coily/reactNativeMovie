import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
Switch
} from 'react-native';
import Btn from './src/Test';
import Music from './src/Music';
import axios from 'axios';


//express前端IP
const IP = 'http://192.168.2.109:4444'

export default class App extends Component<Props> {
    
    
    constructor(p){
        super(p);
        
        this.state = {
            list: [],
            test: '1'
        }
    }
    
    render() {
        return (
          <View style={styles.container}>
            {
                this.state.list.map((music) => {
                    return <Music music={music} />
                })
            }
          </View>
        );
    }
    
    //初始化音乐列表
    componentWillMount(){
        axios.get(IP + '/getTabData', {params: {}}).then((msg) => {
            this.setState({
                list: msg.data,
                test: msg.data[0]
            })
        })
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
