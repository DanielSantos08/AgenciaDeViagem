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

import com.api.agviagem.models.Passagem;
import com.api.agviagem.repositories.PassagemRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/passagem")
public class PassagemController {

	@Autowired
	PassagemRepository passagemRepository;
	
	@GetMapping
	public List<Passagem> findAll() {
		return passagemRepository.findAll();
	}
	@GetMapping(path= "/{idPassagem}")
	public Optional<Passagem> getAllPassagemById(@PathVariable Long idPassagem) {
		return passagemRepository.findById(idPassagem);
	}
	@PostMapping
	public Passagem savePassagem(@RequestBody Passagem passagem) {
		return passagemRepository.save(passagem);
	}
	
	@DeleteMapping(path= "/{idPassagem}")
	public void deletePassagemById(@PathVariable Long idPassagem) {
		 passagemRepository.deleteById(idPassagem);
	}
	
	@PutMapping(path= "/{idPassagem}")
	public Passagem update(@PathVariable Long idPassagem, @RequestBody Passagem passagem) {
		Passagem passagemAtual= passagemRepository.findById(idPassagem).get();
		BeanUtils.copyProperties(passagem, passagemAtual, "idPassagem");
		return passagemRepository.save(passagemAtual);
	}
}
