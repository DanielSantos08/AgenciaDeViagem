package com.api.agviagem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.agviagem.models.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
