export class WallItems {

  username: string;
  message: string;

  get_username() {
    return this.username;
  }

  set_username(value) {
    this.username = value;
  }

  get_message() {
    return this.message;
  }

  set_message(value) {
    this.message = value;
  }
}
