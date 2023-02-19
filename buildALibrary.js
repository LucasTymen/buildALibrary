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
  };
    get author() {
      return this._autor;
    };
    get pages() {
      return this._pages;
    };
}
