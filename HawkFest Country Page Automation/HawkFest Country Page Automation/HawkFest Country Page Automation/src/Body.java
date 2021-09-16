import java.io.PrintWriter;
import java.util.Scanner;
/**
 * This Class will handle printing the Body of the HTML file
 * @author MatthewSheldon
 */
public class Body {
	private String countryName;		// The name of the current Country
	private String informationType;	// The type of information that this page is showing
	private PrintWriter out;		// The HTML file that we are printing out to
	private Scanner scan;			// The Scanner used to get user input
	
	/**
	 * This generates the Body object instantiating all of the global variables
	 * @param cN	The name of the current Country
	 * @param iT	The information type that is currently being built
	 * @param out	The HTML file that we are printing out to 
	 * @param scan	The Scanner used to get user input
	 * @author MatthewSheldon
	 */
	public Body(String cN, String iT, PrintWriter out, Scanner scan) {
		this.countryName = cN;
		this.informationType = iT;
		this.out = out;
		this.scan = scan;
	}
	
	/**
	 * This method will generate the Body of the HTML file calling several methods
	 * in the process 
	 * @author MatthewSheldon
	 */
	public void generateBody() {
		out.println("");
		out.println("<!-- This is the main content of the page -->");
		out.println("<body style=\"font-family: 'LeavesAndGround'; font-weight: normal; font-style: normal;\">");
		
		// Generate the code for the header
		this.generateHeader();
		
		// Generate the code for the middle section
		this.generateSection();
		
		// Generate the code for the footer
		this.generateFooter();
		
		out.println("</body>");
	}
	
	/**
	 * This method will generate the header of the page including the
	 * the name of the country surrounded by the country's flags.
	 * @author MatthewSheldon
	 */
	private void generateHeader() {
		out.println("\t<!-- ");
		out.println("\t\tThis is the Name of the country");
		out.println("\t\t(and maybe the logo with a globe that takes you back to the landing site)");
		out.println("\t-->");
		out.println("\t<header>");
		out.println("\t\t<h2>");
		out.println("\t\t\t<img src=\"General Info/" + this.countryName + "Flag.png\" alt=\"" + this.countryName + "Flag.png\">");
		out.println("\t\t\t" + this.countryName);
		out.println("\t\t\t<img src=\"General Info/" + this.countryName + "Flag.png\" alt=\"" + this.countryName + "Flag.png\">");
		out.println("\t\t</h2>");
		out.println("\t</header>");
	}
	
	/**
	 * This method will generate the section part of the HTML code using two methods:
	 * 	-generateNav
	 * 	-generateArticle
	 * @author MatthewSheldon
	 */
	private void generateSection() {
		out.println();
		out.println("\t\t<!-- ");
		out.println("\t\t\tThis is the Middle block that contains the navigation ");
		out.println("\t\t\tbetween information and the space for the information itself ");
		out.println("\t\t-->");
		out.println("\t\t<section>");
		
		// Generate the Navigation Tabs on the left of the screen in the middle section
		this.generateNav();
		
		// Generate the Article section on the right of the screen if the middle section
		this.generateArticle();
		
		out.println("\t</section>");
	}
	
	/**
	 * This method will generate the navigation section in the HTML code
	 * @author MatthewSheldon
	 */
	private void generateNav() {
		out.println("\t\t<!-- This is the segment with the naviagation between information for a given country -->");
		out.println("\t\t<nav>");
		out.println("\t\t\t<ul>");
		out.println("\t\t\t\t<a href=\"/hawkfest/\">");
		out.println("\t\t\t\t\t<img alt=\"Home\" src=\"../../img/WhiteOutlineLogo.png\">");
		out.println("\t\t\t\t\tHome");
		out.println("\t\t\t\t</a>");
		out.println("\t\t\t\t<a href=\"General Info.html\">General Info</a>");
		out.println("\t\t\t\t<a href=\"Traditions and Holidays.html\">Traditions and Holidays</a>");
		out.println("\t\t\t\t<a href=\"Music.html\">Music</a>");
		out.println("\t\t\t\t<a href=\"Games.html\">Games</a>");
		out.println("\t\t\t\t<a href=\"Food.html\">Food</a>");
		out.println("\t\t\t\t<a href=\"Dress.html\">Dress</a>");
		out.println("\t\t\t</ul>");
		out.println("\t\t</nav>");
	}
	
	/**
	 * This method will generate the article section in the HTML code
	 * including most of the content for the given type of information
	 * @author TylerKerch & MatthewSheldon
	 */
	private void generateArticle() {
		out.println();
		out.println("\t\t<!-- This is the segment with the content for a given information type -->");
		out.println("\t\t<article>");
		
		// This will allow the user to enter content so long as they have items to add to a given page
		boolean flag = true;
		
		// This will handle the text that is printed if no content was provided for a given page 
		boolean content = false;
		
		// This keeps track of the number of times that the loop has run (i.e., the number of articles)
		int counter = 1;
		while(flag) {
			// Prompt the user for the different media for the given page
			System.out.printf("Media type %d for %s: %n", counter, informationType);
			System.out.println("Accepted types: type \"text\" for user input, \"video\", \"image\", \"pdf\", \"audio\", \"link\", anything else to continue");
			System.out.print("Selection: ");
			String mediaType = scan.nextLine();
			
			// If the information is a article of text, prompt the user for a potential header, and then the subsequent paragraph(s)
			if(mediaType.equals("text")) {
				// Because we have used a type of media, change the content variable to be true, indicating that there is some content for this page
				content = true;
				System.out.print("Header (Y/N): ");
				if(scan.nextLine().equalsIgnoreCase("Y")) {
					System.out.print("Header: ");
					out.println("\t\t\t<h1>" + scan.nextLine() + "</h1>");
				}
				boolean flag2 = true;
				int count = 1;
				while(flag2) {
					System.out.printf("Paragraph %d (Y/N): ", count);
					if(scan.nextLine().equalsIgnoreCase("Y")) {
						System.out.printf("Paragraph %d: ", count);
						out.println("\t\t\t<p>" + scan.nextLine() + "</p>");
					}else
						flag2 = false;
					count++;
				}
			}
			// If the information is a video, prompt the user for a potential header, and then the filename
			else if(mediaType.equals("video")) {
				// Because we have used a type of media, change the content variable to be true, indicating that there is some content for this page
				content = true;
				System.out.print("Header (Y/N): ");
				if(scan.nextLine().equalsIgnoreCase("Y")) {
					System.out.print("Header: ");
					out.println("\t\t\t<h1>" + scan.nextLine() + "</h1>");
				}
				System.out.print("Video name, including file extension (ex: CountryVideo.mp4): ");
				out.println("\t\t\t<video src=\"" + informationType + "/" + scan.nextLine() + "\" controls></video>");
				
			}
			// If the information is an image, prompt the user for a potential header, and then the filename
			else if(mediaType.equals("image")) {
				// Because we have used a type of media, change the content variable to be true, indicating that there is some content for this page
				content = true;
				System.out.print("Header (Y/N): ");
				if(scan.nextLine().equalsIgnoreCase("Y")) {
					System.out.print("Header: ");
					out.println("\t\t\t<h1>" + scan.nextLine() + "</h1>");
				}
				System.out.print("Image name, including file extension (ex: CountryFlag.png): ");
				out.println("\t\t\t<p><img src=\"" + informationType + "/" + scan.nextLine() + "\"></p>");
				
			}
			// If the information is an pdf, prompt the user for a potential header, and then the filename
			else if(mediaType.equals("pdf")) {
				// Because we have used a type of media, change the content variable to be true, indicating that there is some content for this page
				content = true;
				System.out.print("Header (Y/N): ");
				if(scan.nextLine().equalsIgnoreCase("Y")) {
					System.out.print("Header: ");
					out.println("\t\t\t<h1>" + scan.nextLine() + "</h1>");
				}
				System.out.print("Pdf name, including file extension (ex: CountryInfo.pdf): ");
				out.println("\t\t\t<p><iframe src=\"" + informationType + "/" + scan.nextLine() + "\"></iframe></p>");
			
			}
			// If the information is audio, prompt the user for a potential header, and then the filename
			else if(mediaType.equals("audio")) {
				// Because we have used a type of media, change the content variable to be true, indicating that there is some content for this page
				content = true;
				System.out.print("Header (Y/N): ");
				if(scan.nextLine().equalsIgnoreCase("Y")) {
					System.out.print("Header: ");
					out.println("\t\t\t<h1>" + scan.nextLine() + "</h1>");
				}
				System.out.print("Audio name, including file extension (ex: CountryAudio.mp3): ");
				out.println("\t\t\t<audio src=\"" + informationType + "/" + scan.nextLine() + "\" controls></audio>");		
				
			}
			// If the information is a link, prompt the user for a link display, and then the link
			else if(mediaType.equals("link")) {
				// Because we have used a type of media, change the content variable to be true, indicating that there is some content for this page
				content = true;
				System.out.print("Link display: ");
				String linkDisplay = scan.nextLine();
				System.out.print("Link: ");
				out.println("\t\t\t<a href=\""+ scan.nextLine() + "\">" + linkDisplay + "</a>");		
			}
			// If there is no more content for a given page, exit the loop
			else {
				flag = false;
			}
			counter++;
			System.out.println();
		}
		// If we were provided with no content for this given country, add a message noting that no content was provided for this section
		if(!content) {
			out.println("\t\t\t<h1>Sorry, no content was provided for the " + this.informationType + " page</h1>");
		}
		out.println("\t\t</article>");
    }
	
	/**
	 * This method will generate the footer of the page including the
	 * type of information that is currently being viewed and the label of "Hawkfest 2021" 
	 * @author MatthewSheldon
	 */
	private void generateFooter() {
		out.println("");
		out.println("<!-- This is the footer that will show what tab is currently being viewed -->");
		out.println("\t<footer>");
		out.println("\t\t<p>" + this.informationType + " | Hawk Fest 2021</p>");
		out.println("\t</footer>");
	}
}
