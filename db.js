  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyBgKzk3oekSRmzRwv0kqPd3KKXF8wGVuoU",
    authDomain: "tp1-aw.firebaseapp.com",
    databaseURL: "https://tp1-aw-default-rtdb.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
