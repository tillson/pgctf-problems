import java.util.*;
import java.lang.*;
import java.io.*;

public class Main
{
	public static void main (String[] args) {

    String[] character = {"f", "l", "a", "g", "{", "j", "a",
      "v", "a", "_", "0", "b", "f", "u", "s", "c", "a", "t", "i", "o", "n",
      "_", "i", "s", "_", "h", "4", "r", "d", "}"};
    String theManMulcahey = character[0]; // I was taught a month ago...

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
