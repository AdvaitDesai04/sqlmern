import java.util.Scanner;

public class naturalnum {
public static int sum1(int nums){
    
    int sum = 0;
     for(int i = 1; i<=nums;i++){
        sum +=i;

     }

    return sum;
}


    public static void main(String args[]){
        int a ;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter till which num you want natural num sum: ");
        System.out.println(sum1(a =sc.nextInt()));

    }
}
