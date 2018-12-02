import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import { timingSafeEqual } from "crypto";

class stickyheader{
    constructor(){
        this.siteHeader = $(".site-header");
        this.headerTriggerE = $(".large-hero__title");
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
    }
    addSmoothScrolling(){
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint(){
        var that = this;
        new Waypoint({
            element: this.headerTriggerE[0],
            handler:function(direction){
                if(direction == "down"){
                    that.siteHeader.addClass("site-header--dark");
                }else{
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }
    createPageSectionWaypoints(){
        var that = this;
        this.pageSections.each(function(){
            var currentPageSection = this;
            new Waypoint({
                element:currentPageSection,
                handler:function(direction){
                    if(direction == "down"){
                        var matchingHeaderlink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("active");
                        $(matchingHeaderlink).addClass("active");
                    }              
                },
                offset: "18%"
            });
            new Waypoint({
                element:currentPageSection,
                handler:function(direction){
                    if(direction == "up"){
                        var matchingHeaderlink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("active");
                        $(matchingHeaderlink).addClass("active");
                    }
               
                },
                offset: "-40%"
            });
        });
    }
}

export default stickyheader;