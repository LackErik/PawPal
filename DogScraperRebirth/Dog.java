package DogScraperRebirth;

public class Dog {

	//Hundeattribute
	private String rasse;
    private String wesen;
    private String groesse;
    private String hoehe;
    private String gewicht;
    private String alter;
    private String fell;
    private String farben;
    private String fci;
    
    private String fellPflege;
    private String haaren;
    private String energielevel;
    private String trainierbar;
    private String kinder;
	
    public Dog() {}
    
    public Dog(String rasse, String wesen, String groesse, String hoehe, String gewicht, String alter, String fell,
			String farben, String fci, String fellPflege, String haaren, String energielevel, String trainierbar,
			String kinder) {
		super();
		this.rasse = rasse;
		this.wesen = wesen;
		this.groesse = groesse;
		this.hoehe = hoehe;
		this.gewicht = gewicht;
		this.alter = alter;
		this.fell = fell;
		this.farben = farben;
		this.fci = fci;
		this.fellPflege = fellPflege;
		this.haaren = haaren;
		this.energielevel = energielevel;
		this.trainierbar = trainierbar;
		this.kinder = kinder;
	}

	public void setRasse(String rasse) {
		this.rasse = rasse;
	}

	public void setWesen(String wesen) {
		this.wesen = wesen;
	}

	public void setGroesse(String groesse) {
		this.groesse = groesse;
	}

	public void setHoehe(String hoehe) {
		this.hoehe = hoehe;
	}

	public void setGewicht(String gewicht) {
		this.gewicht = gewicht;
	}

	public void setAlter(String alter) {
		this.alter = alter;
	}

	public void setFell(String fell) {
		this.fell = fell;
	}

	public void setFarben(String farben) {
		this.farben = farben;
	}

	public void setFci(String fci) {
		this.fci = fci;
	}

	public void setFellPflege(String fellPflege) {
		this.fellPflege = fellPflege;
	}

	public void setHaaren(String haaren) {
		this.haaren = haaren;
	}

	public void setEnergielevel(String energielevel) {
		this.energielevel = energielevel;
	}

	public void setTrainierbar(String trainierbar) {
		this.trainierbar = trainierbar;
	}

	public void setKinder(String kinder) {
		this.kinder = kinder;
	}
    
    
    
    
    

	
}
