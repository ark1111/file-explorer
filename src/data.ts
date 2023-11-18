export const Icons: { [key: string]: string } = {
  folder: "/icons/folder-filled.svg",
  txt: "/icons/file-text.svg",
  css: "/icons/css.svg",
  js: "/icons/javascript.svg",
  html: "/icons/html.svg",
  svg: "/icons/svg-file.svg",
  png: "/icons/png-file.svg",
};

export const sampleData = [
  {
    id: 1,
    parentId: null,
    type: "folder",
    title: "Root",
  },
  {
    id: 2,
    parentId: 1,
    type: "folder",
    title: "A",
  },
  {
    id: 3,
    parentId: 1,
    type: "folder",
    title: "B",
  },
  {
    id: 4,
    parentId: 2,
    type: "folder",
    title: "test",
  },
  {
    id: 5,
    parentId: 4,
    type: "file",
    title: "test1.js",
  },
  {
    id: 6,
    parentId: 4,
    type: "file",
    title: "test1.css",
  },
  {
    id: 7,
    parentId: 3,
    type: "file",
    title: "B1.html",
  },
  {
    id: 8,
    parentId: 3,
    type: "file",
    title: "B2.txt",
  },
  {
    id: 9,
    parentId: 2,
    type: "file",
    title: "A1.txt",
  },
  {
    id: 10,
    parentId: 1,
    type: "folder",
    title: "C",
  },
  {
    id: 11,
    parentId: 10,
    type: "file",
    title: "C1.svg",
  },
  {
    id: 12,
    parentId: 10,
    type: "file",
    title: "C2.png",
  },
];
