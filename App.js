import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { SignedOut } from './app/Router';
export default class App extends Component {
  render() {
    return (
      <SignedOut />
    )
  }
}