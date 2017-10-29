import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
//import MainScreenNavigator from "../ChatScreen/index.js";
import SideBar from "../SideBar";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
//    Chat: { screen: MainScreenNavigator },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
