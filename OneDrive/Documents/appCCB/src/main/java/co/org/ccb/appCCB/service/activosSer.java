package co.org.ccb.appCCB.service;

import java.util.List;

import co.org.ccb.appCCB.model.activos;

public interface activosSer {

    public List<activos> findAll();

    public activos save(activos activos);

    public activos findById(Integer id);

    public void delete (Integer id);
}
