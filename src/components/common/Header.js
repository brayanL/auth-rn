//Import libraries for making a component
import React from 'react';
import { View, Text } from 'react-native';

//Make a component
const Header = (props) => {
  //destructuring styles for get textStyle
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f3eabf',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, //for ios
    elevation: 2, //for android
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component available to other parts of the App
export { Header };
