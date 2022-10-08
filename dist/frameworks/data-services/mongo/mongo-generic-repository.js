"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoGenericRepository = void 0;
class MongoGenericRepository {
    constructor(repository, populateOnFind = []) {
        this._repository = repository;
        this._populateOnFind = populateOnFind;
    }
    getAll() {
        return this._repository.find().populate(this._populateOnFind).exec();
    }
    get(id) {
        return this._repository.findById(id).populate(this._populateOnFind).exec();
    }
    create(item) {
        return this._repository.create(item);
    }
    update(id, item) {
        return this._repository.findByIdAndUpdate(id, item);
    }
}
exports.MongoGenericRepository = MongoGenericRepository;
//# sourceMappingURL=mongo-generic-repository.js.map