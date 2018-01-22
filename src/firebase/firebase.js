
  const database = firebase.database();

  database.ref().set({
      name: 'Sheary',
      age: 22,
      isSingle: true,
      location: {
          city: 'Perth',
          country: 'Australia'
      }
  });

  database.ref('location/city').set('Vancouver');
  database.ref('location/country').set('Canada');

  database.ref('attributes').set({
      height: 178,
      weight: 69
  });
  // remember to import firebase from app.js

