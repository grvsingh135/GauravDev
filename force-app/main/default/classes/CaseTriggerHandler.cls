public without sharing class CaseTriggerHandler extends TriggerHandler {
        public static Boolean isIntegrationUpdate = false;
    public static Boolean skipCMAndCAValidation = false;

    
    public static Boolean skipOwnershipValidation = false;

    
    public static ID UserInfogotProfileId ;
    public static string UserInfogotProfileName ;
    public static ID UserInfogotUserId ;
    public static string UserInfogotUserEmail ;
    public static string UserInfogotName ;

  
    public static Map<Id, Case> oldRecMap = new Map<Id, Case>();
    public static Boolean isScoreCase = false;
    //private static final CASE_STATUS_SUBMMITED = 'Submitted';
    public static Boolean isBeforeInsertExecuted = false;
    public static Boolean isAfterInsertExecuted = false;
    public static Boolean isBeforeUpdateExecuted = false;
    public static Boolean isAfterUpdateExecuted = false;

    public static Boolean isSupplierCase = false;
    public static Boolean isSupplier = false;

    public static List<Case> scoreCaseList = new List<Case>();
    public static List<Case> nonScoreCases = new List<Case>();

   
    public static Id tradingAustralia;
    public static Id tradingNz;
    public static String noReplyEmail = '';

    public static Boolean caseidCMCA = false;

  



    public override void afterUpdate() {
       
       
    }

    //before insert trigger
    public override void beforeInsert() {
       

    }

    public override void beforeUpdate() {
       
    }

    public override void afterInsert() {
       
    }
   

    
   
  

    
  

    
   
  
    /**
     * @author Jeremy Galvez
     * @description Return an empty string for email values replacement if string is null
     * @date March 30, 2018
     *
     */
    public static String processText(String value){
        String result = '';
        if (!String.isEmpty(value)) {
            result = value;
        }
        return result;
    }
}