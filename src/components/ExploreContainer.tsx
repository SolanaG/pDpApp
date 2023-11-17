import "./ExploreContainer.css";
import React, { useEffect, useState } from "react";
import {
  IonIcon,
  IonInput,
  IonGrid,
  IonRow,
  IonText,
  IonImg,
  IonCol,
} from "@ionic/react";
import { body, people, boat, sync, diamond, storefront } from "ionicons/icons";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [precioDolar, setPrecioDolar] = useState(0);
  const getDolarBlue = async () => {
    try {
      // const res = await fetch("https://dolarapi.com/v1/dolares/blue");
      const res = await fetch("https://api.bluelytics.com.ar/v2/latest");
      const dolar = await res.json();
      setPrecioDolar(dolar.blue.value_sell);

      // Llamar getClassValue después de obtener el valor de precioDolar
      getClassValue(dolar.blue.value_sell);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDolarBlue();
  }, []);

  // precios en pesos
  const [clasePesos, setClasePesos] = useState(0);
  const [guardeXDia, setGuardeXDia] = useState(0);
  const [trajeEnPesos, setTrajeEnPesos] = useState(0);
  const [guardeXMes, setGuardeXMes] = useState(0);
  const [rentalGoya, setRentalGoya] = useState(0);
  const [rentalUsado, setRentalUsado] = useState(0);
  // precios en dolares
  const [claseDolar, setClaseDolar] = useState(20);
  const [guardexDiaDolar, setGuardexDiaDolar] = useState(5);
  const [trajeDolar, setTrajeDolar] = useState(15);
  const [guardeXMesDolar, setGuardeXMesDolar] = useState(50);
  const [rentalGoyaDolar, setRentalGoyaDolar] = useState(50);
  const [rentalUsadoDolar, setRentalUsadoDolar] = useState(20);
  // Dolar/PESO
  const [pesos, setPesos] = useState(null);
  const [dolares, setDolares] = useState(null);
  const [dolarFlag, setDolarFlag] = useState(false);
  const getClassValue = (precioDolar: number) => {
    const claseEnPesos = precioDolar * claseDolar;
    const guardeXDiaEnPesos = precioDolar * guardexDiaDolar;
    const trajeEnPesos = precioDolar * trajeDolar;
    const guardeXMesEnPesos = precioDolar * guardeXMesDolar;
    const rentalGoya = precioDolar * rentalGoyaDolar;
    const rentalUsado = precioDolar * rentalUsadoDolar;

    setRentalGoya(rentalGoya);
    setRentalUsado(rentalUsado);
    setClasePesos(claseEnPesos);
    setGuardeXDia(guardeXDiaEnPesos);
    setTrajeEnPesos(trajeEnPesos);
    setGuardeXMes(guardeXMesEnPesos);
  };

  const calculateValues = () => {
    console.log(dolarFlag);
    if (dolarFlag) {
      const valorEnPesos = (dolares || 1) * precioDolar;
      setPesos(valorEnPesos);
      setDolares(dolares);
      setDolarFlag(false);
      return;
    }
    const valorEnDolares = (pesos || 1) / precioDolar;

    console.log(valorEnDolares);

    setDolares(valorEnDolares);
  };

  return (
    <div id="container">
      <div id="background-div">
        <div id="header-logo"></div>
        {/* <IonImg
          id="pdp-logo"
          src="/src/assets/images/PDP-logo.jpg"
          alt="logo pdp"
        ></IonImg> */}
        <IonText>
          <h1 id="title">TEMPORADA 2023-2024</h1>
        </IonText>
        <IonText>
          <h6>DÓLAR HOY $ {precioDolar} </h6>
        </IonText>
        <IonGrid
          id="grid"
          fixed={true}
          style={{ marginTop: "25px", marginBottom: "30px" }}
        >
          <div id="grid-background">
            <IonRow
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <IonCol>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <IonIcon
                    aria-label="Favorite"
                    icon={people}
                    slot="start"
                    size="large"
                  ></IonIcon>
                  <span style={{ marginLeft: "10px" }}>Clase de Windsurf</span>
                </div>
              </IonCol>
              <IonCol size="auto">{claseDolar} USD</IonCol>
              <IonCol size="4" style={{ fontWeight: "bold" }}>
                {clasePesos} ARS
              </IonCol>
            </IonRow>
            <IonRow
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <IonCol>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IonIcon
                    aria-label="Favorite"
                    icon={storefront}
                    slot="start"
                    size="large"
                  ></IonIcon>
                  <span style={{ marginLeft: "10px" }}>Guardería por Día</span>
                </div>
              </IonCol>
              <IonCol size="auto">{guardexDiaDolar} USD</IonCol>
              <IonCol size="4" style={{ fontWeight: "bold" }}>
                {guardeXDia} ARS
              </IonCol>
            </IonRow>
            <IonRow
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <IonCol>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IonIcon
                    aria-label="Favorite"
                    icon={diamond}
                    slot="start"
                    size="large"
                  ></IonIcon>
                  <span style={{ marginLeft: "10px" }}>Rental Equipo Goya</span>
                </div>
              </IonCol>
              <IonCol size="auto">{rentalGoyaDolar} USD</IonCol>
              <IonCol size="4" style={{ fontWeight: "bold" }}>
                {rentalGoya} ARS
              </IonCol>
            </IonRow>
            <IonRow
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <IonCol>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IonIcon
                    aria-label="Favorite"
                    icon={boat}
                    slot="start"
                    size="large"
                  ></IonIcon>
                  <span style={{ marginLeft: "10px" }}>
                    Rental Equipo Usado
                  </span>
                </div>
              </IonCol>
              <IonCol size="auto">{rentalUsadoDolar} USD</IonCol>
              <IonCol size="4" style={{ fontWeight: "bold" }}>
                {rentalUsado} ARS
              </IonCol>
            </IonRow>
            <IonRow
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <IonCol>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IonIcon
                    aria-hidden="true"
                    icon={body}
                    slot="start"
                    size="large"
                  ></IonIcon>
                  <span style={{ marginLeft: "10px" }}>Alquiler de Traje</span>
                </div>
              </IonCol>
              <IonCol size="auto">{trajeDolar} USD</IonCol>
              <IonCol size="4" style={{ fontWeight: "bold" }}>
                {trajeEnPesos} ARS
              </IonCol>
            </IonRow>
          </div>
        </IonGrid>

        <div id="conversor-container">
          <IonInput
            color="light"
            label="USD"
            type="number"
            placeholder="0"
            labelPlacement="fixed"
            value={dolares}
            onIonInput={(e) => {
              setDolares(e.detail.value!);
              const valorEnPesos = Math.round(
                parseInt(e.detail.value!) * precioDolar
              );
              console.log(valorEnPesos);
              setPesos(valorEnPesos.toFixed(2));
            }}
          ></IonInput>
          <IonInput
            color="light"
            label="PESOS"
            type="number"
            placeholder="0"
            labelPlacement="fixed"
            value={pesos}
            onIonInput={(e) => {
              setPesos(e.detail.value!);
              const valorEnDolares = parseInt(e.detail.value!) / precioDolar;
              setDolares(valorEnDolares.toFixed(2));
            }}
          ></IonInput>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
