import { Component, inject } from '@angular/core';
import { EncryptionService } from '../../../services/encryption.service';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrl: './tvs.component.scss'
})
export class TVsComponent {
  encryptionService = inject(EncryptionService);
constructor(){
  console.log( this.encryptionService.decrypt("U2FsdGVkX199gqF8uv06G7gfR7SQnZ3hRBe+Gwg/6thuS7uQc0ByNhUav4omdsvROz85lwNGCbHy9QeTYqEW73hHqfRZ+w2q58EYVf2wQzk="));

}
}
