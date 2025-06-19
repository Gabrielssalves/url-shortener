import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Url {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    originalUrl: string;

    @Column()
    shortUrlCode: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @Column({ default: true })
    active: boolean;
}