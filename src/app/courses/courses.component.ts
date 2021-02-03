import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
            {{ text | summary:10 }}
          `,
  // templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{
    text = `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, tempora! Dignissimos amet obcaecati alias suscipit iste numquam perspiciatis sapiente ut optio, pariatur dolor iusto odit repellendus? Asperiores totam ipsam veritatis nisi excepturi magnam enim impedit rem commodi assumenda id, officiis quasi cum vitae quos temporibus, maxime aliquam quod nulla voluptatum voluptatibus itaque at amet quibusdam! Sunt a veritatis nihil sit at rem est eaque ab laboriosam quia? Nesciunt fuga, quidem odio cum dolor ad modi error ipsum, aut officiis impedit, minus vero! Impedit eos cupiditate dolorem id illum. Nam aliquam asperiores voluptate exercitationem voluptas magni odio corrupti quaerat cupiditate facilis!
    `
}

