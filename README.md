# 3CX Linux Eletron webapp

Electron webapp for 3CX on Linux

## Installation

Clone this repository

```sh
git clone git@github.com:kaipee/3cx-linux-electron.git
```

Edit `main.js` and insert your 3CX Webclient address

```js
win.loadURL('https://<yourclientaddress>/webclient')
```

**Example**

```js
win.loadURL('https://test.3cx.uk:2096/webclient')
```

## Usage

```sh
electron ./main.js
```