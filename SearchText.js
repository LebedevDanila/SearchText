class SearchText {
  constructor() {
    this.input = document.querySelector('.search__input');
    this.items = document.querySelectorAll('.item');
    this.noEntries = document.querySelector('.no-entries');
    this.i = 0;

    this.run();
  }
  findItems = () => {
    this.items.forEach(item => {
      let transformItemHtml = item.innerHTML.toLowerCase();
      let transformInputValue = this.input.value.toLowerCase();

      if(transformItemHtml.includes(transformInputValue)) {
        item.style.display = 'block';
        this.noEntries.style.display = 'none';
      }
      else {
        item.style.display = 'none';
        this.i++;
      }
    });

    if(this.i == this.items.length) {
      this.noEntries.style.display = 'block';
    }
    
    this.i = 0;
  }
  run = () => {
    this.input.addEventListener('input', this.findItems);
  }
}
const searchText = new SearchText();