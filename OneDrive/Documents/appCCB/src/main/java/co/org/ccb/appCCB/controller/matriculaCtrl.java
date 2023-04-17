package co.org.ccb.appCCB.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import co.org.ccb.appCCB.model.matricula;
import co.org.ccb.appCCB.service.matriculaSer;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/matricula")
public class matriculaCtrl {
    
    @Autowired
    private matriculaSer matriculaSer;

    @GetMapping("/list-matricula")
    public ResponseEntity<List<matricula>> listarMatricula(){
        return new ResponseEntity<>(matriculaSer.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<matricula> obtenerMatricula(@PathVariable Integer id){
        return new ResponseEntity<>(matriculaSer.findById(id), HttpStatus.OK);
    }

    @PostMapping("/new")
    public ResponseEntity<matricula> registrarMatricula(@RequestBody matricula matricula){
        return new ResponseEntity<>(matriculaSer.save(matricula), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<matricula> actualizarMatricula(@PathVariable Integer id, @RequestBody matricula matricula){
        matricula matriculaEncontrada = matriculaSer.findById(id);

        if(matriculaEncontrada == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        try{
            matriculaEncontrada.setFecha_matricula(matricula.getFecha_matricula());
            matriculaEncontrada.setValor(matricula.getValor());
            matriculaEncontrada.setEstado(matricula.getEstado());
            return new ResponseEntity<>(matriculaSer.save(matriculaEncontrada), HttpStatus.CREATED);
        }catch(DataAccessException e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> eliminarMatricula(@PathVariable Integer id){
        matriculaSer.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
