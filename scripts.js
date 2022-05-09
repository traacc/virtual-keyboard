class Keyboard {
    constructor() {
        this.layout = this.addLayout();
        this.matrix = this.keyboardMatrix();
    }
    addLayout() {
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
            backspace: {default: '', type: 'bksp', width: ''},
            tab: {default: '', type: 'tab', width: ''},
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
    keyboardMatrix() {
        return [['tilda', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'minus', 'eq', 'backspace'],
                ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'open_square', 'close_square']]
    }
    generateMatrixKeyboard(matrix, layout) {
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
    generateButtonHtml(key, layout) {
        console.log(key);
        //if()
        return `<button class="btn" data-type="sym" data-key="${layout[key].default}" data-keyshift="${layout[key].shift}" data-keyaltgr="${layout[key].altgr}" data-corner="${layout[key].shift_altgr}">
                ${layout[key].default}</button>`
    }
}


let stat = {shift:false, altgr:false, caps:false, ctrl:false, alt:false};

function resetStat(){
    stat.shift = false;
    stat.altgr = false;
    stat.ctrl = false;
    stat.alt = false;
}
const taCols = 100;
const taRows = 20;
//keyboard = new HTMLDivElement();
document.addEventListener('keydown', function(event) {
    console.log(event.code);
  });
document.addEventListener("DOMContentLoaded", ()=>{
    let kb = new Keyboard();
    document.body.innerHTML = `<textarea class='ta' rows=${taRows} cols=${taCols}></textarea>
                            <div class="keyboard"></div>`;
    document.body.querySelector('.keyboard').innerHTML = kb.generateMatrixKeyboard(kb.matrix, kb.layout);
    let textarea = document.body.querySelector('.ta');
    textarea.addEventListener("input", (e)=>{

    })
    /* Key reaction */
    //textarea.addEventListener('blur', ()=>{alert('fuck you');})
    document.body.querySelectorAll('.btn').forEach((val)=>val.addEventListener("click", (e)=>{
        const typeInput = val.dataset.type;
        //textarea.value = textarea.value.substring(0,textarea.selectionStart-1) + textarea.value.substring(textarea.selectionStart,textarea.value.length);
        switch(typeInput){
            case 'sym':
                textarea.value += kb.layout[val.dataset.default];
                if(stat.shift) {
                    textarea.value += kb.layout[val.dataset.shift];
                } else if(stat.altgr) {
                    textarea.value += kb.layout[val.dataset.altgr];
                } else if(stat.altgr&&stat.shift) {
                    textarea.value += kb.layout[val.dataset.shift_altgr];
                }
                break;
            case 'bskp':
                textarea.value = textarea.value.substring(0,textarea.selectionStart-1) + textarea.value.substring(textarea.selectionStart,textarea.value.length);
                break;
            case 'del':
                break;
            case 'enter':
                textarea.value += '\n';
                break;
            case 'tab':
                textarea.value += '\t';
                break;
            case 'shift':
                stat.shift ? stat.shift = false : stat.shift = true;
                break;
            case 'ctrl':
                stat.ctrl ? stat.ctrl = false : stat.ctrl = true;
                break;
            case 'alt':
                stat.alt ? stat.alt = false : stat.alt = true;
                break;
            case 'altgr':
                stat.altgr ? stat.altgr = false : stat.altgr = true;
                break;
            
        }
    }));
    
});

