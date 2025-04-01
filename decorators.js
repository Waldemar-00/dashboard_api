"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var log = console.log;
function AddName(constructor, context) {
    log(context);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.surname = 'Some_Name';
            return _this;
        }
        return class_1;
    }(constructor));
}
function Greeting(originMethod, context) {
    function innerGreeting() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        log('Hello ' + args[0]);
        return originMethod.call.apply(originMethod, __spreadArray([this], args, false));
    }
    context.addInitializer(function () {
        this[context.name] = this[context.name].bind(this);
        log('This BOUND to the method!');
    });
    return innerGreeting;
}
function isAdmin(originMethod, context) {
    return function (truth) {
        if (typeof truth === 'boolean')
            return originMethod.call(this, truth);
        else
            log('Value of Admin must be a boolean');
    };
}
function Prop(_target, context) {
    log(context);
    return function (initialValue) {
        return initialValue + 111;
    };
}
var User = function () {
    var _classDecorators = [AddName];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _updateName_decorators;
    var _set_admin_decorators;
    var User = _classThis = /** @class */ (function () {
        function User_1(name) {
            this.name = (__runInitializers(this, _instanceExtraInitializers), name);
            this.id = __runInitializers(this, _id_initializers, 0);
            this._admin = (__runInitializers(this, _id_extraInitializers), false);
            this.name = name;
        }
        User_1.prototype.updateName = function (name) {
            this.name = name;
            return this.name;
        };
        Object.defineProperty(User_1.prototype, "admin", {
            set: function (truth) {
                this._admin = truth;
            },
            enumerable: false,
            configurable: true
        });
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [Prop];
        _updateName_decorators = [(Greeting)];
        _set_admin_decorators = [isAdmin];
        __esDecorate(_classThis, null, _updateName_decorators, { kind: "method", name: "updateName", static: false, private: false, access: { has: function (obj) { return "updateName" in obj; }, get: function (obj) { return obj.updateName; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _set_admin_decorators, { kind: "setter", name: "admin", static: false, private: false, access: { has: function (obj) { return "admin" in obj; }, set: function (obj, value) { obj.admin = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
var user = new User('Violla');
log(user.updateName('Mickle'));
log(user.id);
user._admin = true;
log(user._admin);
//* context - {
//*     kind: 'method',
//*     name: 'updateName',
//*     static: false,
//*     private: false,
//*     access: { has: [Function: has], get: [Function: get] }, - only if instance of class is being
//*     metadata: undefined,
//*     addInitializer: [Function (anonymous)]
// *}*
