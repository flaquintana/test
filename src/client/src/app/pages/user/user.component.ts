import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { UserService } from '../../services/user.service';
// Import Models
import { User } from '../../domain/test_db/user';

// START - USED SERVICES
/**
* UserService.create
*	@description CRUD ACTION create
*
* UserService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* UserService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* UserService.list
*	@description CRUD ACTION list
*
* UserService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component shows a list of User
 * @class UserComponent
 */
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    list: User[];
    search: any = {};
    idSelected: string;
    constructor(
        private userService: UserService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.userService.list().subscribe(list => this.list = list);
    }

    /**
     * Select User to remove
     *
     * @param {string} id Id of the User to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected User
     */
    deleteItem() {
        this.userService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
