import React, { Component } from 'react';
import {
  Button
} from 'react-native';


export default class Btn extends Component<Props> {
    
    constructor(p){
        super(p);
    }
    
    render() {
        return (
            <Button title={ this.props.name } color="#737373"/>
        );
    }
}

