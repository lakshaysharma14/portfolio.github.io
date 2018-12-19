import java.util.Scanner;

public class ex1

{
	public static void main(String args[])
	{
		char c;

		Scanner s=new Scanner(System.in);

		System.out.println("please provide the input");

		c=s.next().charAt(0);

		if(c>='a'&&c<='z'||c>='A'&&c<='Z')
		{
			System.out.println("You enetred an alphabet");
		}

		else if(c>='0'&&c<='9')
		{
			System.out.println("You entered a number");
		}
	}
}