// const express = require('express');


export default class AppController {
  static getHomepage(req, res) {
    // console.log('Testing AppController')
    res.set('Content-Type', 'text/plain');
    res.status(200).end('Hello Holberton School!');
  }
}
