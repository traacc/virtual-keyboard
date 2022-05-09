class Keyboard {
    constructor(){
        this.layout = this.addLayout();
        this.matrix = this.keyboardMatrix();
    }
    addLayout(){
        return {
            tilda: {default:'`', shift:'~', altgr: '', shift_altgr: ''},
            1: {default:'1', shift:'!', altgr: '', shift_altgr: ''},
            2: {default:'2', shift:'@', altgr: '', shift_altgr: ''},
            3: {default:'3', shift:'#', altgr: '', shift_altgr: ''},
            4: {default:'4', shift:'$', altgr: '', shift_altgr: ''},
            5: {default:'5', shift:'%', altgr: '', shift_altgr: ''},
            6: {default:'6', shift:'^', altgr: '', shift_altgr: ''},
            7: {default:'7', shift:'&', altgr: '', shift_altgr: ''},
            8: {default:'8', shift:'*', altgr: '', shift_altgr: ''},
            9: {default:'9', shift:'(', altgr: '', shift_altgr: ''},
            0: {default:'0', shift:')', altgr: '', shift_altgr: ''},
            minus: {default:'-', shift:'_', altgr: '', shift_altgr: ''},
            eq: {default:'=', shift:'+', altgr: '', shift_altgr: ''},
            backspace: {default: '', func: 'bksp', width: ''},
            tab: {default: '', func: 'tab', width: ''},
            q: {default:'q', shift:'Q', altgr: '', shift_altgr: ''},
            w: {default:'w', shift:'W', altgr: '', shift_altgr: ''},
            e: {default:'e', shift:'E', altgr: '', shift_altgr: ''},
            r: {default:'r', shift:'R', altgr: '', shift_altgr: ''},
            t: {default:'t', shift:'T', altgr: '', shift_altgr: ''},
            y: {default:'y', shift:'Y', altgr: '', shift_altgr: ''},
            u: {default:'u', shift:'U', altgr: '', shift_altgr: ''},
            i: {default:'i', shift:'I', altgr: '', shift_altgr: ''},
            o: {default:'o', shift:'O', altgr: '', shift_altgr: ''},
            p: {default:'p', shift:'P', altgr: '', shift_altgr: ''},
            open_square: {default:'[', shift:'{', altgr: '', shift_altgr: ''},
            close_square: {default:']', shift:'}', altgr: '', shift_altgr: ''},
            /*a: 'a',
            s: 's',
            d: 'd',
            f: 'f',
            g: 'g',
            h: 'h',
            j: 'j',
            k: 'k',
            l: 'l',
            semicolon: ';',
            apostrophe: '\'',
            backslash: '\\',
            z: 'z',
            x: 'x',
            c: 'c',
            v: 'v',
            b: 'b',
            n: 'n',
            m: 'm',
            comma: ',',
            period: '.',
            slash: '/'*/
        }
    }
    keyboardMatrix(){
        return [['tilda', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'minus', 'eq', 'backspace'],
                ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'open_square', 'close_square']]
    }
    generateMatrixKeyboard(matrix, layout){
        let strHtml = `<div class="keyboard__inner">`
        for(let row of matrix){
            strHtml += `<div class="keyboard__row">`;
            for(let btn of row){
                strHtml += this.generateButtonHtml(btn, layout)
            }
            strHtml += `</div>`;
        }
        strHtml += `</div>`;
        return strHtml;

    }
    generateButtonHtml(key, layout){
        console.log(key);
        //if()
        return `<button class="btn" data-type="sym" data-key="${layout[key].default}" data-keyshift="${layout[key].shift}" data-keyaltgr="${layout[key].altgr}" data-corner="${layout[key].shift_altgr}">
                ${layout[key].default}</button>`
    }
}


let status = {shift:false, altgr:false, caps:false, ctrl:false, alt:false};

function resetStatus(){
    status.shift = false;
    status.altgr = false;
    status.caps = false;
    status.ctrl = false;
    status.alt = false;
}

//keyboard = new HTMLDivElement();
document.addEventListener('keydown', function(event) {
    console.log(event.code);
  });
document.addEventListener("DOMContentLoaded", ()=>{
    let kb = new Keyboard();
    document.body.innerHTML = `<textarea class='ta'></textarea>
                            <div class="keyboard"></div>`;
    document.body.querySelector('.keyboard').innerHTML = kb.generateMatrixKeyboard(kb.matrix, kb.layout);
    let textarea = document.body.querySelector('.ta');
    textarea.onblur = ()=>{
        textarea.focus();
    }
    /* Key reaction */
    //textarea.addEventListener('blur', ()=>{alert('fuck you');})
    document.body.querySelectorAll('.btn').forEach((val)=>val.addEventListener("click", (e)=>{
        
        //textarea.value += val.dataset.key;
        
        document.dispatchEvent(new KeyboardEvent('keydown', {'code': 'e'}));
        textarea.dispatchEvent(new KeyboardEvent('keydown', {'code': 'e'}));
    }));
    
});

