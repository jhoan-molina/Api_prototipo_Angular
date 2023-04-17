package co.org.ccb.appCCB.model;

import javax.persistence.*;

@Entity
@Table(name = "tipo_id")
public class tipo_id {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Integer id;

    private String nombre;

    /*public tipo_id() {
    }

    public tipo_id(Integer id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }*/

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
