import {Select} from "./select/select";

const select = new Select('#select', {
  placeholder: 'Choose one of items',
  selectedId: '4',
  data: [
    {id: '1', value: 'React'},
    {id: '2', value: 'Angular'},
    {id: '3', value: 'Vue'},
    {id: '4', value: 'JS'},
  ],
  onSelect(item) {
    console.log('Selected item: ', item)
  }
});
