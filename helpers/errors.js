// для разных сообщений о 404 ошибке

module.exports = class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
};

/* можно было сделать класс для общей ошибки HTTP и унаследовать конкретные коды ошибок,
но такая задача не ставилась */
