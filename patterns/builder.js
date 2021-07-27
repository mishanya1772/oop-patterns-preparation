class PostcodeContract {
  constructor() {
    this.url = 'https://random-data-api.com/api';
  }

  random() {
    this.url += '/users/random_user';
    return this;
  }

  byCountry(country = 'United States') {
    this.url += `/users/random_user?country=${country}`;
    return this;
  }

  byCity(city = 'Cleveland Borough') {
    this.url += `&city=${city}`;
    return this;
  }
}

module.exports = PostcodeContract;
