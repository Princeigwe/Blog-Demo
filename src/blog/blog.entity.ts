import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 50})
    title: string

    @Column()
    story: string
}