public class StringArrayTest {
public static List<String> generateStringArray(Integer length){
    List<String> retrunList = new List<String>();
    for(Integer i =0 ;i< length; i++)
    {
        retrunList.add('Test '+ i);
    }
    return retrunList;
}
}