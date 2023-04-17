package co.org.ccb.appCCB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.org.ccb.appCCB.model.establecimiento;
import co.org.ccb.appCCB.repository.establecimientoRepo;

@Service
public class establecimientoSerImp implements establecimientoSer{

    @Autowired
    private establecimientoRepo establecimientoRepo;

    @Override
    public establecimiento save(establecimiento establecimiento) {
        return establecimientoRepo.save(establecimiento);
    }

    @Override
    public establecimiento findById(Integer id) {
        return establecimientoRepo.findById(id).orElse(null);
    }

    @Override
    public List<establecimiento> findAll() {
        return establecimientoRepo.findAll();
    }

    @Override
    public void delete(Integer id) {
        establecimientoRepo.deleteById(id);
    }
    
}
