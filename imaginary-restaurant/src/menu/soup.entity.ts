import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Soup{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    price: number;

}