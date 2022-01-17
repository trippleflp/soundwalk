export {};
declare global {
  interface Array<T> {
    removeLastInArray(): Array<T>;
    removeLastCondition(condition: boolean): Array<T>;
  }
}
// eslint-disable-next-line
Array.prototype.removeLastInArray = function <T>(this: T[]) {
  this.pop();
  return this;
};
// eslint-disable-next-line
Array.prototype.removeLastCondition = function <T>(this: T[], condition: boolean) {
  if (condition) this.pop();
  return this;
};
