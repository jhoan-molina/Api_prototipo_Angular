package co.org.ccb.appCCB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.org.ccb.appCCB.model.matricula;
import co.org.ccb.appCCB.repository.matriculaRepo;

@Service
public class matriculaSerImp implements matriculaSer{

    @Autowired
    private matriculaRepo matriculaRepo;

    @Override
    public matricula save(matricula matricula) {
        return matriculaRepo.save(matricula);
    }

    @Override
    public matricula findById(Integer id) {
        return matriculaRepo.findById(id).orElse(null);
    }

    @Override
    public List<matricula> findAll() {
        return matriculaRepo.findAll();
    }

    @Override
    public void delete(Integer id) {
        matriculaRepo.deleteById(id);
    }
    
}
