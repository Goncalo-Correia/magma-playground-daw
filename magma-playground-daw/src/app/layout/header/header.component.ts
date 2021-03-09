import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {


  constructor(private modalService: NgbModal) {}

  showNewProjectModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  showEditProjectModal(content: any) {
    
  }
  
  showOpenProjectModal() {
    
  }
  
  showSaveProjectModal() {
    
  }

  closeModal() {
    this.modalService.dismissAll();
  }
  
  saveNewProject() {
    
  }
}
