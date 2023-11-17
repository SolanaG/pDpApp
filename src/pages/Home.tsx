import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>acá no se que podemos poner</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>
        <div id="main-container">
          {/* <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader> */}
          <ExploreContainer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
