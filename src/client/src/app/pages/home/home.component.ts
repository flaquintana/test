// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES
/**
* UserService.UserApi
*	@param String param1 vhggfdgd
*	@returns String
*
*/
// END - USED SERVICES

/**
 * Home Component
 */
@Component({
    selector: 'app-home',
    templateUrl : './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(
        private location: Location
        ) {

    }
}
