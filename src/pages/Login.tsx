import React, { useState } from 'react';
import {loginUser} from '../api/api';
import { IonButtons, IonContent, IonPage, IonItem, IonInput, IonLabel, IonButton} from '@ionic/react';
import { useHistory } from 'react-router';
import './Login.css';

const Login: React.FC = () => {

  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()

    loginUser(username, password).then((res) => {
      console.log(res);
      if (res.status === 200){
        // Login successful. Redirect user to Home Page. 
        console.log(res.data);
        history.push({ pathname: '/home/tab2', state: { message: "Welcome to VINA!"}})
      }else{
        // Login not successful.
        console.log("Login not successful")
        // TODO: show error modal?
        
      }
    }).catch((err) => {
      // TODO: show error modal?
    
    })
  }

  return (
    <IonPage>

      <IonContent fullscreen>
      
      <div className="container">
      <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput value={password} type="password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>

          <IonButton expand="block" onClick={e => handleSubmit(e)}>Login</IonButton>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
