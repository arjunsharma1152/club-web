<p align="center">
<h1 align="center">
	<a href="https://youtemy.tech"><img height=100 src="src/component/logo.png" alt="YouTemy"/></a>
</h1>
</p>

<p align="center">
<a href="https://github.com/arjunsharma1152/club-web/graphs/contributors">
        	<img src="https://img.shields.io/github/contributors/arjunsharma1152/club-web?color=red" alt="Contributors">
	</a>
	</p>
	
# 🚀 Technologies and Frameworks

Photopedia is built with the following technologies:

- [ReactJS](https://reactjs.org/)
- [Javascript](https://www.javascript.com)
- [Firebase](https://firebase.google.com)
- [Scss](https://sass-lang.com)

#  📷 Snapshots of the Hosted Projects

>  ![](images/page1.PNG)

>  ![](images/page2.PNG)

>  ![](images/page3.PNG)

>  ![](images/page4.PNG)

## Starting the Dev Server

- Clone the repository to your local system. `https://github.com/arjunsharma1152/club-web`

- Firebase API Setup:

  1.  Go to [Firebase Console](https://console.firebase.google.com) and follow the steps to create a new Firebase project.
  2.  Select `</>` and you will recieve a firebasConfig object with the first paramter as API key. Copy it, which will look something like: 
  	
	```js
              cosnt firebaseConfig = {
              apiKey: "process.env.REACT_APP_FIREBASE",
              authDomain: "AUTH_DOMAIN",
              projectId: "PROJECT_ID",
              storageBucket: "STORAGE_BUCKET",
              messagingSenderId: "*************",
              appId: "******************************",
              measurementId: "*************"
            };
      ```
   3.  Paste and save it. 
   
- In the root folder and enter the following commands in the CLI

          npm i or yarn
          npm start or yarn start
