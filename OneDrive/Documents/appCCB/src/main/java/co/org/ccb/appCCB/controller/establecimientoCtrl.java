package co.org.ccb.appCCB.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import co.org.ccb.appCCB.model.actividad_economica;
import co.org.ccb.appCCB.model.activos;
import co.org.ccb.appCCB.model.establecimiento;
import co.org.ccb.appCCB.model.matricula;
import co.org.ccb.appCCB.service.actividad_EconomicaSer;
import co.org.ccb.appCCB.service.activosSer;
import co.org.ccb.appCCB.service.establecimientoSer;
import co.org.ccb.appCCB.service.matriculaSer;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/establecimiento")
public class establecimientoCtrl {
    
    @Autowired
    private establecimientoSer establecimientoSer;

    @Autowired
    private activosSer activosSer;

    @Autowired
    private actividad_EconomicaSer actividad_EconomicaSer;

    @Autowired
    private matriculaSer matriculaSer;

    @GetMapping("/list-establecimiento")
    public ResponseEntity<List<establecimiento>> listarEstablecimiento(){
        return new ResponseEntity<>(establecimientoSer.findAll(), HttpStatus.OK);
    }

    @GetMapping("/actividad_economica")
    public ResponseEntity<List<actividad_economica>> listarActividadEconomica(){
        return new ResponseEntity<>(actividad_EconomicaSer.findAll(), HttpStatus.OK);
    }

    @GetMapping("/matricula")
    public ResponseEntity<List<matricula>> listarMatricula(){
        return new ResponseEntity<>(matriculaSer.findAll(), HttpStatus.OK);
    }

    @GetMapping("/activos")
    public ResponseEntity<List<activos>> listarActivos(){
        return new ResponseEntity<>(activosSer.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<establecimiento> obtenerEstablecimiento(@PathVariable Integer id){
        return new ResponseEntity<>(establecimientoSer.findById(id), HttpStatus.OK);
    }

    @PostMapping("/new")
    public ResponseEntity<establecimiento> registrarEstablecimiento(@RequestBody establecimiento establecimiento){
        return new ResponseEntity<>(establecimientoSer.save(establecimiento), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<establecimiento> actualizarEstablecimiento(@PathVariable Integer id, @RequestBody establecimiento establecimiento){
        establecimiento establecimientoEncontrado = establecimientoSer.findById(id);

        if(establecimientoEncontrado == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        try{
            establecimientoEncontrado.setActividad_economica(establecimiento.getActividad_economica());
            establecimientoEncontrado.setNombre(establecimiento.getNombre());
            establecimientoEncontrado.setDireccion(establecimiento.getDireccion());
            establecimientoEncontrado.setActivos(establecimiento.getActivos());
            establecimientoEncontrado.setMatricula(establecimiento.getMatricula());
            establecimientoEncontrado.setFecha_matricula(establecimiento.getFecha_matricula());
            establecimientoEncontrado.setEstado(establecimiento.getEstado());
            return new ResponseEntity<>(establecimientoSer.save(establecimientoEncontrado), HttpStatus.CREATED);
        }catch(DataAccessException e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> eliminarEstablecimiento(@PathVariable Integer id){
        establecimientoSer.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
