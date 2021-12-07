public with sharing class ContactController {

@AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [SELECT Id, Name, Title, Phone, Email FROM Contact];
    }
    @AuraEnabled(cacheable=true)
    public static String getConvertCurrency(String amount,String countryCode1,String countryCode2){
        System.debug('amount --'+ amount);
       System.debug('countryCode1 --'+ countryCode1);
       System.debug('countryCode2 --'+ countryCode2);
        Http http = new Http();
        HttpRequest httpReuqest = new HttpRequest();
        HttpResponse  httpResponse = new  HttpResponse();
        //https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=SGD&to=INR
        String endPointUrl ='https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=SGD&to=INR';
        httpReuqest.setEndpoint(endPointUrl);
        httpReuqest.setHeader('X-RapidAPI-Host', 'currency-exchange.p.rapidapi.com');
        httpReuqest.setHeader('X-RapidAPI-Key', '4d5d0d302fmsh3e4f47eccb632afp1ff4f6jsn08b849bfbbc7');
        httpReuqest.setMethod('GET');
        httpResponse = http.send(httpReuqest); 
        System.debug('httpResponse --'+ httpResponse);
        return String.valueOf(httpResponse.getBody());

    }
}