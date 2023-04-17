package co.org.ccb.appCCB.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.org.ccb.appCCB.model.tarifas;
import co.org.ccb.appCCB.model.tipo_activo;
import co.org.ccb.appCCB.service.tarifasSer;
import co.org.ccb.appCCB.service.tipo_activoSer;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/tarifas")
public class tarifasCtrl {
    
    @Autowired
    private tarifasSer tarifasSer;

    @Autowired
    private tipo_activoSer tipo_activoSer;

    @GetMapping("/list-tarifas")
    public ResponseEntity<List<tarifas>> listarTarifas(){
        return new ResponseEntity<>(tarifasSer.findAll(), HttpStatus.OK);
    }

    @GetMapping("/tipo-activo")
    public ResponseEntity<List<tipo_activo>> listarTipoActivo(){
        return new ResponseEntity<>(tipo_activoSer.findAll(), HttpStatus.OK);
    }
}
