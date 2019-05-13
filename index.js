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


const imageDisplayedWidth = updateSize(1417,1890,1000,600).imageWidth;
const imageDisplayedHeight = updateSize(1417,1890,1000,600).imageHeight;

export default class Hello360 extends React.Component {
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

{/*        <View style={styles.greetingBox} >
          <Text style={styles.greeting}>
            Welcome master
            {`Count:${this.state.count}`}
          </Text>
        </View>
        <VrButton
          onClick= {this.updateCount}
          style={styles.greetingBox}
        >
   
          <Text style={styles.greeting}>
            Press
          </Text>
  
        </VrButton>*/}
        <Image 
          source={asset('artCha1.jpg')}
          style={ styles.oeuvre} 
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
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

AppRegistry.registerComponent('Hello360', () => Hello360);
