import { Component } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss'],
})
export class ProjectSectionComponent {
  public projects = [
    {
      name: 'Gamely',
      description: `The aim of this project was to create an application that facilitates 
        associating players into well-matched groups and enabling their mutual 
        communication. Gamely allows users to create announcements based on a 
        form and provides chat rooms in which text and voice communication is possible.`,
      links: [
        {
          url: 'https://github.com/Metanefrydia/gamely',
          type: 'Github'
        },
        {
          url: 'https://www.figma.com/file/npgWcFcBd7SNQJXhPqujhE/Gamely?node-id=2%3A11694',
          type: 'Figma'
        }
      ],
      technologies: [
        { name: 'Angular', category: 'frontend' },
        { name: 'RxJS', category: 'frontend' },
        { name: 'Scss', category: 'frontend' },
        { name: 'Express.js', category: 'backend' },
        { name: 'WebRTC', category: 'backend' },
        { name: 'REST', category: 'backend' },
        { name: 'Mongodb', category: 'backend' },
        { name: 'UI design', category: 'other' },
      ],
    },
    {
      name: 'Task Manager',
      description: `Task Manager is a project aimed at people who would like to organize 
      their day better and be able to manage their daily tasks. Application allows users 
      to create groups and add others to it. Tasks are visible within the group where 
      anyone can view and change the task status. In this group project I was responsible 
      for UI design and part of the frontend implementation.`,
      links: [
        {
          url: 'https://github.com/Metanefrydia/task-manager',
          type: 'Github'
        },
        {
          url: 'https://www.figma.com/file/rLqPXHMBRoNjx65oOr0b1U/Task-Manager?node-id=0%3A1',
          type: 'Figma'
        }
      ],
      technologies: [
        { name: 'React', category: 'frontend' },
        { name: 'Hooks', category: 'frontend' },
        { name: 'Express.js', category: 'backend' },
        { name: 'REST', category: 'backend' },
        { name: 'Mongodb', category: 'backend' },
        { name: 'UI design', category: 'other' },
        { name: 'Group project', category: 'other' },
      ],
    },
    {
      name: 'Fancy Food',
      description: `Fancy Food is a web application for browsing and sharing recipies. 
      User is able to save recipies to favourites, comment or mark each recipie by stars. 
      On the front page application allows to filter and sort recipies in order to 
      facilitate searching for spectific content. In this project I was responsible for 
      UI design and part of the frontend implementation.`,
      links: [
        {
          url: 'https://gitlab.com/placki1',
          type: 'Gitlab'
        },
        {
          url: 'https://www.figma.com/file/Q7BbPZUe7IFZlNt1t0lfWv/Placki?node-id=0%3A1',
          type: 'Figma'
        }
      ],
      technologies: [
        { name: 'React', category: 'frontend' },
        { name: 'Hooks', category: 'frontend' },
        { name: 'Spring Boot', category: 'backend' },
        { name: 'Docker', category: 'backend' },
        { name: 'H2', category: 'backend' },
        { name: 'REST', category: 'backend' },
        { name: 'UI design', category: 'other' },
        { name: 'Group project', category: 'other' },
      ],
    },
  ];
}
