function Student(n, c, u, i, b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = b;
}

function storeData(e) {
    e.preventDefault();
    let form = document.getElementById("form");
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let all = new Student(name, course, unit, image, batch);

    let get = JSON.parse(localStorage.getItem("Shubham")) || [];
    get.push(all);

    localStorage.setItem("Shubham",JSON.stringify(get));
    console.log(all);
}

function calculate() {
    let get = JSON.parse(localStorage.getItem("Shubham")) || [];
    let obj = {};

    for (let i=0; i<get.length; i++) {
        if (!obj[get[i].batch]) {
            obj[get[i].batch] = 0;
        }
    }
    for (let i=0; i<get.length; i++) {
            obj[get[i].batch]++;
        }


    console.log(obj);
}
calculate ();
