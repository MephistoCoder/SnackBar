class SNACKBAR {
  constructor(text, classname ){
    this.text = text;
    this.classname = classname;
    this.msg = document.createElement('div');
  }
  showMsg(){
    this.msg.innerHTML = this.text;
    this.msg.className = 'notif ' + this.classname;
    document.body.append(this.msg);
    setTimeout(()=> this.msg.remove(), 3000);
  }
  deleteMsg(){
      event.target.remove();
  }
};
var classes = ["notif_1", "notif_2", "notif_3"];
var animal = {
    'fox'  : ["Лиса хитрый зверь","Он ничем не отличался от ста тысяч других лисиц", "Рыжий лис"],
    'wolf' : ["Волк вожак стаи", "Волк собирает грибы в лесу", "Волк меняет шкуру, но не нрав"],
    'pig'  : ["Кабан дикий свин", "Кабан свинья, которая не поддалась на уговоры", "Кабан санитар леса"]
};
var buttons = [...document.getElementsByClassName('button')];
buttons.forEach(function (item, i, arr) {
  item.onclick = function () {
    var list = document.getElementById("select");
    var list_value = list.options[list.selectedIndex].value;
    newmsg = new SNACKBAR(animal[list_value][i], classes[i]);
    newmsg.showMsg();
    var elements = [...document.getElementsByClassName('notif')];
    elements.forEach(function (item, i ) {
      item.onclick = () => newmsg.deleteMsg();
      }
    );
  }
});
