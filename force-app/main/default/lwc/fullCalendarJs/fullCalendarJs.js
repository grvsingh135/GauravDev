/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 07-13-2020
 * @last modified by  : Amit Singh
 * Modifications Log 
 * Ver   Date         Author       Modification
 * 1.0   07-10-2020   Amit Singh   Initial Version
**/
import { LightningElement, track } from 'lwc';
import { loadScript,loadStyle} from 'lightning/platformResourceLoader';
import jquery from '@salesforce/resourceUrl/jquery';
import MomentJs from '@salesforce/resourceUrl/MomentJs';
import ThemeJs from '@salesforce/resourceUrl/ThemeJs';
 import FullcalendarJs from '@salesforce/resourceUrl/FullcalendarJs';
import FullcalendarCss from '@salesforce/resourceUrl/FullcalendarCss';
import { NavigationMixin } from 'lightning/navigation';
import fetchAllEvents from '@salesforce/apex/FullCalendarService.fetchAllEvents';
/**
 * FullCalendarJs
 * @description Full Calendar JS - Lightning Web Components
 */
export default class FullCalendarJs extends NavigationMixin(LightningElement) {

  fullCalendarJsInitialised = false;
  @track allEvents = [];
  @track selectedEvent = undefined;
  /**
   * @description Standard lifecyle method 'renderedCallback'
   *              Ensures that the page loads and renders the 
   *              container before doing anything else
   */
  
  renderedCallback() {
 console.log(jquery);
    // Performs this operation only on first render
   // if (this.fullCalendarJsInitialised) {
    //  return;
    //}
    this.fullCalendarJsInitialised = true;

    // Executes all loadScript and loadStyle promises
    // and only resolves them once all promises are done
    Promise.all([
      loadScript(this,jquery),
       loadScript(this, MomentJs ),
       loadScript(this,ThemeJs ),
       loadScript(this,FullcalendarJs ),
      loadStyle(this, FullcalendarCss)
    //   loadStyle(this, FullCalendarJS + '/FullCalendarJS/fullcalendar.print.min.css')
    ])
    .then(() => {
      
      // Initialise the calendar configuration
       this.getAllEvents();
    })
    .catch(error => {
      alert(error);
      // eslint-disable-next-line no-console
      console.error({
        message: 'Error occured on FullCalendarJS',
        error
      });
    })
  }

  /**
   * @description Initialise the calendar configuration
   *              This is where we configure the available options for the calendar.
   *              This is also where we load the Events data.
   */
  initialiseFullCalendarJs() {
    const ele = this.template.querySelector('div.fullcalendarjs');
    // eslint-disable-next-line no-undef
    $(ele).fullCalendar({
      header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay,listWeek'
      },
      themeSystem : 'standard',
      defaultDate: new Date(), 
      navLinks: true,
      editable: true,
      eventLimit: true,
      events: this.allEvents,
      dragScroll : true,
      droppable: true,
      weekNumbers : true,
      eventDrop: function(event, delta, revertFunc) {
        alert(event.title + " was dropped on " + event.start.format());
        if (!confirm("Are you sure about this change? ")) {
          revertFunc();
        }
      },
      eventClick: function(event, jsEvent, view) {
        alert('Event Clicked '+event.title)
        this.selectedEvent =  event;
      },
      dayClick :function(date, jsEvent, view) {
        jsEvent.preventDefault();
        
      },
      eventMouseover : function(event, jsEvent, view) {
      }
    });
  }

  getAllEvents(){

    
      fetchAllEvents()
      .then(result => {
       // alert("rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")");
        console.log("rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")");
      
           if(result !==undefined && result.length>0){
             for(let i=0;i<result.length ;i++){
                console.log(result[i].event.Subject);
                console.log(result[i].status);
                if(result[i].status ==='Qualification'){
                  this.allEvents.push({
                    id : result[i].event.Id,
                    editable : true,
                    title : result[i].event.Subject,
                    start : result[i].event.ActivityDate,
                    end : result[i].event.EndDateTime,
                    description : result[i].event.Description,
                    allDay : false,
                    backgroundColor: "rgb(255,255,0)",
                    borderColor: "rgb(0,0,255)"
                   });
                }
            else if(result[i].status ==='Prospecting'){}
                this.allEvents.push({
                  id : result[i].event.Id,
                  editable : true,
                  title : result[i].event.Subject,
                  start : result[i].event.ActivityDate,
                  end : result[i].event.EndDateTime,
                  description : result[i].event.Description,
                  allDay : false,
                  backgroundColor: "rgb(255,0,0)",
                  borderColor: "rgb(0,255,0)"
                 });

             }
           }
         //  let eventData =[];
       // console.log('complete data ' + JSON.stringify(result));
       // console.log('evet ' + JSON.stringify(result.event));
       /*  eventData = result[0].event;
        console.log( eventData);
        this.allEvents = eventData.map(item => {
          return {
            id : item.Id,
            editable : true,
            title : item.Subject,
            start : item.ActivityDate,
            end : item.EndDateTime,
            description : item.Description,
            allDay : false,
            extendedProps : {
              whoId : item.WhoId,
              whatId : item.WhatId,

            },
            backgroundColor: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")",
            borderColor: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
          };
        });*/
        // Initialise the calendar configuration
        this.initialiseFullCalendarJs();
      })
      .catch(error => {
        window.console.log(' Error Occured ', error)
      })
      .finally(()=>{
        //this.initialiseFullCalendarJs();
      })
  }

  closeModal(){
    this.selectedEvent = undefined;
  }
}