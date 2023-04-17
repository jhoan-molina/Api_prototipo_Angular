package co.org.ccb.appCCB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.org.ccb.appCCB.model.activos;
import co.org.ccb.appCCB.repository.activosRepo;

@Service
public class activosSerImp implements activosSer{

    @Autowired
    private activosRepo activosRepo;

    @Override
    public activos save(activos activos) {
        return activosRepo.save(activos);
    }

    @Override
    public activos findById(Integer id) {
        return activosRepo.findById(id).orElse(null);
    }

    @Override
    public List<activos> findAll() {
        return activosRepo.findAll();
    }

    @Override
    public void delete(Integer id) {
        activosRepo.deleteById(id);
    }
}
