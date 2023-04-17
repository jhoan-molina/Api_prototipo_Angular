package co.org.ccb.appCCB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.org.ccb.appCCB.model.tipo_persona;
import co.org.ccb.appCCB.repository.tipo_personaRepo;

@Service
public class tipo_personaSerImp implements tipo_personaSer{


    @Autowired
    private tipo_personaRepo tipo_personaRepo;

    @Override
    public List<tipo_persona> findAll() {
        return tipo_personaRepo.findAll();
    }
    
}
