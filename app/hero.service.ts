import { Injectable } from "@angular/core";
import { Heroes } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    return HEROES;
  }
}
