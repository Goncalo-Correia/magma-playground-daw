import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from 'src/app/api/models/project.model';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private modalService: NgbModal) {}

  showNewProjectModal(content: any) {
    this.modalService.open(content);
  }

  showEditProjectModal(content: any) {
    this.modalService.open(content);
  }
  
  showOpenProjectModal(content: any) {
    this.modalService.open(content);
  }
  
  showSaveProjectModal(content: any) {
    this.modalService.open(content);
  }

  closeModal() {
    this.modalService.dismissAll();
  }
  
  createProject() {
    console.log(this.project);
    this.closeModal();
  }

  updateProject() {
    console.log(this.project);
    this.closeModal();
  }

  openProject() {

    this.closeModal();
  }

  saveProject() {
  
    this.closeModal();
  }
}
