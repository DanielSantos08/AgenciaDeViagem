	package com.api.agviagem.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

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

import com.api.agviagem.models.Destinos;
import com.api.agviagem.repositories.DestinosRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/destinos")
public class DestinosController {

	@Autowired
	DestinosRepository destinosRepository;
	
	@GetMapping
	public List<Destinos> getAllDestinos() {
		return destinosRepository.findAll();
	}
	
	@GetMapping(path= "/{idDestino}")
	public Optional<Destinos> getAllDestinosById(@PathVariable Long idDestino) {
		return destinosRepository.findById(idDestino);
	}
	
	@PostMapping
	public Destinos saveDestino(@RequestBody @Valid Destinos destinos) {
	return destinosRepository.save(destinos);
	}
	
	@DeleteMapping(path= "/{idDestino}")
	public void deleteDestinoById(@PathVariable Long idDestino) {
		 destinosRepository.deleteById(idDestino);
	}
	
	@PutMapping(path= "/{idDestino}")
	public Destinos update(@PathVariable Long idDestino, @RequestBody @Valid Destinos destinos) {
		Destinos destinoAtual= destinosRepository.findById(idDestino).get();
		BeanUtils.copyProperties(destinos, destinoAtual, "idDestino");
		return destinosRepository.save(destinoAtual);
	}
}
