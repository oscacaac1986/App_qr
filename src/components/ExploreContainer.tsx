import { IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import './ExploreContainer.css';

interface ContainerProps { }

const [captData,setcapData]=useState('');
const []=useState('');
const []=useState('');

const generateCode =()=>{
  BarcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE,captData)
}

const ExploreContainer: React.FC<ContainerProps> = () => {

  return (
    <IonItem>
      <IonLabel>Ingrese Datos para Generar QR</IonLabel>
      <IonInput onIonChange={e => setcapData(e.detail.value!)}></IonInput>
    </IonItem>
  );
};

export default ExploreContainer;
