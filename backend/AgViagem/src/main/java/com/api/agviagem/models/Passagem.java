package com.api.agviagem.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Passagem implements Serializable {

	private static final long serialVersionUID = -4445707008872731462L;

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long idPassagem;
	
	@Column(nullable = false)
	private String formaPagamento;
	
	@ManyToOne
	@JoinColumn(name= "idCliente", nullable = false)
	private Cliente cliente;
	
	@ManyToOne
	@JoinColumn(name= "idDestino", nullable = false)
	private Destinos destino;

	public Passagem() {
	}

	public Long getIdPassagem() {
		return idPassagem;
	}

	public void setIdPassagem(Long idPassagem) {
		this.idPassagem = idPassagem;
	}
	
	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Destinos getDestino() {
		return destino;
	}

	public void setDestino(Destinos destino) {
		this.destino = destino;
	}

	public String getFormaPagamento() {
		return formaPagamento;
	}

	public void setFormaPagamento(String formaPagamento) {
		this.formaPagamento = formaPagamento;
	}

}
