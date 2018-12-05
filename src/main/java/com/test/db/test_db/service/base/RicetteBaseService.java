package com.test.db.test_db.service.base;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Service;

import com.test.db.test_db.entity.Ricette;
import com.test.db.test_db.service.RicetteService;

//IMPORT RELATIONS
import com.test.db.test_db.entity.User;

@Service
public class RicetteBaseService {

	private static NamedParameterJdbcTemplate jdbcTemplate;
	
		@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public Ricette insert(Ricette obj) {
		Long id = jdbcTemplate.queryForObject("select max(_id) from `ricette`", new MapSqlParameterSource(), Long.class);
		obj.set_id(id == null ? 1 : id + 1);
		String sql = "INSERT INTO `ricette` (`_id`, `Ingredienti`,`Nome`,`Procedimento`,`Posseduta`) VALUES (:id,:Ingredienti,:Nome,:Procedimento, :Posseduta )";
			SqlParameterSource parameters = new MapSqlParameterSource()
		    .addValue("id", obj.get_id())
			.addValue("Ingredienti", obj.getIngredienti())
			.addValue("Nome", obj.getNome())
			.addValue("Procedimento", obj.getProcedimento())
			.addValue("Posseduta", obj.getPosseduta());
		
		jdbcTemplate.update(sql, parameters);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(Long id) {
		String sql = "DELETE FROM `Ricette` WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
		
		jdbcTemplate.update(sql, parameters);
	}

    	
    //CRUD - FIND BY Posseduta
    	
	public List<Ricette> findByPosseduta(Long idPosseduta) {
		
		String sql = "select * from `Ricette` WHERE `Posseduta` = :idPosseduta";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
		.addValue("idPosseduta", idPosseduta);
	    
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Ricette.class));
	}
    	
    //CRUD - GET ONE
    	
	public Ricette get(Long id) {
	    
		String sql = "select * from `Ricette` where `_id` = :id";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
	    
	    return (Ricette) jdbcTemplate.queryForObject(sql, parameters, new BeanPropertyRowMapper(Ricette.class));
	}


    	
        	
    //CRUD - GET LIST
    	
	public List<Ricette> getList() {
	    
		String sql = "select * from `Ricette`";
		
	    SqlParameterSource parameters = new MapSqlParameterSource();
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Ricette.class));
	    
	    
	}

    	
    //CRUD - EDIT
    	
	public Ricette update(Ricette obj, Long id) {

		String sql = "UPDATE `Ricette` SET `Ingredienti` = :Ingredienti,`Nome` = :Nome,`Procedimento` = :Procedimento , `Posseduta` = :Posseduta  WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id)
			.addValue("Ingredienti", obj.getIngredienti())
			.addValue("Nome", obj.getNome())
			.addValue("Procedimento", obj.getProcedimento())
			.addValue("Posseduta", obj.getPosseduta());
		jdbcTemplate.update(sql, parameters);
	    return obj;
	}
	
    	
    
    
    
    

    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in RicetteService.java
     */
    

}
