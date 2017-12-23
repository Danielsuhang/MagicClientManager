// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA4pcmBiBK6_yEqSXGOQbKFornLdPHVpDs',
    authDomain: 'hackathon-6d518.firebaseapp.com',
    databaseURL: 'https://hackathon-6d518.firebaseio.com',
    projectId: 'hackathon-6d518',
    storageBucket: '',
    messagingSenderId: '897028880782'
  }
};


// <script src="https://www.gstatic.com/firebasejs/4.7.0/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyA4pcmBiBK6_yEqSXGOQbKFornLdPHVpDs",
//     authDomain: "hackathon-6d518.firebaseapp.com",
//     databaseURL: "https://hackathon-6d518.firebaseio.com",
//     projectId: "hackathon-6d518",
//     storageBucket: "",
//     messagingSenderId: "897028880782"
//   };
//   firebase.initializeApp(config);
// </script>