import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/adminmodule.module';
import { ManagerModule } from './manager/manager.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [AdminModule, ManagerModule, TypeOrmModule.forRoot(
    { type: 'postgres',
     host: 'containers-us-west-55.railway.app',
     port: 6937,
     username: 'postgres',
     password: '6idmXMeqh6nXtWHoTodK',
     database: 'railway',
     autoLoadEntities: true,
     synchronize: true,
   }
   ),
   ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '../public'), // added ../ to get one folder back
    serveRoot: '/public/' //last slash was important
  }),
],
  controllers: [],
  providers: [],
})
export class AppModule {}
