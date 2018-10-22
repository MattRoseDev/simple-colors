// COLORS
class main {
    constructor(){
        this.colors = {
            1: '#2eb872',
            2: '#f03861',
            3: '#0e2431',
            4: '#fc3a52',
            5: '#433466',
            6: '#10316b',
            7: '#fdbe34',
            8: '#f2f7ff',
            9: '#0b409c',
            10: '#0092ca',
            11: '#222831',
            12: '#393e46',
            13: '#f9a828',
            14: '#07617d',
            15: '#ececeb',
            16: '#2e383f',
            17: '#e6af2e',
            18: '#282f44',
            19: '#ececec',
            20: '#048998',
            21: '#f6f5f5',
            22: '#3bb4c1',
            23: '#e3e3e3',
            24: '#303841',
            25: '#f6c90e',
            26: '#2e4750',
            27: '#f7f7f7',
            28: '#0881a3',
            29: '#c62727',
            30: '#f98903',
            31: '#f35b25',
            32: '#0e91a1',
            33: '#146c78',
            34: '#658361',
            35: '#a5def1',
            36: '#ebf7fd',
            37: '#365a6c',
            38: '#233142',
            39: '#de1b41',
            40: '#18224b',
            41: '#5a37c3',
            42: '#f4e022',
            43: '#00adb5',
            44: '#112d4e',
            45: '#3f72af',
            46: '#fbb735', 
            47: '#e98931',
            48: '#eb403b',
            49: '#b32e37',
            50: '#6c2a6a',
            51: '#39c0b3',
            52: '#274389',
            53: '#1f5ea8',
            54: '#227fb0',
            55: '#2ab0c5',
            56: '#336e7b',
            57: '#6c7a89',
            58: '#663399',
            59: '#2c3e50',
            60: '#fde3a7'
            
        }
        
        this.containers = document.getElementById('containers');
    }
    spectrum(start,end){
        if(start > end){
            let temp = start;
            start = end;
            end = temp;
        }
        let add = 1;
        let colors = {};
        let count = 1;
        for (let i = start; i < end; i += add) {
            let number = i.toString(16);
            if (number.length < 6) {
                let zero = 6 - number.length;
                for (let b = 1; b <= zero; b++) {
                    number = '0' + number;
                }
            }
            colors[count++] = '#' + number;
        }
        return colors;
    }
    createColors () {
        let c = [];
        this.colors = this.sortColors(this.colors);
        this.lengthColors = Object.keys(this.colors).length;
        for (let count = 1; count <= this.lengthColors ;count++){
            c[count] = parseInt('0x'+this.colors[count].slice(1));
            let div = document.createElement('div');
            let text = document.createElement('div');
            div.classList.add('color');
            text.classList.add('text');
            div.setAttribute('onmousedown','copy(this)');
            text.innerHTML = this.colors[count].slice(1);
            div.appendChild(text);
            div.style.backgroundColor = this.colors[count];
            this.containers.appendChild(div);
        }
        console.log(c);
    }
    mixColors(colors) {
        this.tempColors = colors;
        let result = {};
        this.lengthTempColors = Object.keys(this.tempColors).length;
        for(let count = 1;count <= this.lengthTempColors;count++){
            this.random = this.randomeColor(this.lengthTempColors);
            while(this.tempColors[this.random] == 0){
                this.random = this.randomeColor(this.lengthTempColors);
            }
            result[count] = this.tempColors[this.random].toUpperCase();
            this.tempColors[this.random] = 0;
        }
        return result;
    }
    sortColors(colors){
        this.tempColors = colors;
        this.lengthTempColors = Object.keys(this.tempColors).length;
        for (let i = 1; i <= this.lengthTempColors; i++) {
            for (let j = 1; j <= this.lengthTempColors; j++) {
                this.x = '0x' + this.tempColors[i].slice(1);
                this.y = '0x' + this.tempColors[j].slice(1);
                this.x = parseInt(this.x);
                this.y = parseInt(this.y);
                if (this.x > this.y) {
                    let temp = this.tempColors[i];
                    this.tempColors[i] = this.tempColors[j];
                    this.tempColors[j] = temp;
                }
            }
        }
        
        return this.tempColors;
    }
    randomeColor(number){
        return Math.trunc(Math.random() * number) + 1;        
    }
    copy(element){
        window.getSelection().removeAllRanges();          
        this.range = document.createRange();
        this.range.selectNode(element);
        window.getSelection().addRange(this.range);
        document.execCommand("copy");
    } 
    
}

let Main = new main();
if (document.addEventListener) {
    document.body.addEventListener('load', Main.createColors());
}
function copy(element){
    Main.copy(element);
}
