import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html',
})
export class TaskListPage {
  tasks: {name: string}[] = [
    {name: 'タスク１'},
    {name: 'タスク２'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    if( localStorage.getItem('tasks') ) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskListPage');
  }

}
