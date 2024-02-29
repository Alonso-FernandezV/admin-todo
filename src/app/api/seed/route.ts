import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    // await prisma.todo.deleteMany({where: {complete:true}});
    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            {description: 'Kamiland rise', complete: true},
            { description: 'Kamiland rise'},
            { description: 'Kamiland rise'},
            { description: 'Kamiland rise'},
            { description: 'Kamiland rise'},
    ]
    });
    // const todo = await prisma.todo.create({
    //     data: {
    //         description: "Kamiland",
    //         complete: true
    //     }
    // });
    
  return NextResponse.json({mesage: 'seed executed'});
}