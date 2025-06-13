# FRONT END CALCULATOR

## TABLE OF CONTENTS
1. [WHAT_DOES_THE_APPLICATION_DO](#what-does-the-application-do)
2. [HOW_TO_START_THE_APPLICATION](#how-to-start-the-application)
3. [CSS_STYLING](#css-styling)
4. [REFERENCES](#references)

## WHAT DOES THE APPLICATION DO

The application is an frontend interest rate calculator and a normal calculator using react.js.

`command line interface`/`terminal`

```
npx create-react-app@latest client
```
## HOW TO START THE APPLICATION

Both calculator applications can be started in the `command line interface/terminal` using `npm start`.

## CSS STYLING

The applications use CSS `cascading stylesheets` together with bootstrap and google fonts for styling purposes.

### BOOTSTRAP

**INSTALLATION**
**Command line Interface/Terminal**

```
npm install react-bootstrap bootstrap
```
`index.js`
```
import 'bootstrap/dist/css/bootstrap.min.css';
```
### GOOGLE FONTS
**INTEREST CALCULATOR**

`public/index.html`
```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet">
```
**_CSS_**
```
//Roboto Flex
  font-family: "Roboto Flex", sans-serif;
//Nota Sans
  font-family: "Noto Sans", sans-serif;
//Lato
font-family: "Lato", sans-serif;
//Volkhov
font-family: "Volkhov", serif;
```
**CALCULATOR**

`public/index.html`
```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Orbitron:wght@400..900&family=Share+Tech+Mono&family=Zen+Dots&display=swap" rel="stylesheet">
```
**_CSS_**
```
//"Orbitron"
font-family: "Orbitron", sans-serif;
//Quantico
font-family: "Quantico", sans-serif;
//share-tech-mono-regular
 font-family: "Share Tech Mono", monospace;
//Audiowide
  font-family: "Audiowide", sans-serif;
```
## REFERENCES
- https://react.dev/reference/react/useState
- https://fonts.google.com/?preview.layout=grid
- https://react-bootstrap.netlify.app/
- https://react.dev/learn/your-first-component
