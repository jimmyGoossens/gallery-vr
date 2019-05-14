import React from 'react';
import {
  asset,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
} from 'react-360';


const updateSize = (imgWidth,imgHeight, maxSurfaceWidth, maxSurfaceHeight) => {
  let imgSize = { imageWidth:0, imageHeight:0}

  while ((imgWidth > maxSurfaceWidth )|| (imgHeight > maxSurfaceHeight)) {

    if (!((imgWidth > maxSurfaceWidth )&& (imgHeight > maxSurfaceHeight))) {
        imgSize.imageWidth = dividor(imgWidth)
        imgSize.imageHeight = dividor(imgHeight)
    }
    imgWidth = dividor(imgWidth)
    imgHeight = dividor(imgHeight)
  }

  return imgSize
}


const dividor= (number) =>  {
  let newNumber = number
      newNumber = number/2
  return Math.round(newNumber)
}


const imageDisplayedWidth = updateSize(1890,1417,1000,600).imageWidth;
const imageDisplayedHeight = updateSize(1890,1417,1000,600).imageHeight;

export default class SurfaceSix extends React.Component {
  state = {
    count:0
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View style={styles.panel}>

        <Image 
          source={asset('artCha4bis.jpg')}
          style={ styles.oeuvre} 
        />

      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface

    backgroundColor: 'rgba(0, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  oeuvre: {
    width:imageDisplayedWidth,
    height:imageDisplayedHeight,
  }
});