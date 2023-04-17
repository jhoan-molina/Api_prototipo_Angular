package co.org.ccb.appCCB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.org.ccb.appCCB.model.actividad_economica;
import co.org.ccb.appCCB.repository.actividad_economicaRepo;

@Service
public class actividad_EconomicaSerImp implements actividad_EconomicaSer{

    @Autowired 
    private actividad_economicaRepo actividad_economicaRepo;

    @Override
    public List<actividad_economica> findAll() {
        return actividad_economicaRepo.findAll();
    }
    
}
