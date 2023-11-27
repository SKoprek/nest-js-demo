import {Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Soup } from "./soup.entity";
import { Repository } from "typeorm";

// let soups = [
//     {id:1,name:'Rosół',price:2.5},
//     {id:2,name:'Barszcz',price:4.5}
// ];


@Injectable()
export class MenuService{
    constructor(@InjectRepository(Soup) private repo: Repository<Soup>){}

    getAllSoups(){
        // return soups;
        return this.repo.find();
    }
    getSoupById(id: number) {
        // return soups.find(x => x.id === id);
        return this.repo.findOneBy({id: id})
    }
    async editSoup(id: number, name: string, price: number) {
        // const soup = soups.find(x => x.id === id);
        // soup.name = name;
        // soup.price = price;
        // return soup;
        const tempSoup = await this.repo.findOneBy({id: id})
        tempSoup.name = name;
        tempSoup.price = price;
        return this.repo.save(tempSoup);
    }
    addSoup(name: string, price: number ){
        // const id = soups.length + 1;
        // const newSoup = {id, name, price};
        // soups.push(newSoup);
        // return newSoup;
        const newSoup = this.repo.create({name, price});
        return this.repo.save(newSoup);
    }
    async removeSoup(id: number){
        // soups = soups.filter(x=> x.id !== id)
        const tempSoup = await this.repo.findOneBy({id: id})
        this.repo.remove(tempSoup)
    }
}