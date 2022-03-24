export interface FilterDataBlogs{
  ID_number: number,
  name: string,
  isMedium?: number,
  linkMedium?: string,
  isBlogsPot?: number,
  linkBlogsPot?: string,
  isDev?: number,
  linkDev?: string,
  isGitHub?: number,
  linkGithub?: string,
}
export const BLOGS: FilterDataBlogs[] = [
  {ID_number: 1,name: 'Regular Processing', isBlogsPot: 1,linkBlogsPot: 'https://introtheoryofcomputation.blogspot.com/2019/06/regular-processing.html',isDev: 1,linkDev: 'https://dev.to/martincorona007/regular-processing-42dk'},
  {ID_number: 2,name: 'Matrix neighbors',isDev: 1,linkDev: 'https://dev.to/martincorona007/matrix-neighbors-2d9'},
  {ID_number: 3,name: 'Insert Before Double Linked List ',isDev: 1, linkDev: 'https://dev.to/martincorona007/insert-before-double-linked-list-20nh'},
  {ID_number: 4,name: 'Lexical Analysis ', isDev:1, linkDev:'https://dev.to/martincorona007/lexical-analysis-1l5g', isMedium: 1, linkMedium: 'https://medium.com/@martincorona007/lexical-analysis-13f3b517854b'},
  {ID_number: 5,name: 'CYK Algorithm',isMedium:1,linkMedium: 'https://medium.com/@martincorona007/cyk-algorithm-60d7f869ca0a'},
  {ID_number: 6,name: 'Full Adder',isDev: 1,linkDev: 'https://dev.to/martincorona007/full-adder-bf2',isMedium: 1,linkMedium: 'https://medium.com/@martincorona007/full-adder-f10c4de4b6d7'},
  {ID_number: 7,name: 'The changes in Technology affect people',isGitHub: 1,linkGithub: 'https://github.com/martincorona007/The_changes_in_Technology_affect_people/blob/master/English/Protocol.pdf'}
];