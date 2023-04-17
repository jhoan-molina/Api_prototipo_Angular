package co.org.ccb.appCCB.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import co.org.ccb.appCCB.model.activos;
import co.org.ccb.appCCB.service.activosSer;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/activos")
public class activosCtrl {
    
    @Autowired
    private activosSer activosSer;

    @GetMapping("/list-activos")
    public ResponseEntity<List<activos>> listarActivos(){
        return new ResponseEntity<>(activosSer.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<activos> obtenerActivos(@PathVariable Integer id){
        return new ResponseEntity<>(activosSer.findById(id), HttpStatus.OK);
    }

    @PostMapping("/new")
    public ResponseEntity<activos> registrarActivos(@RequestBody activos activos){
        return new ResponseEntity<>(activosSer.save(activos), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<activos> actualizarActivos(@PathVariable Integer id, @RequestBody activos activos){
        activos activoEncontrado = activosSer.findById(id);

        if(activoEncontrado == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        try{
            activoEncontrado.setActivo_uvt(activos.getActivo_uvt());
            activoEncontrado.setActivo_pesos(activos.getActivo_pesos());
            return new ResponseEntity<>(activosSer.save(activoEncontrado), HttpStatus.CREATED);
        }catch(DataAccessException e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> eliminarActivos(@PathVariable Integer id){
        activosSer.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
