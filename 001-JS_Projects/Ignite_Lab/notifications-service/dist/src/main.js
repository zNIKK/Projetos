"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const http_module_1 = require("./infra/http/http.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(http_module_1.HttpModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map