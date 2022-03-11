package com.api.agviagem.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Destinos implements Serializable {
	
	private static final long serialVersionUID = 4421647172477097046L;


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idDestino;
	
	@Column(nullable = false, length = 60)
	private String city;
	
	@Column(nullable = false, length = 50)
	private String state;
	
	@Column(nullable = false, length = 50)
	private String country;
	
	@JsonIgnore
	@OneToMany(mappedBy = "destino")
	private List<Passagem> passagem = new ArrayList<Passagem>();

	public Destinos() {
	}

	public Long getIdDestino() {
		return idDestino;
	}

	public void setIdDestino(Long idDestino) {
		this.idDestino = idDestino;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

}