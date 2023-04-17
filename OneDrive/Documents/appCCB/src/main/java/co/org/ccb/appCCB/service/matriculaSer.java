package co.org.ccb.appCCB.service;

import java.util.List;

import co.org.ccb.appCCB.model.matricula;

public interface matriculaSer {
    
    public matricula save(matricula matricula);

    public matricula findById(Integer id);

    public List<matricula> findAll();

    public void delete (Integer id);
}
