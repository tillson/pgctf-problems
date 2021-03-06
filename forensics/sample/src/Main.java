import java.util.*;
import java.lang.*;
import java.io.*;

public class Main
{
	public static void main (String[] args) {
		// obfuscated!
    int[] list = { 102, 108, 97, 103, 123, 106, 97, 118, 97, 95, 105, 115, 95, 110, 48, 116, 95, 115, 51, 99, 117, 114, 101, 125 };

		String[] character = new String[list.length];

		for (int i = 0; i < list.length; i++) {
			character[i] = Character.toString((char)list[i]);
		}

    String theManMulcahey = character[0].toString(); // I was taught a month ago...

    List<String> wordList = new ArrayList<String>();
    wordList.add("AP");
    wordList.add("COMP");
    wordList.add("SCI");
    wordList.add("ROCKS");

    System.out.println(StringFormatter.format(wordList, 30));

	}
}

class StringFormatter {

  public static int totalLetters(List<String> wordList) {
    int letters = 0;
    for (String word : wordList)
      letters += word.length();
    return letters;
  }

  public static int basicGapWidth(List<String> wordList, int formattedLen) {
    int gaps = wordList.size() - 1;
    int spaces = formattedLen - totalLetters(wordList);
    return spaces / gaps;
  }

  public static int leftoverSpaces(List<String> wordList, int formattedLen) {
    return 0;
  }

  public static String format(List<String> wordList, int formattedLen) {
    int width = basicGapWidth(wordList, formattedLen);
    int leftoverRemaining = leftoverSpaces(wordList, formattedLen);

    String formatted = "";
    for(int i = 0; i < wordList.size() - 1; i++) {
      formatted += wordList.get(i);

      for(int s = 1; s <= width; s++)
        formatted += " ";

      if(leftoverRemaining > 0) {
        formatted += " ";
        leftoverRemaining--;
      }
    }
    formatted += wordList.get(wordList.size() - 1);
    return formatted;
  }
}
