import { Redirect, Route, useRouteMatch } from 'react-router-dom';
import { IonButtons,IonIcon, IonLabel, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import './Home.css';
import { ellipse, square, triangle } from 'ionicons/icons';

import HomeTabs from './HomeTabs';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';


const Home: React.FC = () => {

  const name  = "Home";

  const { url, path } = useRouteMatch();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
       

        
        <IonTabs>
        <IonRouterOutlet>
        <Route exact path={`/home/tab1`}>
        <Tab1 />
      </Route>
      <Route exact path={`/home/tab2`}>
        <Tab2 />
      </Route>
      <Route path={`/home/tab3`}>
        <Tab3 />
      </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/home/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/home/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>


      </IonContent>

      
    </IonPage>
  );
};

export default Home;
