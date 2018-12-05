import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { RicetteService } from '../../services/ricette.service';
// Import Models
import { Ricette } from '../../domain/test_db/ricette';

// START - USED SERVICES
/**
* RicetteService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* RicetteService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Ricette
 * @class RicetteListComponent
 */
@Component({
    selector: 'app-ricette-list',
    templateUrl: './ricette-list.component.html',
    styleUrls: ['./ricette-list.component.css']
})
export class RicetteListComponent implements OnInit {
    list: Ricette[];
    search: any = {};
    idSelected: string;
    constructor(
        private ricetteService: RicetteService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.ricetteService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Ricette to remove
     *
     * @param {string} id Id of the Ricette to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Ricette
     */
    deleteItem() {
        this.ricetteService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
