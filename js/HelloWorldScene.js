"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import { ViroScene, ViroText, Viro360Image, ViroButton } from "react-viro";

export default class HelloWorldScene extends Component {
  constructor() {
    super();

    this.state = {}; // Set initial state here
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require("./res/image2.jpg")} />
        <ViroButton
          source={require("./res/image.png")}
          gazeSource={require("./res/image3.png")}
          tapSource={require("./res/image3.png")}
          position={[1, 3, -5]}
          height={2}
          width={3}
          onTap={this._onButtonTap}
          onGaze={this._onButtonGaze}
        />
      </ViroScene>
    );
  }
  _onButtonGaze() {
    this.setState({
      buttonStateTag: "onGaze",
    });
  }
  _onButtonTap() {
    this.setState({
      buttonStateTag: "onTap",
    });
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 60,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

module.exports = HelloWorldScene;
