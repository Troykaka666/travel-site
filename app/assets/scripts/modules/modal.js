import $ from "jquery";

class modal{
    constructor(){
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events(){
        //clicking open
        this.openModalButton.click(this.openModal.bind(this));
        //clicking close
        this.closeModalButton.click(this.closeModal.bind(this));

        //push the any key to close
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal(){
        this.modal.removeClass("modal--is-visible");
    }

    keyPressHandler(e){
        if(e.keyCode == 27){
            this.closeModal();
        }
    }
}

export default modal;