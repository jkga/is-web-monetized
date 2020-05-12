# :money_with_wings: is-web-monetized
A very simple tool for checking if web monetization is enabled on a certain website

[![JavaScript Style Guide](https://img.shields.io/badge/Code%20Style-Standard%20-green?style=for-the-badge&logo=javascript)](https://github.com/standard/standard)

## What is Web Monetization ?
**Web Monetization** is an **API** that allows websites to request **small payments** from users facilitated by the browser and the user's Web Monetization provider.

[![webmonetization.org](https://user-images.githubusercontent.com/10413754/81672858-5a001880-947d-11ea-8721-1b0396db9b35.png)](webmonetization.org)

###  Official Website: https://webmonetization.org/   

### Specifications: https://webmonetization.org/specification.html


## Installation
```javascript
  npm install is-web-monetized
```

## USAGE
You can check if the website uses the Web Monetization API without going to the website.   
> Node module MUST be installed globally   
```javascript
  npm install is-web-monetized -g
```
In your terminal, run `monetized [URL]`
```bash
  monetized example.com 
```
or using as a dependency 
```javascript
  const { isWebMonetized } from 'is-web-monetized'
  const url = 'example.com'
  // return a promise
  isWebMonetized(url).then(obj => {
    /*
      {
        monetized <boolean>,
        url <url>,
        content <wallet>,
      }
    */
    console.log(obj)
  }).catch(err => console.log(err))
```