class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  set toggleCheckOutStatus(value) {
    this._isCheckedOut = !this.this._isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (accumulator, rating) => accumulator + rating
    );
    return ratingsSum / this.ratings.length;
  }

  addRating(value) {
    this.rating.push(value);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._autor;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director() {
    return this._director;
  }
  get runtime() {
    return this._runtime;
  }
}
