import React, { Component } from 'react';
import {
  Text,View,Image
} from 'react-native';


const SRC_IP = 'http://192.168.2.109:7777/'

export default class Music extends Component<Props> {
    
    constructor(p){
        super(p);
    }
    
    render() {
        let music = this.props.music;
    
        return (
    
            <View>
                <Text>歌曲：{ music.name }</Text>
                <Image style={{width: 200, height: 200}} source={{uri: SRC_IP + music.headImg}}></Image>
            </View>
            
        );
    }
}

