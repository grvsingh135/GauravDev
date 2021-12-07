trigger ClassTriger on Class__c (after insert) {
DataInsertForClass  obj = new DataInsertForClass();
obj.InsetFuncation();
}