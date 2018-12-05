/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE ricetteBaseService PLEASE EDIT ../ricette.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Ricette } from '../../domain/test_db/ricette';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Ricette.service.ts
 */

/*
 * SCHEMA DB Ricette
 *
	{
		Ingredienti: {
			type: 'String',
			required : true
		},
		Nome: {
			type: 'String',
			required : true
		},
		Procedimento: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		Posseduta: {
			type: Schema.ObjectId,
			ref : "Ricette"
		},
	}
 *
 */
@Injectable()
export class RicetteBaseService {

    contextUrl: string = environment.endpoint + '/ricettes';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * RicetteService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Ricette): Observable<Ricette> {
        return this.http
            .post<Ricette>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * RicetteService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * RicetteService.findByPosseduta
    *   @description CRUD ACTION findByPosseduta
    *   @param Objectid key Id della risorsa Posseduta da cercare
    *
    */
    findByPosseduta(id: string): Observable<Ricette[]> {
        return this.http
            .get<Ricette[]>(this.contextUrl + '/findByPosseduta/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * RicetteService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id 
    *
    */
    get(id: string): Observable<Ricette> {
        return this.http
            .get<Ricette>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * RicetteService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Ricette[]> {
        return this.http
            .get<Ricette[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * RicetteService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Ricette): Observable<Ricette> {
        return this.http
            .post<Ricette>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}