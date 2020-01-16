export class Picture {
  date: string;
  id: string;
  title: string;
  alt: string;
  author: string;
  filename: string;
  fsPath: string;
  httpPath: string;
  v: string;

  static mockFill(httpPath: string, author: string): Picture {
    let p = new Picture();
    p.date = ' ';
    p.id = " ";
    p.title =  " ";
    p.alt = " ";
    p.author = author;
    p.filename = " ";
    p.fsPath = " ";
    p.httpPath = httpPath;
    p.v = '0';
    return p;
  }

   static mockFillArray(): any {
    let array = [];
    for(let i = 0; i < 20; i++) {
      array.push(this.mockFill("https://images.unsplash.com/photo-1527555197883-98e27ca0c1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "Salma"));
      array.push(this.mockFill("https://www.helsinkitimes.fi/images/2019/Dec/TIP15-1.jpg", "Ahmed"));
      array.push(this.mockFill("https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",  "Mohammed"));
    }
   return array;
  }


  getPath(): string {
    return this.httpPath;
  }

  getAuthor(): string {
    return this.author;
  }

}

