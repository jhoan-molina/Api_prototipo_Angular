package co.org.ccb.appCCB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.org.ccb.appCCB.model.propietario;
import co.org.ccb.appCCB.repository.propietarioRepo;

@Service
public class propietarioSerImp implements propietarioSer{

    @Autowired
    private propietarioRepo propietarioRepo;

    @Override
    public propietario save(propietario propietario) {
        return propietarioRepo.save(propietario);
    }

    @Override
    public propietario findById(Integer id) {
        return propietarioRepo.findById(id).orElse(null);
    }

    @Override
    public List<propietario> findAll() {
        return propietarioRepo.findAll();
    }

    @Override
    public void delete(Integer id) {
        propietarioRepo.deleteById(id);
    }
    
}
