import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default class SwipeableRow extends Component {
  swipeableRow;

  updateRef = (ref) => {
    this.swipeableRow = ref;
  };

  close = () => {
    this.swipeableRow?.close();
  };

  render() {
    const { children } = this.props;

    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderRightActions={(progress, _dragAnimatedValue) =>
          this.props.rightSideActions(progress, _dragAnimatedValue)
        }
      >
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  actionText: {
    color: "white",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 10,
  },
  rightAction: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
