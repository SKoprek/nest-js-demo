import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MenuModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true, //auto generowanie bazy danych!!!
    entities: ['**/*.entity.js']
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
