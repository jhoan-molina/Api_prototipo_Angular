package co.org.ccb.appCCB.service;

import java.util.List;

import co.org.ccb.appCCB.model.establecimiento;

public interface establecimientoSer {
    

    public establecimiento save(establecimiento establecimiento);

    public establecimiento findById(Integer id);

    public List<establecimiento> findAll();

    public void delete (Integer id);
}
