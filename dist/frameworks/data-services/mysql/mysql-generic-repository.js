"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlGenericRepository = void 0;
class MySqlGenericRepository {
    constructor(repository) {
        this._repository = repository;
    }
    getAll() {
        return this._repository.find();
    }
    get(id) {
        return this._repository.findOne({ where: { id } });
    }
    create(item) {
        return this._repository.save(item);
    }
    update(id, item) {
        item.id = id;
        return this._repository.save(item);
    }
}
exports.MySqlGenericRepository = MySqlGenericRepository;
//# sourceMappingURL=mysql-generic-repository.js.map