const Rebase = require('re-base')
const firebase = require('firebase/app')

const config = {
    apiKey: 'AIzaSyCEDmlHUYXxX_opAVjELCbhZIMzc1DYznI',
    authDomain: 'portfolio-demo-xumes.firebaseapp.com',
    databaseURL: 'https://portfolio-demo-xumes.firebaseio.com',
    projectId: 'portfolio-demo-xumes',
    storageBucket: 'portfolio-demo-xumes.appspot.com',
    messagingSenderId: '805251828188'
  };
  // firebase.initializeApp(config)

  require('firebase/database')
  // require('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  // export const storage = app.storage()
  export default base