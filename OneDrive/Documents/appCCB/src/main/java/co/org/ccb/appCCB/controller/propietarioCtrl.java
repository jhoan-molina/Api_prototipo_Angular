package co.org.ccb.appCCB.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import co.org.ccb.appCCB.model.*;
import co.org.ccb.appCCB.service.propietarioSer;
import co.org.ccb.appCCB.service.tipo_idSer;
import co.org.ccb.appCCB.service.tipo_personaSer;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/propietario")
public class propietarioCtrl {
    
    @Autowired
    private propietarioSer propietarioSer;

    @Autowired
    private tipo_idSer tipo_idSer;

    @Autowired
    private tipo_personaSer tipo_personaSer;

    @GetMapping("/list")
    public ResponseEntity<List<propietario>> listarPropietario(){
        return new ResponseEntity<>(propietarioSer.findAll(), HttpStatus.OK);
    }

    @GetMapping("/tipo_id")
    public ResponseEntity<List<tipo_id>> listarTipoId(){
        return new ResponseEntity<>(tipo_idSer.findAll(), HttpStatus.OK);
    }

    @GetMapping("/tipo_persona")
    public ResponseEntity<List<tipo_persona>> listarTipoPersona(){
        return new ResponseEntity<>(tipo_personaSer.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<propietario> obtenerPropietario(@PathVariable Integer id){
        return new ResponseEntity<>(propietarioSer.findById(id), HttpStatus.OK);
    }

    @PostMapping("/new")
    public ResponseEntity<propietario> registrarPropietario(@RequestBody propietario propietario){
        return new ResponseEntity<>(propietarioSer.save(propietario), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<propietario> actualizarPropietario(@PathVariable Integer id, @RequestBody propietario propietario){
        propietario propietarioEncontrado = propietarioSer.findById(id);

        if(propietarioEncontrado == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        try{
            propietarioEncontrado.setTipo_id(propietario.getTipo_id());
            propietarioEncontrado.setTipo_persona(propietario.getTipo_persona());
            propietarioEncontrado.setNombre(propietario.getNombre());
            propietarioEncontrado.setApellido(propietario.getApellido());
            propietarioEncontrado.setDireccion(propietario.getDireccion());
            propietarioEncontrado.setEmail(propietario.getEmail());
            propietarioEncontrado.setFecha_registro(propietario.getFecha_registro());
            propietarioEncontrado.setEstado(propietario.getEstado());
            return new ResponseEntity<>(propietarioSer.save(propietarioEncontrado), HttpStatus.CREATED);
        }catch(DataAccessException e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> eliminarProducto(@PathVariable Integer id){
        propietarioSer.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
