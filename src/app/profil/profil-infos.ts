export class ProfilInfos {
  firstname: string;
  lastname: string;
  email: string;
  bio: string;
  fields: string;
  profilePicPath: string;
  portfolio: any;

  mockFill() {
    this.firstname = 'Salma ';
    this.lastname = 'Rais';
    this.email = 'salmamrais@gmail.com';
    this.bio = '' +
      // tslint:disable-next-line:max-line-length
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ac-cumsan lacus vel facilisis commodo viverra maecenas. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum susp endisse ultrices gravida.' +
      'Risus commodo viverra maecenas accumsan lacus vel facilisis.';
    this.fields = 'Wedding Photography, Portrait Photography, Model Photography, Events Photography';
    this.profilePicPath = 'https://cache.magazine-avantages.fr/data/photo/w1000_c18/4j/hommebrunyeuxverts.jpg';
  }
}
