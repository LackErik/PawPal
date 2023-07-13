package DogScraperRebirth;

public class DogFactory {

	
	public Dog giveBirth(String rasse, String wesen, String groesse, String hoehe, String gewicht, String alter, String fell,
			String farben, String fci, String fellPflege, String haaren, String energielevel, String trainierbar,
			String kinder) {
		
        Dog dog = new Dog();
        dog.setRasse(rasse);
        dog.setWesen(wesen);
        dog.setGroesse(groesse);
        dog.setHoehe(hoehe);
        dog.setGewicht(gewicht);
        dog.setAlter(alter);
        dog.setFell(fell);
        dog.setFellPflege(fellPflege);
        dog.setFarben(farben);
        dog.setFci(fci);
        dog.setHaaren(haaren);
        dog.setEnergielevel(energielevel);
        dog.setTrainierbar(trainierbar);
        dog.setKinder(kinder);
        
        return dog;
    }
	
	public String calculateWidth(String size) {
    	int calc;
		calc = Integer.parseInt(size);
        
        calc = (calc - (calc % 10)) / 2;
        
        size = Integer.toString(calc);

		
    	return size;
    }
	
	
}
