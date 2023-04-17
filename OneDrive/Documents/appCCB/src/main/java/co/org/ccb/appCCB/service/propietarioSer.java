package co.org.ccb.appCCB.service;

import java.util.List;
import co.org.ccb.appCCB.model.propietario;

public interface propietarioSer {

    public propietario save(propietario propietario);

    public propietario findById(Integer id);

    public List<propietario> findAll();

    public void delete (Integer id);

}
