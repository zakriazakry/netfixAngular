import { HttpHeaders } from "@angular/common/http";
import { EncryptionService } from "../services/encryption.service";


const encryptionService = new EncryptionService;
export const appHttpHeader =  new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + encryptionService.decrypt(localStorage.getItem("token") ?? '')
  })
