package co.org.ccb.appCCB.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import co.org.ccb.appCCB.service.emailSer;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/mail")
public class mailCtrl {
    
    @Autowired
    private final emailSer emailSer;

    
    public mailCtrl(emailSer emailSer){
        this.emailSer = emailSer;
    }

    @GetMapping("/EmailTo")
    public ResponseEntity<?> sendEmail(@RequestParam("email") String emailTo, @RequestParam("subject") String subject){
        this.emailSer.sendListEmail(emailTo, subject);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
