export  class  MessageModel{

  private message;
  private emailId;
  private userName;
  private userProfileURL;
  private userProfileURLSource;


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

  get_userName() {
    return this.userName;
  }

  set_userName(value) {
    this.userName = value;
  }

  get_userProfileURL() {
    return this.userProfileURL;
  }

  set_userProfileURL(value) {
    this.userProfileURL = value;
  }

  get_userProfileURLSource() {
    return this.userProfileURLSource;
  }

  set_userProfileURLSource(value) {
    this.userProfileURLSource = value;
  }
}
