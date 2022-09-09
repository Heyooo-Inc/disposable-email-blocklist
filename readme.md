# disposable-email-blocklist

A NodeJS implement for the [disposable email domains](https://github.com/disposable-email-domains/disposable-email-domains#nodejs) module.

## Install

```shell
npm install disposable-email-blocklist
```

## Usage

```js
import blocklist from 'disposable-email-blocklist'

console.log(blocklist.includes('gmail.com'))        // false
console.log(blocklist.includes('10minutemail.net')) // true
```
