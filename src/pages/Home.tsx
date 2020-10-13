import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';




const Home: React.FC = () => {

  const [captData,setcapData]=useState('');

  const generateCode =()=>{
    BarcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE,captData)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonLabel>Ingrese Datos para Generar QR</IonLabel>
      <IonInput onIonChange={e => setcapData(e.detail.value!)}></IonInput>
      <IonButton onClick={generateCode}>Generar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
