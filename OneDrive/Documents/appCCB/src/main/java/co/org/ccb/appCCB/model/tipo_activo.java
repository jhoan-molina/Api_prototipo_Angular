package co.org.ccb.appCCB.model;

import javax.persistence.*;

@Entity
@Table(name = "tipo_activo")
public class tipo_activo {
    
    @Id
    @Column(unique = true, nullable = false)
    private Integer id;

    private String nombre;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    
}
