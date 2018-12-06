package com.test.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.test.db.test_db.service.UserService;
import com.test.db.test_db.entity.User;

//IMPORT RELATIONS
import com.test.db.test_db.entity.User;

public class UserBaseController {
    
    @Autowired
	UserService userService;



//CRUD METHODS

	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/Users/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public User get(@PathVariable Long id) {
		User obj = userService.get(id);
		
		
		
		return obj;
	}
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/Users/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public User update(@RequestBody User obj, @PathVariable("id") Long id) {
		User result = userService.update(obj, id);

	    
		
		return result;
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
