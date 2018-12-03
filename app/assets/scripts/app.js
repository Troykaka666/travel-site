// var Person = require("./modules/Person"); node.js
// var $ = require("jquery");
// import Person from "./modules/Person";

// class Adult extends Person {
//   payTxes() {
//     console.log(this.name + "now owes 66$");
//   }
// }

// var john = new Person("John Doe", "Blue");
// john.greet();

// var jane = new Adult("Jane Smith", "yellow");
// jane.greet();
// jane.payTxes();.
import $ from "jquery";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import stickyheader from "./modules/stickyheader";
import modal from "./modules/modal";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "80%");
var Stickyheader = new stickyheader();
var Modal = new modal();