package co.org.ccb.appCCB.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import co.org.ccb.appCCB.model.usuario;

public interface usuarioRepo extends JpaRepository<usuario, Integer>{
    Optional<usuario> findOneByEmail(String email);
}
