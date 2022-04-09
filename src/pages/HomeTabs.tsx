import { Redirect, Route } from 'react-router-dom';
import { IonButtons,IonIcon, IonLabel, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import './HomeTabs.css';

import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const HomeTabs: React.FC = () => {

  return (
      
    
      <IonTabs>
        <IonRouterOutlet>
         <Route path="/home/tab1" component={Tab1} exact/>
      <Route path="/home/tab2" component={Tab2} exact/>
      <Route path="/home/tab3" component={Tab3} exact/>
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
  
  );
};

export default HomeTabs;
