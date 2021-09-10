import { AlertsComponent } from './../alerts/alerts.component';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private mostraAlert(message: String, type: String){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertsComponent)

    bsModalRef.content.type = type
    bsModalRef.content.message = message
  }

  alertDanger(message: String){
    this.mostraAlert(message, 'danger')
  }

  alertSuccess(message: String){
    this.mostraAlert(message, 'success')
  }

  alertInfo(message: String){
    this.mostraAlert(message, 'info')
  }

}
