export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const start = /^[a-z]/.test(this.name);
    const end = /[a-z]$/.test(this.name);
    const main = /\w|-/.test(this.name);
    const num = !/\d{4,}/.test(this.name);
    return start && end && main && num;
  }
}
