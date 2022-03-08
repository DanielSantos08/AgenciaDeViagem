package com.api.agviagem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.agviagem.models.Passagem;

public interface PassagemRepository extends JpaRepository<Passagem, Long> {

}
