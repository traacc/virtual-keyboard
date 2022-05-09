const enLayout = {
    tilda: {default:'`', shift:'~', altgr: '', shift_altgr: '', code: "Backquote"},
    1: {default:'1', shift:'!', altgr: '', shift_altgr: '', code: "Dight1"},
    2: {default:'2', shift:'@', altgr: '', shift_altgr: '', code: "Dight2"},
    3: {default:'3', shift:'#', altgr: '', shift_altgr: '', code: "Dight3"},
    4: {default:'4', shift:'$', altgr: '', shift_altgr: '', code: "Dight4"},
    5: {default:'5', shift:'%', altgr: '', shift_altgr: '', code: "Dight5"},
    6: {default:'6', shift:'^', altgr: '', shift_altgr: '', code: "Dight6"},
    7: {default:'7', shift:'&', altgr: '', shift_altgr: '', code: "Dight7"},
    8: {default:'8', shift:'*', altgr: '', shift_altgr: '', code: "Dight8"},
    9: {default:'9', shift:'(', altgr: '', shift_altgr: '', code: "Dight9"},
    0: {default:'0', shift:')', altgr: '', shift_altgr: '', code: "Dight0"},
    minus: {default:'-', shift:'_', altgr: '', shift_altgr: '', code: "Minus"},
    eq: {default:'=', shift:'+', altgr: '', shift_altgr: '', code: "Equal"},
    backspace: {default: '←', type: 'bksp', width: 'bksp', code: "Backspace"},
    tab: {default: 'Tab', type: 'tab', width: 'tab', code: "Tab"},
    q: {default:'q', shift:'Q', altgr: '', shift_altgr: '', code: "KeyQ"},
    w: {default:'w', shift:'W', altgr: '', shift_altgr: '', code: "KeyW"},
    e: {default:'e', shift:'E', altgr: '', shift_altgr: '', code: "KeyE"},
    r: {default:'r', shift:'R', altgr: '', shift_altgr: '', code: "KeyR"},
    t: {default:'t', shift:'T', altgr: '', shift_altgr: '', code: "KeyT"},
    y: {default:'y', shift:'Y', altgr: '', shift_altgr: '', code: "KeyY"},
    u: {default:'u', shift:'U', altgr: '', shift_altgr: '', code: "KeyU"},
    i: {default:'i', shift:'I', altgr: '', shift_altgr: '', code: "KeyI"},
    o: {default:'o', shift:'O', altgr: '', shift_altgr: '', code: "KeyO"},
    p: {default:'p', shift:'P', altgr: '', shift_altgr: '', code: "KeyP"},
    open_square: {default:'[', shift:'{', altgr: '', shift_altgr: '', code: "BracketLeft"},
    close_square: {default:']', shift:'}', altgr: '', shift_altgr: '', code: "BracketRight"},
    backslash: {default:'\\', shift:'|', altgr: '', shift_altgr: '', code: "Backslash"},
    caps: {default:'Caps Lock', type: 'caps', width:'caps', code: "CapsLock"},
    s: {default:'s', shift:'S', altgr: '', shift_altgr: '', code: "KeyS"},
    a: {default:'a', shift:'A', altgr: '', shift_altgr: '', code: "KeyA"},
    d: {default:'d', shift:'D', altgr: '', shift_altgr: '', code: "KeyD"},
    f: {default:'f', shift:'F', altgr: '', shift_altgr: '', code: "KeyF"},
    g: {default:'g', shift:'G', altgr: '', shift_altgr: '', code: "KeyG"},
    h: {default:'h', shift:'H', altgr: '', shift_altgr: '', code: "KeyH"},
    j: {default:'j', shift:'J', altgr: '', shift_altgr: '', code: "KeyJ"},
    k: {default:'k', shift:'K', altgr: '', shift_altgr: '', code: "KeyK"},
    l: {default:'l', shift:'L', altgr: '', shift_altgr: '', code: "KeyL"},
    semicolon: {default:';', shift:':', altgr: '', shift_altgr: '', code: "Semicolon"},
    apostrophe: {default:'\'', shift:'\"', altgr: '', shift_altgr: '', code: "Quote"},
    enter: {default:'Enter', type: 'enter', width:'enter', code: "Enter"},
    shift: {default:'Shift', type: 'shift', width:'shift', code: "ShiftLeft"},
    z: {default:'z', shift:'Z', altgr: '', shift_altgr: '', code: "KeyZ"},
    x: {default:'x', shift:'X', altgr: '', shift_altgr: '', code: "KeyX"},
    c: {default:'c', shift:'C', altgr: '', shift_altgr: '', code: "KeyC"},
    v: {default:'v', shift:'V', altgr: '', shift_altgr: '', code: "KeyV"},
    b: {default:'b', shift:'B', altgr: '', shift_altgr: '', code: "KeyB"},
    n: {default:'n', shift:'N', altgr: '', shift_altgr: '', code: "KeyN"},
    m: {default:'m', shift:'M', altgr: '', shift_altgr: '', code: "KeyM"},
    up: {default:'↑', type: 'up', code: "ArrowUp"},
    rshift: {default:'Shift', type: 'shift', code: "ShiftRight"},
    comma: {default:',', shift:'<', altgr: '', shift_altgr: '', code: "Comma"},
    period: {default:'.', shift:'>', altgr: '', shift_altgr: '', code: "Period"},
    slash: {default:'/', shift:'?', altgr: '', shift_altgr: '', code: "Period"},
    ctrl: {default:'ctrl', type:'ctrl', shift:'?', altgr: '', shift_altgr: '', code: "ControlLeft"},
    os: {default:'os', type:'os', altgr: '', shift_altgr: '', code: "MetaLeft"},
    alt: {default:'alt', type:'alt', altgr: '', shift_altgr: '', code: "AltLeft"},
    space: {default:'space', type:'space', altgr: '', shift_altgr: '', width: "space", code: "Space"},
    altgr: {default:'Alt Gr', type:'altgr', altgr: '', shift_altgr: '', code: "AltRight"},
    rctrl: {default:'Ctrl', type:'altgr', altgr: '', shift_altgr: '', code: "ControlRight"},
    left: {default:'←', type: 'left', code: "ArrowLeft"},
    down: {default:'↓', type: 'down', code: "ArrowDown"},
    right: {default:'→', type: 'right', code: "ArrowRight"},

}
const ruLayout = {
    tilda: {default:'ё', shift:'Ё', altgr: '', shift_altgr: '', code: "Backquote"},
    1: {default:'1', shift:'!', altgr: '', shift_altgr: '', code: "Dight1"},
    2: {default:'2', shift:'\"', altgr: '', shift_altgr: '', code: "Dight2"},
    3: {default:'3', shift:'№', altgr: '', shift_altgr: '', code: "Dight3"},
    4: {default:'4', shift:';', altgr: '', shift_altgr: '', code: "Dight4"},
    5: {default:'5', shift:'%', altgr: '', shift_altgr: '', code: "Dight5"},
    6: {default:'6', shift:':', altgr: '', shift_altgr: '', code: "Dight6"},
    7: {default:'7', shift:'?', altgr: '', shift_altgr: '', code: "Dight7"},
    8: {default:'8', shift:'*', altgr: '', shift_altgr: '', code: "Dight8"},
    9: {default:'9', shift:'(', altgr: '', shift_altgr: '', code: "Dight9"},
    0: {default:'0', shift:')', altgr: '', shift_altgr: '', code: "Dight0"},
    minus: {default:'-', shift:'_', altgr: '', shift_altgr: '', code: "Minus"},
    eq: {default:'=', shift:'+', altgr: '', shift_altgr: '', code: "Equal"},
    backspace: {default: '←', type: 'bksp', width: 'bksp', code: "Backspace"},
    tab: {default: 'Tab', type: 'tab', width: 'tab', code: "Tab"},
    q: {default:'й', shift:'Й', altgr: '', shift_altgr: '', code: "KeyQ"},
    w: {default:'ц', shift:'Ц', altgr: '', shift_altgr: '', code: "KeyW"},
    e: {default:'у', shift:'У', altgr: '', shift_altgr: '', code: "KeyE"},
    r: {default:'к', shift:'К', altgr: '', shift_altgr: '', code: "KeyR"},
    t: {default:'е', shift:'Е', altgr: '', shift_altgr: '', code: "KeyT"},
    y: {default:'н', shift:'Н', altgr: '', shift_altgr: '', code: "KeyY"},
    u: {default:'г', shift:'Г', altgr: '', shift_altgr: '', code: "KeyU"},
    i: {default:'ш', shift:'Ш', altgr: '', shift_altgr: '', code: "KeyI"},
    o: {default:'щ', shift:'Щ', altgr: '', shift_altgr: '', code: "KeyO"},
    p: {default:'з', shift:'З', altgr: '', shift_altgr: '', code: "KeyP"},
    open_square: {default:'х', shift:'Х', altgr: '', shift_altgr: '', code: "BracketLeft"},
    close_square: {default:'ъ', shift:'Ъ', altgr: '', shift_altgr: '', code: "BracketRight"},
    backslash: {default:'\\', shift:'|', altgr: '', shift_altgr: '', code: "Backslash"},
    caps: {default:'Caps Lock', type: 'caps', width:'caps', code: "CapsLock"},
    s: {default:'ф', shift:'Ф', altgr: '', shift_altgr: '', code: "KeyS"},
    a: {default:'ы', shift:'Ы', altgr: '', shift_altgr: '', code: "KeyA"},
    d: {default:'в', shift:'В', altgr: '', shift_altgr: '', code: "KeyD"},
    f: {default:'а', shift:'А', altgr: '', shift_altgr: '', code: "KeyF"},
    g: {default:'п', shift:'П', altgr: '', shift_altgr: '', code: "KeyG"},
    h: {default:'р', shift:'Р', altgr: '', shift_altgr: '', code: "KeyH"},
    j: {default:'о', shift:'О', altgr: '', shift_altgr: '', code: "KeyJ"},
    k: {default:'л', shift:'Л', altgr: '', shift_altgr: '', code: "KeyK"},
    l: {default:'д', shift:'Д', altgr: '', shift_altgr: '', code: "KeyL"},
    semicolon: {default:'ж', shift:'Ж', altgr: '', shift_altgr: '', code: "Semicolon"},
    apostrophe: {default:'э', shift:'Э', altgr: '', shift_altgr: '', code: "Quote"},
    enter: {default:'Enter', type: 'enter', width:'enter', code: "Enter"},
    shift: {default:'Shift', type: 'shift', width:'shift', code: "ShiftLeft"},
    z: {default:'я', shift:'Я', altgr: '', shift_altgr: '', code: "KeyZ"},
    x: {default:'ч', shift:'Ч', altgr: '', shift_altgr: '', code: "KeyX"},
    c: {default:'с', shift:'С', altgr: '', shift_altgr: '', code: "KeyC"},
    v: {default:'м', shift:'М', altgr: '', shift_altgr: '', code: "KeyV"},
    b: {default:'и', shift:'И', altgr: '', shift_altgr: '', code: "KeyB"},
    n: {default:'т', shift:'Т', altgr: '', shift_altgr: '', code: "KeyN"},
    m: {default:'ь', shift:'Ь', altgr: '', shift_altgr: '', code: "KeyM"},
    up: {default:'↑', type: 'up', code: "ArrowUp"},
    rshift: {default:'Shift', type: 'shift', code: "ShiftRight"},
    comma: {default:'б', shift:'Б', altgr: '', shift_altgr: '', code: "Comma"},
    period: {default:'ю', shift:'Ю', altgr: '', shift_altgr: '', code: "Period"},
    slash: {default:'.', shift:',', altgr: '', shift_altgr: '', code: "Period"},
    ctrl: {default:'ctrl', type:'ctrl', shift:'?', altgr: '', shift_altgr: '', code: "ControlLeft"},
    os: {default:'os', type:'os', altgr: '', shift_altgr: '', code: "MetaLeft"},
    alt: {default:'alt', type:'alt', altgr: '', shift_altgr: '', code: "AltLeft"},
    space: {default:'space', type:'space', altgr: '', shift_altgr: '', width: "space", code: "Space"},
    altgr: {default:'Alt Gr', type:'altgr', altgr: '', shift_altgr: '', code: "AltRight"},
    rctrl: {default:'Ctrl', type:'ctrl', altgr: '', shift_altgr: '', code: "ControlRight"},
    left: {default:'←', type: 'left', code: "ArrowLeft"},
    down: {default:'↓', type: 'down', code: "ArrowDown"},
    right: {default:'→', type: 'right', code: "ArrowRight"},

}
class Keyboard {
    constructor(layout) {
        this.layout = layout;
        this.matrix = this.keyboardMatrix();
    }
    setLayout(layout) {
        this.layout = layout;
    }
    keyboardMatrix() {
        return [['tilda', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'minus', 'eq', 'backspace'],
                ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'open_square', 'close_square'],
                ['caps','a','s', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'semicolon', 'apostrophe', 'enter'],
                ['shift','z','x', 'c', 'v', 'b', 'n', 'm', 'comma', 'period', 'slash', 'up', 'rshift'],
                ['ctrl', 'os', 'alt', 'space', 'altgr', 'rctrl', 'left', 'down', 'right']]
    }
    generateMatrixKeyboard(matrix) {
        let strHtml = `<div class="keyboard__inner">`
        for(let row of matrix){
            strHtml += `<div class="keyboard__row">`;
            for(let btn of row){
                strHtml += this.generateButtonHtml(btn)
            }
            strHtml += `</div>`;
        }
        strHtml += `</div>`;
        return strHtml;

    }
    generateButtonHtml(key) {
        const classes = "btn" + " " + ((this.layout[key].width) ? this.layout[key].width : "")
        console.log(classes);
        const type = this.layout[key].type ? this.layout[key].type : "sym";
        return `<button class=${classes} data-type=${type} data-key="${key}" data-keyshift="${this.layout[key].shift}" data-code="${this.layout[key].code}" data-keyaltgr="${this.layout[key].altgr}" data-corner="${this.layout[key].shift_altgr}">
                ${this.layout[key].default}</button>`
    }
}


let stat = {shift:false, altgr:false, caps:false, ctrl:false, alt:false, layout:'en'};

function resetStat(){
    stat.shift = false;
    stat.altgr = false;
    stat.ctrl = false;
    stat.alt = false;
    stat.caps = false;
}

function activeClassToggle(){
    for(let par in stat){
        console.log(par);
        if(par=='layout') continue;
        if(stat[par])
            document.body.querySelector(`[data-type=${par}]`).classList.add('active');
        else 
            document.body.querySelector(`[data-type=${par}]`).classList.remove('active');
    }
    
}

const taCols = 82;
const taRows = 20;

document.addEventListener('keyup', (e)=> {
    const el = document.body.querySelector(`[data-code=${e.code}]`);
    if(el)
        el.classList.remove('active');
  });
document.addEventListener('keydown', (e)=> {
    const el = document.body.querySelector(`[data-code=${e.code}]`);
    if(el)
        el.classList.add('active');
  });
document.addEventListener("DOMContentLoaded", ()=>{
    let kb = new Keyboard(enLayout);
    document.body.innerHTML = `<div class="container">
                            <textarea class='ta' rows=${taRows} cols=${taCols}></textarea>
                            <div class="keyboard">
                            </div>
                            <div class="layout">
                            <button class="change-layout">Change Layout</button>
                            <p class="note-layout">Currect Layout: <span>en</span></p>
                            </div>
                            </div>
                            `;
    document.body.querySelector('.keyboard').innerHTML = kb.generateMatrixKeyboard(kb.matrix);
    
    let textarea = document.body.querySelector('.ta');

    /* Key reaction */
    //textarea.addEventListener('blur', ()=>{alert('fuck you');})
    function handleEvents() {

    }
    document.body.querySelectorAll('.btn').forEach((val)=>val.addEventListener("click", (e)=>{
        const typeInput = val.dataset.type;
        //textarea.value = textarea.value.substring(0,textarea.selectionStart-1) + textarea.value.substring(textarea.selectionStart,textarea.value.length);
        textarea.focus();
        switch(typeInput){
            case 'sym':
                //textarea.value += kb.layout[val.dataset.key].default;
                if(stat.shift||stat.caps) {
                    textarea.value += kb.layout[val.dataset.key].shift;
                    stat.shift = false;
                } else {
                    textarea.value += kb.layout[val.dataset.key].default;
                }
                break;
            case 'bskp':
                textarea.value = textarea.value.substring(0,textarea.selectionStart-1) + textarea.value.substring(textarea.selectionStart,textarea.value.length);
                break;
            case 'del':
                break;
            case 'space':
                textarea.value += " ";
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
            case 'caps':
                stat.caps ? stat.caps = false : stat.caps = true;
                break;
            case 'left':
                textarea.selectionEnd -= 1;
                break;
            case 'right':
                textarea.selectionStart += 1;
                break;
            case 'up':
                textarea.selectionEnd -= 40;
                break;
            case 'down':
                break;
        }
        if(stat.shift||stat.caps){
            document.body.querySelectorAll('[data-type="sym"]').forEach((val)=>{
                val.textContent = kb.layout[val.dataset.key].shift;
            });
        } else {
            document.body.querySelectorAll('[data-type="sym"]').forEach((val)=>{
                val.textContent = kb.layout[val.dataset.key].default;
            });
        }
        activeClassToggle()
    }));
    document.body.querySelector('.change-layout').addEventListener("click",()=>{
        if(stat.layout=='en'){
            stat.layout='ru'
            kb.setLayout(ruLayout);
        } else {
            stat.layout='en'
            kb.setLayout(enLayout);
        }
        document.body.querySelectorAll('[data-type="sym"]').forEach((val)=>{
            val.textContent = kb.layout[val.dataset.key].default;
        });
        resetStat();
        document.body.querySelector('.note-layout span').textContent = stat.layout;
    });
});

