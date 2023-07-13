package DogScraperRebirth;

import java.util.List;
import java.util.ArrayList;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.google.gson.Gson;





public class App {
	
	
	

	public static void main(String[] args) {
		
		
			//Dog Factory initialisieren
			DogFactory factory = new DogFactory();

			
		  	//Browser starten
			WebDriver driver = new ChromeDriver();

			//website öffnen
	        driver.get("https://www.hundeo.com/hunderassen/");
	        
	        //Grid Element der Hunde holen
	        WebElement gridElement = driver.findElement(By.cssSelector(".the-grid"));
	        List<WebElement> gridItems = gridElement.findElements(By.cssSelector(".grid-item"));
	        
	        List<String> linkList = new ArrayList<>();
	        
	        //Hundeattribute
	        String wesen;
	        String groesse;
	        String hoehe;
	        String gewicht;
	        String alter;
	        String fell;
	        String farben;
	        String fci;
	        
	        String fellPflege;
	        String haaren;
	        String energielevel;
	        String trainierbar;
	        String kinder;
	        
	        
	        
	        ArrayList<Dog> hundeDaten = new ArrayList<>();
	        
	        
	        
	        //Schleife zur Verarbeitung jedes Hundes im Grid
	        for (int i = 150; i< gridItems.size(); i++) {
	        	
	        	System.out.println(i);
	        	
	        	WebElement item = gridItems.get(i);
	        	//Get dog name on main page
	        	WebElement h3Element = item.findElement(By.cssSelector("h3"));
	            String text = h3Element.getText();
	            
	            //Get link to dog page
	            WebElement aElem = item.findElement(By.cssSelector("a"));
		        String aElemLink = aElem.getAttribute("href");
		        
		        //Console output
		        System.out.println("Dog name: " + text);
	            System.out.println("Dog link: " + aElemLink);
	            System.out.println();
	            linkList.add(aElemLink);
	            linkList.add(text);
	        }
		        
	        for (int i = 0; i< gridItems.size(); i++) {
	            //Go to Dog Page
		        driver.get(linkList.get(i));
		        i++;
	            
	            wesen = driver.findElement(By.className("elementor-element-1d54e068")).findElement(By.className("elementor-widget-container")).getText();
	            groesse = driver.findElement(By.className("elementor-element-55f3aa7")).findElement(By.className("elementor-widget-container")).getText();
	            hoehe = driver.findElement(By.className("elementor-element-6abaf774")).findElement(By.className("elementor-widget-container")).getText();
	            gewicht = driver.findElement(By.className("elementor-element-19b6736")).findElement(By.className("elementor-widget-container")).getText();
	            alter = driver.findElement(By.className("elementor-element-68c9e702")).findElement(By.className("elementor-widget-container")).getText();
	            fell = driver.findElement(By.className("elementor-element-22d4a00")).findElement(By.className("elementor-widget-container")).getText();
	            farben = driver.findElement(By.className("elementor-element-9038ed8")).findElement(By.className("elementor-widget-container")).getText();
	            fci = driver.findElement(By.className("elementor-element-66bfc8ab")).findElement(By.className("elementor-widget-container")).getText();
	            
	            fellPflege = Integer.toString( driver.findElement(By.className("elementor-element-30b731b1")).findElement(By.className("progress")).getSize().width);
	            haaren = Integer.toString( driver.findElement(By.className("elementor-element-36c9e896")).findElement(By.className("progress")).getSize().width);
	            energielevel = Integer.toString( driver.findElement(By.className("elementor-element-7686a98b")).findElement(By.className("progress")).getSize().width);
	            trainierbar = Integer.toString( driver.findElement(By.className("elementor-element-2bfd6e1f")).findElement(By.className("progress")).getSize().width);
	            kinder = Integer.toString( driver.findElement(By.className("elementor-element-29e5bdc9")).findElement(By.className("progress")).getSize().width);

	            
	            //Test
	            System.out.println(groesse);
	            System.out.println(hoehe);
	            System.out.println(gewicht);
	            System.out.println(alter);
	            System.out.println(fell);
	            System.out.println(farben);
	            System.out.println(fci);
	            

	            
	            groesse = groesse.length() > 0 ? groesse.substring(7) : "";
	            hoehe = hoehe.length() > 0 ? hoehe.substring(6) : "";
	            gewicht = gewicht.length() >0 ? gewicht.substring(9) : "";
	            alter = alter.length() > 0 ? alter.substring(17) : "";
	            fell = fell.length() > 0 ?  fell.substring(9) : "";
	            farben = farben.length() > 0? farben.substring(7) : "";
	            fci = fci.length() > 0 ? fci.substring(11) : "";
	            
	            //Test
	            System.out.println(groesse);
	            System.out.println(hoehe);
	            System.out.println(gewicht);
	            System.out.println(alter);
	            System.out.println(fell);
	            System.out.println(farben);
	            System.out.println(fci);
	            
	            System.out.println(fellPflege);
	            System.out.println(haaren);
	            System.out.println(energielevel);
	            System.out.println(trainierbar);
	            System.out.println(kinder);
	            
	            
	            fellPflege =  factory.calculateWidth(fellPflege);
	            haaren =  factory.calculateWidth(haaren);
	            energielevel =  factory.calculateWidth(energielevel);
	            trainierbar =  factory.calculateWidth(trainierbar);
	            kinder =  factory.calculateWidth(kinder);

	            Dog currentDog = factory.giveBirth(linkList.get(i), wesen, groesse, hoehe, gewicht, alter, fell, farben, fci, fellPflege, haaren, energielevel, trainierbar, kinder);
	            hundeDaten.add(currentDog);
	            
	            //Go back to main page
	            driver.get("https://www.hundeo.com/hunderassen/");
	        }
	        
	     

	        String json = new Gson().toJson(hundeDaten);
	        
	        System.out.println(json);
	        driver.quit();
	}

}
