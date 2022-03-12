package com.api.agviagem.models;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Cliente extends Pessoa implements Serializable {

	private static final long serialVersionUID = 4579446684297450847L;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cliente")
	private List<Passagem> passagem = new ArrayList<Passagem>();
	
	@NotBlank
	@Email
	@Column(nullable = false, unique= true ,length = 50)
	private String email;
	
	@NotBlank
	@Size(max=8)
	@Column(nullable = false, length = 8)
	private String password;
	
	@Column(nullable = false)
	private LocalDateTime dataCadastro;
	
	public Cliente() {
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocalDateTime getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(LocalDateTime dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

}
