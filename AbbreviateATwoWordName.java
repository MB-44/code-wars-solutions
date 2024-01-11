// program to convert name into initials

public class AbbreviateATwoWordName {
    public static String main(String name) {
        String[] names = name.split(" ");
        return (names[0].charAt(0) + "." + names[1].charAt(0)).toUpperCase();
    }
}