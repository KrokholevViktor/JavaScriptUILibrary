import $ from "../core";

$.prototype.show = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        } // если у елемента нет style пропускаем
        this[i].style.display = ''; // ставит значение в default
    }  
    return this;
};

$.prototype.hide = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        } // если у елемента нет style пропускаем
        this[i].style.display = 'none'; // скрывает элемент
    }  
    return this;
};

$.prototype.toggle = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        } // если у елемента нет style пропускаем
        if (this[i].style.display === 'none') {
            this[i].style.display = ''; // ставит значение в default
        } else {
            this[i].style.display = 'none';// скрывает элемент
        }   
    }  
    return this;
};