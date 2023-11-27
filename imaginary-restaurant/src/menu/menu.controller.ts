import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { MenuService } from "./menu.service";
import { CreateSoupDto } from "./dtos/create-soup.dto";

@Controller('menu')
export class MenuController{

    constructor(private menuService: MenuService){}
    @Get('/soups')
    getSoups(){
        return this.menuService.getAllSoups()
    }
    @Get('/soup/:id')
    getSoup(@Param('id') id: string){
        return this.menuService.getSoupById(parseInt(id))
    }
    @Patch('/soup/:id')
    editSoup(@Param('id') id: string, @Body() body: CreateSoupDto){
        return this.menuService.editSoup(parseInt(id), body.name, body.price)
    }
    @Post('/soup')
    addSoup(@Body() body: CreateSoupDto ){
        return this.menuService.addSoup(body.name, body.price);
    }
    @Delete('/soup/:id')
    @HttpCode(204)
    removeSoup(@Param('id') id: string){
        return this.menuService.removeSoup(parseInt(id))
    }
}