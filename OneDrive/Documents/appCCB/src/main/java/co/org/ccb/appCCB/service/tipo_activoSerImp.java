package co.org.ccb.appCCB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.org.ccb.appCCB.model.tipo_activo;
import co.org.ccb.appCCB.repository.tipo_activoRepo;

@Service
public class tipo_activoSerImp implements tipo_activoSer{

    @Autowired 
    private tipo_activoRepo tipo_activoRepo;

    @Override
    public List<tipo_activo> findAll() {
        return tipo_activoRepo.findAll();
    }
    
}
