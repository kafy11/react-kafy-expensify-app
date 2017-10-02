import * as firebase from 'firebase'; //import all exports into a variable named firebase

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATA_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

/*
database.ref()
    .on('value',(snapshot) => {   
        const val = snapshot.val();
        console.log(val);
    });

database.ref().set({
    name: 'Kayo',
    age: 23,
    isSingle: false,
    location: {
        city: 'São Paulo',
        country: 'Brazil'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed', e);
});

database.ref('age').set(27);
database.ref('location/city').set('New York');

database.ref().update({
    job: 'Developer',
    'location/city': 'Boston'
});
*/