class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach(observer => observer.update(phoneNumber));
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      this.notifyObservers(phoneNumber);
    } else {
      console.log(`Phone number ${phoneNumber} not found.`);
    }
  }
}

class PhoneNumberObserver {
  update(phoneNumber) {
    console.log(`Dialed phone number: ${phoneNumber}`);
  }
}

class DialingObserver {
  update(phoneNumber) {
    console.log(`Now Dialling ${phoneNumber}`);
  }
}

// Example:
const telephone = new Telephone();
const phoneNumberObserver = new PhoneNumberObserver();
const dialingObserver = new DialingObserver();

telephone.addObserver(phoneNumberObserver);
telephone.addObserver(dialingObserver);

telephone.addPhoneNumber('2348043232');
telephone.dialPhoneNumber('2348043232');
