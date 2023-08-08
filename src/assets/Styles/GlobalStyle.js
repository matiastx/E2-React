import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto+Condensed:wght@300&family=Roboto+Flex:opsz,wght@8..144,300;8..144,400;8..144,500;8..144,600;8..144,700&display=swap);

:root {
  /* colors */
  --bgprimario: #f6f6f6;
  --GrisClaro: #d9d9d9;
  --CelesteClaro: #0099f6;
  --Celeste: #026cb2;
  --AzulClaro: #043f6e;
  --Azul: #1e50ff;
  --AzulOscuro: #07122b;
  --Lila: #833ab4;
  --VerdeAgua: #00d5ff;
  --ShadowBG: #ffffff0d;
  --ShadowColor: #1f268780;
  /* Textos */
  --Blanco: #ffffff;
  --Gris: #272d37;
  --Gris2: #626161;
  --Negro: #02050e;
  --Home: #e4f7ff;


  /* Fuentes */
  /* Logo: font-family: 'Quicksand', sans-serif; */
  /* Texto Normal: font-family: 'Roboto Condensed', sans-serif; */
  /* Texto Ligero: font-family: 'Roboto Flex', sans-serif; */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  font-family: 'Roboto Condensed', sans-serif;
}

body {
  margin-top: 65px;
  background-color: var(--bgprimario);
}
`