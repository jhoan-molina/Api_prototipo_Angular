package co.org.ccb.appCCB.model;


import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tarifas")
public class tarifas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Double id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "id_tipo_activo")
    private tipo_activo tipo_activo;

    private Double rango_min;
    private Double rango_max;
    private Double UVT_valor;
    private Double pesos_valor;

    public Double getId() {
        return id;
    }
    public void setId(Double id) {
        this.id = id;
    }
    public tipo_activo getTipo_activo() {
        return tipo_activo;
    }
    public void setTipo_activo(tipo_activo tipo_activo) {
        this.tipo_activo = tipo_activo;
    }
    public Double getRango_min() {
        return rango_min;
    }
    public void setRango_min(Double rango_min) {
        this.rango_min = rango_min;
    }
    public Double getRango_max() {
        return rango_max;
    }
    public void setRango_max(Double rango_max) {
        this.rango_max = rango_max;
    }
    public Double getUVT_valor() {
        return UVT_valor;
    }
    public void setUVT_valor(Double uVT_valor) {
        UVT_valor = uVT_valor;
    }
    public Double getPesos_valor() {
        return pesos_valor;
    }
    public void setPesos_valor(Double pesos_valor) {
        this.pesos_valor = pesos_valor;
    }

    
}
