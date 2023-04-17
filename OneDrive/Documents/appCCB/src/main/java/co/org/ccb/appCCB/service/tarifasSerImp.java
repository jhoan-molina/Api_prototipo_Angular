package co.org.ccb.appCCB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.org.ccb.appCCB.model.tarifas;
import co.org.ccb.appCCB.repository.tarifasRepo;

@Service
public class tarifasSerImp implements tarifasSer{

    @Autowired
    private tarifasRepo tarifasRepo;

    @Override
    public List<tarifas> findAll() {
        return tarifasRepo.findAll();
    }
    
}
