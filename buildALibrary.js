class Media {
  constructor (Media){
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }
  get title() {
    return this._title;
  };
  get isCheckedOut() {
    return this._isCheckedOut;
  };
  get ratings() {
    return this._ratings;
  };

}
