// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { RicetteService } from '../../services/ricette.service';
import { UserService } from '../../services/user.service';
// Import Models
import { Ricette } from '../../domain/test_db/ricette';
import { User } from '../../domain/test_db/user';

// START - USED SERVICES
/**
* RicetteService.create
*	@description CRUD ACTION create
*
* RicetteService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* RicetteService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Ricette
 */
@Component({
    selector: 'app-ricette-edit',
    templateUrl: 'ricette-edit.component.html',
    styleUrls: ['ricette-edit.component.css']
})
export class RicetteEditComponent implements OnInit {
    item: Ricette;
    listPosseduta: User[];
    model: Ricette;
    formValid: Boolean;

    constructor(
    private ricetteService: RicetteService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Ricette();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.ricetteService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.userService.list().subscribe(list => this.listPosseduta = list);
        });
    }


    /**
     * Save Ricette
     *
     * @param {boolean} formValid Form validity check
     * @param Ricette item Ricette to save
     */
    save(formValid: boolean, item: Ricette): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.ricetteService.update(item).subscribe(data => this.goBack());
            } else {
                this.ricetteService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



