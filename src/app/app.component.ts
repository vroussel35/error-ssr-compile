import { Component, OnInit, VERSION } from '@angular/core';

import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  objectId = '';

  constructor() {}

  ngOnInit() {

    firebase.initializeApp({
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: ''
    });

    firebase.firestore().collection('homepages_public').doc('32a7hGeVfgwJ0v2eEBw3').get().then(result => {
            this.objectId = result.id;
          });

  }
}
