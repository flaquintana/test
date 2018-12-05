package com.test.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.test.db.test_db.service.RicetteService;
import com.test.db.test_db.entity.Ricette;

//IMPORT RELATIONS
import com.test.db.test_db.entity.User;

public class RicetteBaseController {
    
    @Autowired
	RicetteService ricetteService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
		@RequestMapping(value = "/ricettes", method = RequestMethod.POST, headers = "Accept=application/json")
	public Ricette insert(@RequestBody Ricette obj) {
		Ricette result = ricetteService.insert(obj);

	    
		
		return result;
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/ricettes/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") Long id) {
		ricetteService.delete(id);
	}
	

    //CRUD - FIND BY Posseduta
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/ricettes/findByPosseduta/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Ricette> findByPosseduta(@PathVariable("key") Long idPosseduta) {
		List<Ricette> list = ricetteService.findByPosseduta(idPosseduta);
		return list;
	}
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/ricettes/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Ricette get(@PathVariable Long id) {
		Ricette obj = ricetteService.get(id);
		
		
		
		return obj;
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/ricettes", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Ricette> getList() {
		return ricetteService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/ricettes/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Ricette update(@RequestBody Ricette obj, @PathVariable("id") Long id) {
		Ricette result = ricetteService.update(obj, id);

	    
		
		return result;
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
