export default class Validator {
    constructor(config, form) {
                this._config = config;
                this._form = form;
                this._button = this._form.querySelector(this._config.buttonSubmitSelector);
                this._input = this._form.querySelectorAll(this._config.InputForm);
                this._errors = this._form.querySelectorAll(this._config.error);
            }  

   isEmail(input) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(input).toLowerCase());
    }

    isDate(date){
        if(date.toString() == parseInt(date).toString()) return false; 
        const tryDate = new Date(date);
        return (tryDate && tryDate.toString() != "NaN" && tryDate != "Invalid Date"); 
    }

    isRequired(input){
        if(input.hasAttribute('required')){
            this.checkInputValidity(this._form, input, this._config);
        }
        return input.hasAttribute('required');
    }

    _showError(form, input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputErrorClass);
    }

    _hideError(form, input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = "";
        input.classList.remove(this._config.inputErrorClass);
    }

    checkInputValidity(form, input, config) {
        if (input.validity.valid) {
            this._hideError(this._form, input, this._config);
        } else {
            this._showError(this._form, input, this._config);
        }
    }

    setButtonState(isActive) {
        if (isActive) {
            this._button.classList.remove(this._config.buttonInvalidClass);
            this._button.disabled = false;
        } else {
            this._button.classList.add(this._config.buttonInvalidClass);
            this._button.disabled = true;
        }
    }

    _setEventListener(form) {
        this._input.forEach(input => {
            input.addEventListener('input', (evt) => {
                
                this.isRequired(input);

                if(input.type == 'email'){
                    this.isEmail(input.value);
                    }

                this.setButtonState(this._form.checkValidity());
            });
        });
    }

    enableValidation() {
        this._setEventListener(this._form);

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this.setButtonState(this._form.checkValidity());

    }

}