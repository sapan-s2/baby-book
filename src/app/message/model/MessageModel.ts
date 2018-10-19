export  class  MessageModel{

  private message;
  private emailId;


  get_message() {
    return this.message;
  }

  set_message(value) {
    this.message = value;
  }

  get_emailId() {
    return this.emailId;
  }

  set_emailId(value) {
    this.emailId = value;
  }
}
