import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  selected = [];
  flag = false;
  count = 0;
  quiz = [
    {
      'no': '1',
      'question': 'What is the abbreviation of HTML?',
      'options': [{ 'option': 'HyperText Makeup Language', 'id': '1.1' }, { 'option': 'HyperText Markup Language', 'id': '1.2' }, { 'option': 'HyperText Markup Lang', 'id': '1.3' }, { 'option': 'HyperTitle Markup Language', 'id': '1.4' }]
    },
    {
      'no': '2',
      'question': 'What is the latest version of Angular?',
      'options': [{ 'option': '7', 'id': '2.1' }, { 'option': '8', 'id': '2.2' }, { 'option': '9', 'id': '2.3' }, { 'option': '10', 'id': '2.4' }]
    },
    {
      'no': '3',
      'question': 'What is the abbreviation of CSS?',
      'options': [{ 'option': 'Cascade Style Sheet', 'id': '3.1' }, { 'option': 'Cascading Style Sheet', 'id': '3.2' }, { 'option': 'Cascade Styling Sheet', 'id': '3.3' }, { 'option': 'Cascade Style Script', 'id': '3.4' }]
    },
    {
      'no': '4',
      'question': 'What is the abbreviation of API?',
      'options': [{ 'option': 'Application Program Interchange', 'id': '4.1' }, { 'option': 'Application Protocol Interface', 'id': '4.2' }, { 'option': 'Application Program Interface', 'id': '4.3' }, { 'option': 'Application Programming Interface', 'id': '4.4' }]
    },
    {
      'no': '5',
      'question': 'What is the command to create an Angular project?',
      'options': [{ 'option': 'ng app', 'id': '5.1' }, { 'option': 'ng new', 'id': '5.2' }, { 'option': 'ng create', 'id': '5.3' }, { 'option': 'ng', 'id': '5.4' }]
    },
    {
      'no': '6',
      'question': 'What is scope in AngularJs ?',
      'options': [{ 'option': 'class', 'id': '6.1' }, { 'option': 'template', 'id': '6.2' }, { 'option': 'object', 'id': '6.3' }, { 'option': 'data', 'id': '6.4' }]
    },
    {
      'no': '7',
      'question': 'What does MVC stands for?',
      'options': [{ 'option': 'Main View Control', 'id': '7.1' }, { 'option': 'Model View Control', 'id': '7.2' }, { 'option': 'Main View Controller', 'id': '7.3' }, { 'option': 'Model View Controller', 'id': '7.4' }]
    },
    {
      'no': '8',
      'question': 'Which among the following is the not the core directives of AngularJS?',
      'options': [{ 'option': 'ng-app', 'id': '8.1' }, { 'option': 'ng-new', 'id': '8.2' }, { 'option': 'ng-model', 'id': '8.3' }, { 'option': 'ng-bind', 'id': '8.4' }]
    },
    {
      'no': '9',
      'question': 'What is orderBy filter used for?',
      'options': [{ 'option': 'To filter the components', 'id': '9.1' }, { 'option': 'To list the components in the array', 'id': '9.2' }, { 'option': 'To order the array based on criteria', 'id': '9.3' }, { 'option': 'To order the class elements', 'id': '9.4' }]
    },
    {
      'no': '10',
      'question': 'AngularJS expressions are written using.',
      'options': [{ 'option': '[value]', 'id': '10.1' }, { 'option': '{value}', 'id': '10.2' }, { 'option': '{{value}}', 'id': '10.3' }, { 'option': '(value)', 'id': '10.4' }]
    }
  ]
  answers = [
    {
      'no': '1',
      'answer': 'HyperText Markup Language'
    },
    {
      'no': '2',
      'answer': '9'
    },
    {
      'no': '3',
      'answer': 'Cascading Style Sheet'
    },
    {
      'no': '4',
      'answer': 'Application Program Interface'
    },
    {
      'no': '5',
      'answer': 'ng new'
    },
    {
      'no': '6',
      'answer': 'object'
    },
    {
      'no': '7',
      'answer': 'Model View Controller'
    },
    {
      'no': '8',
      'answer': 'ng-new'
    },
    {
      'no': '9',
      'answer': 'To order the array based on criteria'
    },
    {
      'no': '10',
      'answer': '{{value}}'

    }
  ]
  constructor() {
    console.log(this.quiz);
  }
  test() {
    var x;
    for (var i = 0; i < this.quiz.length; i++) {
      //console.log(this.quiz[i].no);
      for (var k = 0; k < this.quiz[i].options.length; k++) {

        if ((<HTMLInputElement>document.getElementById(this.quiz[i].options[k].id)).checked) {
          x = (<HTMLInputElement>document.getElementById(this.quiz[i].options[k].id)).value;
          this.selected.push(x);
        }
      }
    }
    console.log(this.selected)
    this.flag = true;
    for (var j = 0; j < this.selected.length; j++) {
      console.log(this.selected[j])
      console.log(this.answers[j].answer);
      if (this.answers[j].answer == this.selected[j]) {
        this.count = this.count + 1;
      }
      console.log(this.count)
    }
  }


  ngOnInit(): void {
  }

}
