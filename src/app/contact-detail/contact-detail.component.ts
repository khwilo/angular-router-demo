import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: any;

  constructor(
    @Inject(ContactService) private contactService: ContactService,
    @Inject(ActivatedRoute) private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        console.log(params.get('id'));
        this.contactService.getContact(
          params.get('id')
        ).subscribe(
          foundContact => {
            console.log(foundContact);
            this.contact = foundContact;
          }
        );
      }
    );
  }

}
