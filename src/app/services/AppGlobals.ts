import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppGlobals {
  readonly baseNodeUrl: string = 'https://project-server-node.herokuapp.com/';
}
