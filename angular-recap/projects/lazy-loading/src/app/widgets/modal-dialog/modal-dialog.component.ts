import { Component, Input, OnInit } from '@angular/core';

declare var bootstrap: any

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html'
})
export class ModalDialogComponent implements OnInit {

  modalForm: any

  @Input()
  modalId: any

  @Input()
  title: any

  ngOnInit(): void {
    this.modalForm = new bootstrap.Modal(`#${this.modalId}`)
  }

  open() {
    this.modalForm.show()
  }

  hide() {
    this.modalForm.hide()
  }

}
