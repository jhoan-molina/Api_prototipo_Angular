package co.org.ccb.appCCB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.org.ccb.appCCB.model.tipo_id;
import co.org.ccb.appCCB.repository.tipo_idRepo;

@Service
public class tipo_idSerImp implements tipo_idSer{

    @Autowired
    private tipo_idRepo tipo_idRepo;

    @Override
    public List<tipo_id> findAll() {
        return tipo_idRepo.findAll();
    }
    
}
