export interface FilterDataProjects {
  ID_number: number,
    imgProject: string,
    nameProject: string,
    shortInfo: string,
}
export interface FilterDataProjectInfo {
  ID_numberInfo: number,
    imgProject: string,
    nameProject: string,
    longInfo: string,
    techUsed: string,
    isGithubActive ? : number,
    linkGithub ? : string,
    isYoutubeActive ? : number,
    linkYoutube ? : string,
    isWebSiteActive ? : number,
    linkWebSite ? : string,
}
export const PROJECTS: FilterDataProjects[] = [{
    ID_number: 1,
    imgProject: './assets/imgs/projects/portfolio.PNG',
    nameProject: 'Portfolio',
    shortInfo: 'A web app build from scratch to show my skills using angular, and show some projects, previous work, experience, blogs etc. '
  },
  {
    ID_number: 2,
    imgProject: './assets/imgs/projects/ecomerce.png',
    nameProject: 'Lotux-E-comerce',
    shortInfo: 'An E-commerce to learn the Framework ASP.NET. '
  },
  {
    ID_number: 3,
    imgProject: './assets/imgs/projects/tequila.PNG',
    nameProject: 'Startup Tequila Trip',
    shortInfo: 'A website to promote the Tequila city.'
  },
  {
    ID_number: 4,
    imgProject: './assets/imgs/projects/connect4.PNG',
    nameProject: 'Connect 4',
    shortInfo: 'A 2D platformer video game build with Unity.'
  },
  {
    ID_number: 5,
    imgProject: './assets/imgs/projects/processingImages.PNG',
    nameProject: 'Processing Images',
    shortInfo: 'A solution for Spatial Filtering tecnique, changing the apperance of a image by altering the colors of the pixels of the image.'
  },
];
export const PROJECTSDETAILS: FilterDataProjectInfo[] = [{
    ID_numberInfo: 1,
    imgProject: './assets/imgs/projects/portfolio.PNG',
    nameProject: 'Portfolio',
    longInfo: 'The purpose of this project is to showcase my skill building a web app from scratch and show my previous work, experience, blogs etc.',
    techUsed: 'Angular 12, TypeScript, Angular Material, Angular Flex Layout, HTML5, SCSS, Git',
    isGithubActive: 1,
    linkGithub: 'https://github.com/martincorona007/martin-corona-portfolio',
  },
  {
    ID_numberInfo: 2,
    imgProject: './assets/imgs/projects/ecomerce.png',
    nameProject: 'Lotux-E-comerce',
    longInfo: 'This web app includes an Administrator (sales people) and User (costumer), the administrator will have the options to add, remove, update and look for products, and the user will have the options to see the products and add to chart to pay.',
    techUsed: 'ASP.NET, C#, HTML5, CSS, Bootstrap, SQL Serve 2017, Git ',
    isGithubActive: 1,
    linkGithub: 'https://github.com/martincorona007/Lotux-E-comerce',
  },
  {
    ID_numberInfo: 3,
    imgProject: './assets/imgs/projects/tequila.PNG',
    nameProject: 'Startup Tequila Trip',
    longInfo: 'This is a simple web application to promote the tequila town in Guadalajara Jalisco Mexico, using my simple coding skills.',
    techUsed: 'Bootstrap ,HTML5, CSS, JavaScript, Git',
    isGithubActive: 1,
    linkGithub: 'https://github.com/martincorona007/Graphics',
    isWebSiteActive: 1,
    linkWebSite: 'https://martincorona007.github.io/Startup-Tequila-Trip/',
  },
  {
    ID_numberInfo: 4,
    imgProject: './assets/imgs/projects/connect4.PNG',
    nameProject: 'Connect 4',
    longInfo: 'A 2D platformer video game build with Unity, inside of this videogame its going to be played by two players and each player will have its mission to connect four discs in the board.',
    techUsed: 'Unity, C#, Git ',
    isGithubActive: 1,
    linkGithub: 'https://github.com/martincorona007/Connect-4',
    isYoutubeActive: 1,
    linkYoutube: 'https://www.youtube.com/watch?v=AKDdOkEgHA4',
  },
  {
    ID_numberInfo: 5,
    imgProject: './assets/imgs/projects/processingImages.PNG',
    nameProject: 'Processing Images',
    longInfo: 'The spatial filter has the objective of modify the contribution of determination range of frequencies to image formation. The spatial term refers to the filter is directly applied to the image and not a transform of the same, i.e., the pixels levels of gray is obtained directly as a function of the value of their neighbors.',
    techUsed: 'Python, Git',
    isGithubActive: 1,
    linkGithub: 'https://github.com/martincorona007/Graphics',
    
  },
];
