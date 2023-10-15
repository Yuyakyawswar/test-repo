import { Injectable } from '@angular/core';

export class AppService {

  constructor() { }

  getMessage(): string{
    return 'Hello App Service'
  }
}
