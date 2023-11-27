import { Module } from "@nestjs/common";
import { MenuController } from "./menu.controller";
import { MenuService } from "./menu.service";
import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";
import { Soup } from "./soup.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Soup])],
    controllers: [MenuController],
    providers: [MenuService]
})
export class MenuModule {}