package com.api.agviagem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.agviagem.models.Cliente;
import com.api.agviagem.repositories.ClienteRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/clientes")
public class ClienteController {
	
	@Autowired
	ClienteRepository clienteRepository;
	
	@GetMapping
	public List<Cliente> getAllCliente() {
		return clienteRepository.findAll();
	}
	
	@GetMapping(path= "/{id}")
	public Optional<Cliente> getClientebyId(@PathVariable Long id){
		return clienteRepository.findById(id);
	}
	
	@PostMapping
	public Cliente saveClient(@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
	}
	
	@DeleteMapping(path= "/{id}")
	public void deleteCliente(@PathVariable Long id) {
		clienteRepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public Cliente update(@PathVariable Long id, @RequestBody Cliente cliente) {
		Cliente clienteAtual= clienteRepository.findById(id).get();
		BeanUtils.copyProperties(cliente, clienteAtual, "id");
		return clienteRepository.save(clienteAtual);
	}
}