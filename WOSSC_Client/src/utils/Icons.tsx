import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const getMaterialIcon = (name: string) => {
  return (props: any) =>
    <MaterialIcon name={name} {...props} />;
}

export const getMaterialCommunityIcon = (name: string) => {
  return (props: any) =>
    <MaterialCommunityIcon name={name} {...props} />;
}

export const getIonIcon = (name: string) => {
  return (props: any) =>
    <IonIcon name={name} {...props} />;
}