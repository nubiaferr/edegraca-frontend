import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input() message: string
  @Input() type: string = 'success'

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.modal.hide()
  }

}
